package com.mitesh.stockapp.StockMarketBackend.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.mitesh.stockapp.StockMarketBackend.dto.TransactionDTO;

@Component
public interface TransactionService {
    
    public List<TransactionDTO> getAllTransactions();
}
