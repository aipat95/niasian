package com.niasian.Admin.controller;

import com.niasian.Admin.request.LoginRequest;
import com.niasian.Admin.service.LoginIntegrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

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

