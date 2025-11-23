package com.mitesh.stockapp.StockMarketBackend.service.serviceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mitesh.stockapp.StockMarketBackend.dto.StockDetailsDTO;
import com.mitesh.stockapp.StockMarketBackend.entity.StockEntity;
import com.mitesh.stockapp.StockMarketBackend.repository.MarketRepository;
import com.mitesh.stockapp.StockMarketBackend.service.MarketService;

@Service
public class MarketServiceImplementation implements MarketService {

    @Autowired
    public MarketRepository marketRepository;

    public static final String apiKey = "cuq2g2hr01qviv3iqnsgcuq2g2hr01qviv3iqnt0";

    @Override
    public StockDetailsDTO getStocksDetailsBySymbol(String symbol) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ObjectMapper mapper = new ObjectMapper();

            String quoteUrl = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + apiKey;

            String quoteResponse = restTemplate.getForObject(quoteUrl, String.class);
            JsonNode quoteJson = mapper.readTree(quoteResponse);

            String profileUrl = "https://finnhub.io/api/v1/stock/profile2?symbol=" 
                                + symbol + "&token=" + apiKey;

            String profileResponse = restTemplate.getForObject(profileUrl, String.class);
            JsonNode profileJson = mapper.readTree(profileResponse);


            StockDetailsDTO dto = new StockDetailsDTO();
            dto.setSymbol(symbol);
            dto.setCompanyName(profileJson.has("name") ? profileJson.get("name").asText() : "N/A");
            dto.setCurrentPrice(quoteJson.get("c").asDouble());
            dto.setOpenPrice(quoteJson.get("o").asDouble());
            dto.setHighPrice(quoteJson.get("h").asDouble());
            dto.setLowPrice(quoteJson.get("l").asDouble());
            dto.setPreviousClose(quoteJson.get("pc").asDouble());


            StockEntity stockEntity = new StockEntity();
            stockEntity.setSymbol(dto.getSymbol()); 
            stockEntity.setCompanyName(dto.getCompanyName()); 
            stockEntity.setCurrentPrice(dto.getCurrentPrice()); 
            stockEntity.setOpenPrice(dto.getOpenPrice()); 
            stockEntity.setLowPrice(dto.getLowPrice()); 
            stockEntity.setHighPrice(dto.getHighPrice()); 
            stockEntity.setPreviousClose(dto.getPreviousClose()); 
            
            marketRepository.save(stockEntity);

            return dto;

        } catch (Exception e) {
            throw new RuntimeException("Error fetching stock details: " + e.getMessage());
        }
}
}
