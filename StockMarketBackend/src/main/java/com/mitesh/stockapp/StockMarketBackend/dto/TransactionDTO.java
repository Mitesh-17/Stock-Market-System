package com.mitesh.stockapp.StockMarketBackend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDTO {

    private Long transactionID;
    private int userID;
    private String stockSymbol;
    private String type;
    private int quantity;
    private double perUnitPrice;
    private double totalPrice;
    private String transactionTime;
}
