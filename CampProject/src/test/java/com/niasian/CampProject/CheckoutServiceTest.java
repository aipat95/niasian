package com.niasian.CampProject;

import com.niasian.CampProject.entity.reception.Checkout;
import com.niasian.CampProject.repository.reception.CheckoutRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CheckoutServiceTest {

    @Autowired
    private CheckoutRepository checkoutRepository;

    @BeforeEach
    public void setup() {
        // Clear the repository before each test
        checkoutRepository.deleteAll();
    }

    @Test
    public void testCheckoutCustomer() {
        Checkout checkout = new Checkout();
        checkout.setPassportNumber("AB1234567");
        checkout.setName("Jane Doe");
        checkout.setCheckOutDate("2024-12-15");

        Checkout savedCheckout = checkoutRepository.save(checkout);

        assertNotNull(savedCheckout);
        assertEquals("Jane Doe", savedCheckout.getName());
        assertEquals("2024-12-15", savedCheckout.getCheckOutDate());
    }

    @Test
    public void testGetCheckoutByPassportNumber() {
        Checkout checkout = new Checkout();
        checkout.setPassportNumber("AB1234567");
        checkout.setName("Jane Doe");
        checkout.setCheckOutDate("2024-12-15");
        checkoutRepository.save(checkout);

        Checkout retrievedCheckout = checkoutRepository.findByPassportNumber("AB1234567");

        assertNotNull(retrievedCheckout);
        assertEquals("Jane Doe", retrievedCheckout.getName());
        assertEquals("2024-12-15", retrievedCheckout.getCheckOutDate());
    }

    @Test
    public void testDeleteCheckout() {
        Checkout checkout = new Checkout();
        checkout.setPassportNumber("AB1234567");
        checkoutRepository.save(checkout);

        checkoutRepository.deleteById("AB1234567");

        boolean exists = checkoutRepository.existsById("AB1234567");
        assertFalse(exists);
    }

    @Test
    public void testUpdateCheckout() {
        Checkout checkout = new Checkout();
        checkout.setPassportNumber("AB1234567");
        checkout.setName("Jane Doe");
        checkout.setCheckOutDate("2024-12-15");
        checkoutRepository.save(checkout);

        Checkout existingCheckout = checkoutRepository.findByPassportNumber("AB1234567");
        assertNotNull(existingCheckout);

        existingCheckout.setName("Updated Name");
        existingCheckout.setCheckOutDate("2024-12-16");
        checkoutRepository.save(existingCheckout);

        Checkout updatedCheckout = checkoutRepository.findByPassportNumber("AB1234567");
        assertNotNull(updatedCheckout);
        assertEquals("Updated Name", updatedCheckout.getName());
        assertEquals("2024-12-16", updatedCheckout.getCheckOutDate());
    }
}