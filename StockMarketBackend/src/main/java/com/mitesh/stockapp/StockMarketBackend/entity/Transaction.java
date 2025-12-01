package com.mitesh.stockapp.StockMarketBackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionID;

    @Column(nullable = false)
    private int userID;

    @Column(nullable = false, length = 10)
    private String stockSymbol;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private double perUnitPrice;

    @Column(nullable = false)
    private double totalPrice;

    @Column(nullable = false)
    private String transactionTime;
}
