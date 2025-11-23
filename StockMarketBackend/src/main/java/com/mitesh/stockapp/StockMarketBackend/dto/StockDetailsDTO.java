package com.mitesh.stockapp.StockMarketBackend.dto;

import lombok.Data;

@Data
public class StockDetailsDTO {
    private String symbol;
    private double currentPrice;
    private double openPrice;
    private double highPrice;
    private double lowPrice;
    private double previousClose;
}
