package com.niasian.CampProject.config.Reception;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration("receptionAppConfig")
public class AppConfig {
    @Bean
    public RestTemplate restTemplate()
    {
        return new RestTemplate();
    }

}
