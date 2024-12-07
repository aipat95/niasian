package com.niasian.CampProject.controller.reception;

import com.niasian.CampProject.service.reception.LogoutIntegrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reception")
public class ReceptionController {

    @Autowired
    private LogoutIntegrationService logoutIntegrationService;



    @PostMapping("/logout")
    public String logout(@RequestParam String email) {
        return logoutIntegrationService.logout(email);
    }
}

