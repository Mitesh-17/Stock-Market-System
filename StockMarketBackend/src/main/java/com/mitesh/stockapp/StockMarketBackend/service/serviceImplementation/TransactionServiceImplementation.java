package com.mitesh.stockapp.StockMarketBackend.service.serviceImplementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.mitesh.stockapp.StockMarketBackend.dto.TransactionDTO;
import com.mitesh.stockapp.StockMarketBackend.entity.Transaction;
import com.mitesh.stockapp.StockMarketBackend.repository.TransactionRepository;
import com.mitesh.stockapp.StockMarketBackend.service.TransactionService;

@Service
@Component
public class TransactionServiceImplementation implements TransactionService{
    
    @Autowired
    public TransactionRepository transactionRepository;
    
    TransactionDTO transactionDTO;

    @Override
    public List<TransactionDTO> getAllTransactions() {
        List<Transaction> list = transactionRepository.findAll();

        return list.stream()
            .map(tx -> new TransactionDTO(
                        tx.getTransactionID(),
                        tx.getUserID(),
                        tx.getStockSymbol(),
                        tx.getType(),
                        tx.getQuantity(),
                        tx.getPerUnitPrice(),
                        tx.getTotalPrice(),
                        tx.getTransactionTime()
            ))
            .collect(Collectors.toList());
    }
}
