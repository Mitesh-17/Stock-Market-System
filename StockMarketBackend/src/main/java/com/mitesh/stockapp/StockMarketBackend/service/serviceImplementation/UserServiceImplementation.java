package com.mitesh.stockapp.StockMarketBackend.service.serviceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mitesh.stockapp.StockMarketBackend.dto.UserCredentialsDAO;
import com.mitesh.stockapp.StockMarketBackend.entity.UserCredentials;
import com.mitesh.stockapp.StockMarketBackend.repository.UserRepository;
import com.mitesh.stockapp.StockMarketBackend.service.UserService;

@Component
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public void addNewUser(UserCredentials userCredentials) {
        
        try{
            userRepository.save(userCredentials);
            System.out.println("User Record is Succesfully Inserted...!");
        }catch(Exception e){
            System.err.println("OOPs... "+e);
        }
    }


    @Override
    public void getUserByID(Long id) {

        UserCredentials user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User does not exist with the given ID: " + id));

        
        UserCredentialsDAO dto = new UserCredentialsDAO(
                    user.getUserID(),
                    user.getEmail(),
                    user.getPassword()
            );

            // Print DTO in one line
            System.out.println(dto);
    }

    
}
