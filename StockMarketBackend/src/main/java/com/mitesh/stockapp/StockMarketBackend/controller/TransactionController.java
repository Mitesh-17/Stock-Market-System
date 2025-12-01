package com.mitesh.stockapp.StockMarketBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitesh.stockapp.StockMarketBackend.dto.TransactionDTO;
import com.mitesh.stockapp.StockMarketBackend.service.TransactionService;

@RestController
public class TransactionController {
    
    @Autowired
    TransactionService transactionService;

    @GetMapping("/transactions")
    public List<TransactionDTO> getAllTransactions(){
        return transactionService.getAllTransactions();
    }
}
