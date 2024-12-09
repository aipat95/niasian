package com.niasian.CampProject.service.reception;

import com.niasian.CampProject.entity.reception.Checkin;
import com.niasian.CampProject.repository.reception.CheckinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CheckinService {

    @Autowired
    private CheckinRepository checkinRepository;

    public Checkin checkinCustomer(Checkin checkin) {
        return checkinRepository.save(checkin);
    }

    public List<Checkin> getAllCheckins() {
        return checkinRepository.findAll();
    }

    // public Checkin updateCheckin(String passportNumber, Checkin updatedCheckin) {
    //     return checkinRepository.findById(passportNumber).map(existingCheckin -> {
    //         existingCheckin.setName(updatedCheckin.getName());
    //         existingCheckin.setCheckInDate(updatedCheckin.getCheckInDate());
    //         existingCheckin.setAdditionalServices(updatedCheckin.getAdditionalServices());
    //         existingCheckin.setCheckOutDate(updatedCheckin.getCheckOutDate());
    //         existingCheckin.setEquipmentRented(updatedCheckin.getEquipmentRented());
    //         return checkinRepository.save(existingCheckin);
    //     }).orElseThrow(() -> new RuntimeException("Check-in not found with ID: " + passportNumber));
    // }
    public Checkin updateCheckin(String passportNumber, Checkin updatedCheckin) {
        // Fetch the existing check-in record using passportNumber
        Checkin checkin = checkinRepository.findByPassportNumber(passportNumber);
        if (checkin != null) {
            // Update the checkinStatus to false to indicate check-out
            checkin.setCheckoutStatus(false); // Mark the customer as checked out
            checkinRepository.save(checkin);
        }
        return checkin;
    }
    
}
