package com.mitesh.stockapp.StockMarketBackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserCredentialsDAO {
    private Long userID;
    private String email;
    private String password;
}
