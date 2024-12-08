package com.niasian.CampProject.controller.admin;

import com.niasian.CampProject.service.admin.LogoutIntegrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3001")
public class AdminController {

    @Autowired
    private LogoutIntegrationService logoutIntegrationService;
 

    @PostMapping("/logout")
    public String logout(@RequestParam String email) {
        return logoutIntegrationService.logout(email);
    }
}
