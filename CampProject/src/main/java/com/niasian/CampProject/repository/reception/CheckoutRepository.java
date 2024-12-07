package com.niasian.CampProject.repository.reception;

import com.niasian.CampProject.entity.reception.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, String> {
    Checkout findByPassportNumber(String passportNumber);
}
