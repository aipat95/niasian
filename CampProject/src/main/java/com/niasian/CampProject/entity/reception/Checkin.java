package com.niasian.CampProject.entity.reception;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import lombok.Data;

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
    private Boolean checkoutStatus;
    private String equipmentRented;
    private String additionalServices;


}