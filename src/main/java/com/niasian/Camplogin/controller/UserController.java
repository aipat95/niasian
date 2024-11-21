package com.niasian.Camplogin.controller;

import com.niasian.Camplogin.entity.User;
import com.niasian.Camplogin.request.loginRequest;
import com.niasian.Camplogin.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
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
}
