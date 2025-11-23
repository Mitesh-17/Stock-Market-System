package com.mitesh.stockapp.StockMarketBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mitesh.stockapp.StockMarketBackend.entity.UserCredentials;

@Repository
public interface UserRepository extends JpaRepository<UserCredentials,Long>{
    
}
