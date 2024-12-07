package com.niasian.Reception.repository;

import com.niasian.Reception.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, String> {
    Checkout findByPassportNumber(String passportNumber);
}
