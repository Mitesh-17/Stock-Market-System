package com.mitesh.stockapp.StockMarketBackend.service;

import com.mitesh.stockapp.StockMarketBackend.entity.LoginRequest;
import com.mitesh.stockapp.StockMarketBackend.entity.RegisterUser;

public interface UserService {

    String addNewUser(RegisterUser registerUser);

    String loginUser(LoginRequest loginRequest);
}
