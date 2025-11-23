package com.mitesh.stockapp.StockMarketBackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mitesh.stockapp.StockMarketBackend.entity.UserCredentials;
import com.mitesh.stockapp.StockMarketBackend.service.UserService;

@RestController
@RequestMapping("/stock")
public class UserCredentialsController {
    
    @Autowired
    private UserService userService; 


    @PostMapping("/signUP")
    public void addNewUser(@RequestBody UserCredentials userCredentials){
        userService.addNewUser(userCredentials);
    }

    @GetMapping("/signIN/{id}")
    public void getUserByID(@PathVariable Long id){
        userService.getUserByID(id);
    }
}
