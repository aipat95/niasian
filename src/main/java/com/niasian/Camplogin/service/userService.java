package com.niasian.Camplogin.service;


import com.niasian.Camplogin.entity.User;
import com.niasian.Camplogin.entity.UserRole;
import com.niasian.Camplogin.repository.userRepo;
import com.niasian.Camplogin.request.loginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class userService {
    @Autowired
    userRepo userrepo;

    public User signUp(User user) {
        if (user.getUserRole() == null) {
            user.setUserRole(UserRole.RECEPTION);
        }
        return userrepo.save(user);
    }

    public Boolean loginUser(loginRequest loginrequest) {
        if (loginrequest == null || loginrequest.getEmail() == null || loginrequest.getPassword() == null) {
            // Basic validation for null values
            return false;
        }

        String email = loginrequest.getEmail().trim();
        String password = loginrequest.getPassword().trim();
        Optional<User> userOptional = userrepo.findByEmail(email);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return true;
            }
        }

        return false;
    }

}