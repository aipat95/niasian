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
        return userrepo.save(user);
    }

    public String loginUser(loginRequest loginrequest) {
        Optional<User> userOptional = userrepo.findByEmail(loginrequest.getEmail());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(loginrequest.getPassword())) {
                if (user.getUserRole().equals(UserRole.ADMIN)) {
                    user.setIsLoggedIn(true);
                    userrepo.save(user);
                    return "ADMIN";
                }
                if (user.getUserRole().equals(UserRole.RECEPTION)) {
                    user.setIsLoggedIn(true);
                    userrepo.save(user);
                    return "RECEPTION";
                }
            } else {
                return "Wrong password";
            }
        }
        return "Login Failed";
    }



    public String logoutUser(String email) {
        Optional<User> userOptional = userrepo.findByEmail(email);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setIsLoggedIn(false);
            userrepo.save(user);
            return "Logout successful!";
        }
        return "User not found!";

    }


}

