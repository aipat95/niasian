package com.niasian.Admin.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Equipment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type; // e.g., Tent, Blanket
    private String size; // e.g., Tent size, Pillow size
    private int totalNumber;
    private int availableNumber;
    private double rentFee;


}