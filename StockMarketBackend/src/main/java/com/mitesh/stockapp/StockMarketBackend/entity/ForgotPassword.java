package com.mitesh.stockapp.StockMarketBackend.entity;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ForgotPassword {
    public String email;
    public String newPassword;
    public String confirmPassword;
}
