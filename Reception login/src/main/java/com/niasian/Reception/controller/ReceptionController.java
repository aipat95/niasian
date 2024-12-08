package com.niasian.Reception.controller;



import com.niasian.Reception.request.LoginRequest;
import com.niasian.Reception.service.LoginIntegrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reception")
public class ReceptionController {

    @Autowired
    private LoginIntegrationService loginIntegrationService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        return loginIntegrationService.login(loginRequest);
    }

    @PostMapping("/logout")
    public String logout(@RequestParam String email) {
        return loginIntegrationService.logout(email);
    }
}