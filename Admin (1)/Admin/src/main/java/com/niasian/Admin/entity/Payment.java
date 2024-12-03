package com.niasian.Admin.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String paymentDate;
    private String paymentTime;
    private double amount;

    @ManyToOne
    private Activity activity;

}
