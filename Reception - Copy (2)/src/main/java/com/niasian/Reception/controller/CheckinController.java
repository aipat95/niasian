package com.niasian.Reception.controller;

import com.niasian.Reception.entity.Checkin;
import com.niasian.Reception.service.CheckinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reception/checkin")
@CrossOrigin(origins = "http://localhost:3001")
public class CheckinController {

    @Autowired
    private CheckinService checkinService;

    @PostMapping
    public ResponseEntity<String> checkinCustomer(@RequestBody Checkin checkin) {
        Checkin savedCheckin = checkinService.checkinCustomer(checkin);
        return ResponseEntity.ok("Check-in successful for " + savedCheckin.getName());
    }

    @GetMapping
    public ResponseEntity<List<Checkin>> getAllCheckins() {
        List<Checkin> checkins = checkinService.getAllCheckins();
        return ResponseEntity.ok(checkins);
    }

    @PutMapping("/{passportNumber}")
    public ResponseEntity<String> updateCheckin(@PathVariable String passportNumber, @RequestBody Checkin updatedCheckin) {
        Checkin updatedRecord = checkinService.updateCheckin(passportNumber, updatedCheckin);
        return ResponseEntity.ok("Check-in updated for " + updatedRecord.getName());
    }

}
