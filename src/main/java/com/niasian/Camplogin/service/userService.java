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
        Optional<User> userOptional = userrepo.findByEmail(loginrequest.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return user.getPassword().equals(loginrequest.getPassword());

        }

        return false;
    }

}