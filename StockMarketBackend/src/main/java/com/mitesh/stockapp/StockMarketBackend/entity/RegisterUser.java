package com.mitesh.stockapp.StockMarketBackend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_info")
public class RegisterUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Full Name
    @NotBlank(message = "Full name is required")
    @Size(min = 2, message = "Full name must contain at least 2 letters")
    @Pattern(regexp = "^[A-Za-z\\s]+$", message = "Full name must contain only letters")
    private String fullName;

    // Email
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    // Phone Number
    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be exactly 10 digits")
    private String phone;

    // Password
    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String confirmPassword;

    // Gender (Male / Female / Other)
    @NotBlank(message = "Gender is required")
    private String gender;

    // Terms checkbox
    @NotBlank(message = "You must accept Terms & Conditions")
    private String termsAccepted;
}