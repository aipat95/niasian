package com.niasian.Camplogin.entity;


import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class User {
    @Id
    private String email;

    private String password;


    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    private boolean IsLoggedIn;


}
