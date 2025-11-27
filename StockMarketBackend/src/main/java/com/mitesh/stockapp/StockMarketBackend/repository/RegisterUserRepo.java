package com.mitesh.stockapp.StockMarketBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mitesh.stockapp.StockMarketBackend.entity.RegisterUser;

@Repository
public interface RegisterUserRepo extends JpaRepository<RegisterUser,Long> {
    public RegisterUser findByEmail(String name);
}
