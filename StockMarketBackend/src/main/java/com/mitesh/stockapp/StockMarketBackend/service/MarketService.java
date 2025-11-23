package com.mitesh.stockapp.StockMarketBackend.service;

import com.mitesh.stockapp.StockMarketBackend.dto.StockDetailsDTO;

public interface MarketService {

    public StockDetailsDTO  getStocksDetailsBySymbol(String symbol);
    
}
