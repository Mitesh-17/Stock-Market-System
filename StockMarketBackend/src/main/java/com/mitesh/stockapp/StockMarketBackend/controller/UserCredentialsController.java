package com.mitesh.stockapp.StockMarketBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mitesh.stockapp.StockMarketBackend.entity.LoginRequest;
import com.mitesh.stockapp.StockMarketBackend.entity.RegisterUser;
import com.mitesh.stockapp.StockMarketBackend.service.UserService;

@RestController
@RequestMapping("/stock")
@CrossOrigin(origins = "http://localhost:5173")
public class UserCredentialsController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String addNewUser(@RequestBody RegisterUser registerUser) {
        return userService.addNewUser(registerUser);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }
}