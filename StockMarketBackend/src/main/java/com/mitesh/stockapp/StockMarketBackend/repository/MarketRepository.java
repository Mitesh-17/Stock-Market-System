package com.mitesh.stockapp.StockMarketBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mitesh.stockapp.StockMarketBackend.entity.StockEntity;

public interface MarketRepository extends JpaRepository<StockEntity,Long>{
    
}
