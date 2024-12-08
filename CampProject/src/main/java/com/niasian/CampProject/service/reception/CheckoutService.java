package com.niasian.CampProject.service.reception;

import com.niasian.CampProject.entity.reception.Checkout;
import com.niasian.CampProject.repository.reception.CheckoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CheckoutService {

    @Autowired
    private CheckoutRepository checkoutRepository;

    public Checkout checkoutCustomer(Checkout checkout) {

        return checkoutRepository.save(checkout);
    }

    public Checkout getCheckoutByPassportNumber(String passportNumber) {
        Optional<Checkout> checkoutOptional = Optional.ofNullable(checkoutRepository.findByPassportNumber(passportNumber));
        return checkoutOptional.orElseThrow(() -> new RuntimeException("Checkout record not found for customer: " + passportNumber));
    }
}

