package com.mitesh.stockapp.StockMarketBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mitesh.stockapp.StockMarketBackend.entity.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction,Long>{
    
}
