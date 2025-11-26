package com.mitesh.stockapp.StockMarketBackend.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.mitesh.stockapp.StockMarketBackend.entity.RegisterUser;

@Service
@Component
public interface UserService {

    public void addNewUser(RegisterUser registerUser);

    public void getUserByID(Long id);
}
