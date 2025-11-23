package com.mitesh.stockapp.StockMarketBackend.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.mitesh.stockapp.StockMarketBackend.entity.UserCredentials;

@Service
@Component
public interface UserService {

    public void addNewUser(UserCredentials userCredentials);

    public void getUserByID(Long id);
}
