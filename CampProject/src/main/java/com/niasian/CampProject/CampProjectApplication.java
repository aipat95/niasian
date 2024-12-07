package com.niasian.CampProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.niasian.CampProject.service.admin", "com.niasian.CampProject.service.reception"})
public class CampProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(CampProjectApplication.class, args);
	}

}