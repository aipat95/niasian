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

    public String loginUser(loginRequest loginrequest) {
        Optional<User> userOptional = userrepo.findByEmail(loginrequest.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(loginrequest.getPassword())){
                if (user.getUserRole().equals(UserRole.ADMIN)) {
                    user.setIsLoggedIn(true);
                    userrepo.save(user);
                    return "Login successful for Admin!";


                } else if (user.getUserRole().equals(UserRole.RECEPTION)) {

                    user.setIsLoggedIn(true);
                    userrepo.save(user);
                    return "Login successful for Reception!";
                }


            return "Unauthorized role!";
        }


        return "Invalid password!";
    }
        return "Invalid email!";


    }


}

