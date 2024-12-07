package com.niasian.CampProject.entity.admin;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Activity {
    @Id
    private String type; // e.g., Trekking, Historical Tour
    private double price;
    private String guideName;


}
