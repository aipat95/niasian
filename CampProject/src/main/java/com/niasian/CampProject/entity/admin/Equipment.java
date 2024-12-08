package com.niasian.CampProject.entity.admin;

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
    private String itemName; // e.g., Tent size, Pillow size
    private int quantity;
    private int used;
    private double price;


}
