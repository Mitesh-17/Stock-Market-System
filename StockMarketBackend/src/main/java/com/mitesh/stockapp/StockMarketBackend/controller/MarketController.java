package com.mitesh.stockapp.StockMarketBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitesh.stockapp.StockMarketBackend.service.MarketService;

@RestController
@RequestMapping("/stock")
public class MarketController {
    
    @Autowired
    private MarketService marketService;

    @GetMapping("/market-data/symbol/{symbol}")
    public ResponseEntity<?> getStock(@PathVariable String symbol) {
        return ResponseEntity.ok(marketService.getStocksDetailsBySymbol(symbol));
    }

} 