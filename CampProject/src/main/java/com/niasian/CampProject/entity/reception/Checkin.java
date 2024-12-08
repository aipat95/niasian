package com.niasian.CampProject.entity.reception;

import jakarta.persistence.*;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
public class Checkin {

    @Id
    private String passportNumber;
    private String name;
    private String checkInDate;
    private String checkOutDate;
    private double campsiteFees;
    private double carParkFees;
    private Boolean checkinStatus;


    private String equipmentRented;

    private String additionalServices;


}