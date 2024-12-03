package com.niasian.Camplogin.controller;

import com.niasian.Camplogin.entity.User;
import com.niasian.Camplogin.request.loginRequest;
import com.niasian.Camplogin.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://172.22.57.58:5174")
public class UserController {
    @Autowired
    userService userservice;

    @PostMapping("/signUp")
    public User signUp(@RequestBody User user){
        return userservice.signUp(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody loginRequest loginrequest) {

       return userservice.loginUser(loginrequest);

    }

    @PostMapping("/logout")
    public String logout(@RequestParam String email) {
        return userservice.logoutUser(email);
    }
}
