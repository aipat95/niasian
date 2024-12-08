package com.niasian.Reception.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;


@Entity
@Data
public class Checkout {

    @Id

    private String passportNumber;
    private String name;
    private String checkOutDate;



}
