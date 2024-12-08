package com.niasian.Camplogin.controller;

import com.niasian.Camplogin.entity.User;
import com.niasian.Camplogin.request.loginRequest;
import com.niasian.Camplogin.service.userService;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    userService userservice;

    @PostMapping("/signUp")
    public User signUp(@RequestBody User user){
        return userservice.signUp(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody loginRequest loginrequest) {
        String role = userservice.loginUser(loginrequest);
        // Check if the role is ADMIN or RECEPTION
        if ("ADMIN".equals(role) || "RECEPTION".equals(role)) {
            Map<String, String> response = new HashMap<>();
            response.put("role", role); // Include role as JSON
            return ResponseEntity.ok(response); // HTTP 200 OK with JSON
        }
        return ResponseEntity
                .status(401)
                .body(Map.of("error", "Invalid login credentials or role!"));
    }

    @PostMapping("/logout")
    public String logout(@RequestParam String email) {
        return userservice.logoutUser(email);
    }
}
