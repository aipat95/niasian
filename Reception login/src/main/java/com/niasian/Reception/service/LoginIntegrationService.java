package com.niasian.Reception.service;


import com.niasian.Reception.request.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LoginIntegrationService {

    @Autowired
    private RestTemplate restTemplate;

    public String login(LoginRequest loginRequest) {
        String LOGIN_API = "http://localhost:8080/login";
        return restTemplate.postForObject(LOGIN_API, loginRequest, String.class);
    }

    //http://localhost:8081/reception/logout?email=johndoe@example.com
    public String logout(String email) {
        String LOGOUT_API = "http://localhost:8080/logout";
        String url = LOGOUT_API + "?email=" + email;
        return restTemplate.postForObject(url, null, String.class);
    }
}