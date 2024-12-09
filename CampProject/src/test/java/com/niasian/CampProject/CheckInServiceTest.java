package com.niasian.CampProject;

import com.niasian.CampProject.entity.reception.Checkin;
import com.niasian.CampProject.repository.reception.CheckinRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class CheckInServiceTest {

    @Autowired
    private CheckinRepository checkinRepository;

    @BeforeEach
    public void setup() {
        checkinRepository.deleteAll();
    }

    @Test
    public void testCheckIn() {
        Checkin checkin = new Checkin();
        checkin.setPassportNumber("AB1234567");
        checkin.setName("Jane Smith");
        checkin.setCheckInDate("2024-12-08");
        checkin.setCampsiteFees(150.0);
        checkin.setCheckoutStatus(true);

        Checkin savedCheckIn = checkinRepository.save(checkin);

        assertNotNull(savedCheckIn);
        assertEquals("Jane Smith", savedCheckIn.getName());
        assertTrue(savedCheckIn.getCheckoutStatus());
    }

    @Test
    public void testFindAllCheckIns() {
        Checkin checkIn = new Checkin();
        checkIn.setPassportNumber("AB1234567");
        checkIn.setName("Jane Smith");
        checkinRepository.save(checkIn);

        List<Checkin> checkIns = checkinRepository.findAll();

        assertNotNull(checkIns);
        assertEquals(1, checkIns.size());
    }

    @Test
    public void testUpdateCheckIn() {
        Checkin checkIn = new Checkin();
        checkIn.setPassportNumber("AB1234567");
        checkIn.setName("Jane Smith");
        checkinRepository.save(checkIn);

        Checkin existingCheckIn = checkinRepository.findById("AB1234567").orElse(null);
        assertNotNull(existingCheckIn);

        existingCheckIn.setName("magic");
        checkinRepository.save(existingCheckIn);

        Checkin updatedCheckIn = checkinRepository.findById("AB1234567").orElse(null);
        assertNotNull(updatedCheckIn);
        assertEquals("magic", updatedCheckIn.getName());
    }

    @Test
    public void testDeleteCheckIn() {
        Checkin checkIn = new Checkin();
        checkIn.setPassportNumber("AB1234567");
        checkinRepository.save(checkIn);

        checkinRepository.deleteById("AB1234567");

        boolean exists = checkinRepository.existsById("AB1234567");
        assertFalse(exists);
    }
}
