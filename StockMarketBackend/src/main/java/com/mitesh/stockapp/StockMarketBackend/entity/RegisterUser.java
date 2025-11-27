package com.mitesh.stockapp.StockMarketBackend.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_credentials")
public class RegisterUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userid;

    @NotBlank(message = "Full name is required")
    @Size(min = 2, message = "Full name must contain at least 2 letters")
    private String fullName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    @Column(unique = true, nullable = false)
    private String email;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be exactly 10 digits")
    private String phone;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

    @NotBlank(message = "Gender is required")
    private String gender;

    @NotBlank(message = "You must accept Terms & Conditions")
    private String termsAccepted;

    @CreationTimestamp
    private LocalDateTime createdAt;
}
