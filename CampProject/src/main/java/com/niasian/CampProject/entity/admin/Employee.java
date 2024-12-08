package com.niasian.CampProject.entity.admin;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Employee {
    @Id
    private String email;
    private String name;
    private String birthDate;
    private String phone;
    private String position;
    private double salary;


}