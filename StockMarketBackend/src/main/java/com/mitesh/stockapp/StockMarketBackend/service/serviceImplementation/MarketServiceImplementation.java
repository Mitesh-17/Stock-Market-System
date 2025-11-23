package com.mitesh.stockapp.StockMarketBackend.service.serviceImplementation;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mitesh.stockapp.StockMarketBackend.dto.StockDetailsDTO;
import com.mitesh.stockapp.StockMarketBackend.service.MarketService;

@Service
public class MarketServiceImplementation implements MarketService {

    public static final String apiKey = "cuq2g2hr01qviv3iqnsgcuq2g2hr01qviv3iqnt0";

    @Override
    public StockDetailsDTO getStocksDetailsBySymbol(String symbol) {
        try {
            String url = "https://finnhub.io/api/v1/quote?symbol=" 
                         + symbol + "&token=" + apiKey;

            RestTemplate restTemplate = new RestTemplate();
            String response = restTemplate.getForObject(url, String.class);

            ObjectMapper mapper = new ObjectMapper();
            JsonNode json = mapper.readTree(response);

            StockDetailsDTO dto = new StockDetailsDTO();
            dto.setSymbol(symbol);
            dto.setCurrentPrice(json.get("c").asDouble());
            dto.setOpenPrice(json.get("o").asDouble());
            dto.setHighPrice(json.get("h").asDouble());
            dto.setLowPrice(json.get("l").asDouble());
            dto.setPreviousClose(json.get("pc").asDouble());

            // OPTIONAL — save to DB if needed
            // marketRepository.save(dto);

            return dto;

        } catch (Exception e) {
            throw new RuntimeException("Error fetching stock details: " + e.getMessage());
        }
    }
}
