package com.mitesh.stockapp.StockMarketBackend.service.serviceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mitesh.stockapp.StockMarketBackend.entity.LoginRequest;
import com.mitesh.stockapp.StockMarketBackend.entity.RegisterUser;
import com.mitesh.stockapp.StockMarketBackend.repository.RegisterUserRepo;
import com.mitesh.stockapp.StockMarketBackend.service.UserService;

@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private RegisterUserRepo registerUserRepo;

    @Override
    public String addNewUser(RegisterUser registerUser) {
        try {
            RegisterUser existing = registerUserRepo.findByEmail(registerUser.getEmail());

            if (existing != null) {
                return "Email already exists!";
            }

            registerUserRepo.save(registerUser);
            return "User registered successfully!";

        } catch (Exception e) {
            return "Registration failed: " + e.getMessage();
        }
    }

    @Override
    public String loginUser(LoginRequest loginRequest) {

        RegisterUser user = registerUserRepo.findByEmail(loginRequest.getEmail());

        if (user == null) {
            return "No user found with this email!";
        }

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return "Incorrect password!";
        }

        return "Login successful!";
    }
}
