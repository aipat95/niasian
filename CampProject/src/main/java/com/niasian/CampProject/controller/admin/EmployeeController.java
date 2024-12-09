package com.niasian.CampProject.controller.admin;

import com.niasian.CampProject.entity.admin.Employee;
import com.niasian.CampProject.service.admin.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/employees")
@CrossOrigin(origins = "http://localhost:5173")

public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @DeleteMapping("/{email}")
    public void deleteEmployee(@PathVariable String email) {
        employeeService.deleteEmployee(email);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }
}