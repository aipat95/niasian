package com.niasian.CampProject.service.reception;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service("receptionLogoutIntegrationService")
public class LogoutIntegrationService {


    private RestTemplate restTemplate;


    //http://localhost:8081/reception/logout?email=johndoe@example.com
    public String logout(String email) {
        String LOGOUT_API = "http://localhost:8080/logout";
        String url = LOGOUT_API + "?email=" + email;
        return restTemplate.postForObject(url, null, String.class);
    }
}
