package com.niasian.CampProject.repository.reception;

import com.niasian.CampProject.entity.reception.Checkin;
// import com.niasian.CampProject.entity.reception.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CheckinRepository extends JpaRepository<Checkin, String> {

    Checkin findByPassportNumber(String passportNumber);

}

