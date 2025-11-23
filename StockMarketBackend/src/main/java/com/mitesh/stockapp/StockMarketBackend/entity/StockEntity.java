package com.mitesh.stockapp.StockMarketBackend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
@Entity
@Table(name = "stocks")
public class StockEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Stock symbol cannot be blank")
    @Size(min = 1, max = 10, message = "Symbol length must be between 1 and 10 characters")
    @Column(nullable = false, length = 10)
    private String symbol;

    @NotBlank(message = "Company name cannot be blank")
    @Size(min = 2, max = 100, message = "Company name must be between 2 and 100 characters")
    @Column(nullable = false, length = 100)
    private String companyName;

    @PositiveOrZero(message = "Current price cannot be negative")
    @Column(nullable = false)
    private double currentPrice;

    @PositiveOrZero(message = "Open price cannot be negative")
    private double openPrice;

    @PositiveOrZero(message = "High price cannot be negative")
    private double highPrice;

    @PositiveOrZero(message = "Low price cannot be negative")
    private double lowPrice;

    @PositiveOrZero(message = "Previous close price cannot be negative")
    private double previousClose;

    @PositiveOrZero(message = "Volume cannot be negative")
    private long volume;

    @Column(name = "last_updated")
    private long lastUpdated;
}
