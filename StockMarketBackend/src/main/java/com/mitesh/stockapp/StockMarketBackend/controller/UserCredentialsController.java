package com.mitesh.stockapp.StockMarketBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitesh.stockapp.StockMarketBackend.entity.RegisterUser;
import com.mitesh.stockapp.StockMarketBackend.service.UserService;

@RestController
@RequestMapping("/stock")
@CrossOrigin(origins = "http://localhost:5173")
public class UserCredentialsController {
    
    @Autowired
    private UserService userService; 

    @PostMapping("/register")
    public void addNewUser(@RequestBody RegisterUser registerUser){
        userService.addNewUser(registerUser);
    }
}
