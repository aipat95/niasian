package com.niasian.Admin.service;

import com.niasian.Admin.entity.Employee;
import com.niasian.Admin.respository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(String email) {
        employeeRepository.deleteById(email);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
