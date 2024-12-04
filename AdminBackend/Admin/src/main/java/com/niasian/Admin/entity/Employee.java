package com.niasian.Admin.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Employee {
    @Id
    private String email;
    private Long passportNumber;
    private String name;
    private String birthDate;
    private String phone;
    private String job;
    private double salary;
    private String shiftManagement;


}
