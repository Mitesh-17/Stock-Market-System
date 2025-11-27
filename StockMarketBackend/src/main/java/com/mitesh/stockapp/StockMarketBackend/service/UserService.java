package com.mitesh.stockapp.StockMarketBackend.service;

import com.mitesh.stockapp.StockMarketBackend.entity.ForgotPassword;
import com.mitesh.stockapp.StockMarketBackend.entity.LoginRequest;
import com.mitesh.stockapp.StockMarketBackend.entity.RegisterUser;

public interface UserService {

    public String addNewUser(RegisterUser registerUser);

    public String loginUser(LoginRequest loginRequest);

    public String forgotPassword(LoginRequest loginRequest);

    public String updatePassword(ForgotPassword forgotPassword);
}
