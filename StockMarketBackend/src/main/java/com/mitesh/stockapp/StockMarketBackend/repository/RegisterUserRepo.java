package com.mitesh.stockapp.StockMarketBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mitesh.stockapp.StockMarketBackend.entity.RegisterUser;

public interface RegisterUserRepo extends JpaRepository<RegisterUser, Long> {

    RegisterUser findByEmail(String email);

    RegisterUser findByEmailAndPassword(String email, String password);
}
