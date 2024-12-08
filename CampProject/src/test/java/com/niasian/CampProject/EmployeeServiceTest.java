package com.niasian.CampProject;

import com.niasian.CampProject.entity.admin.Employee;
import com.niasian.CampProject.repository.admin.EmployeeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class EmployeeServiceTest {


    @Autowired
    private EmployeeRepository employeeRepository;

    @BeforeEach
    public void setup() {

        employeeRepository.deleteAll();
    }
    @Test
    public void testCreateEmployee() {
        Employee employee = new Employee();
        employee.setEmail("john.doe@example.com");
        employee.setName("John Doe");
        employee.setBirthDate("1990-05-15");
        employee.setPhone("+1234567890");
        employee.setPosition("Receptionist");
        employee.setSalary(60000.0);

        Employee savedEmployee = employeeRepository.save(employee);

        assertNotNull(savedEmployee);
        assertEquals("John Doe", savedEmployee.getName());
    }


    @Test
    public void testFindEmployee() {
        // Insert a test record
        Employee employee = new Employee();
        employee.setEmail("jane.doe@example.com");
        employee.setName("Jane Doe");
        employee.setBirthDate("1985-03-10");
        employee.setPhone("+9876543210");
        employee.setPosition("Developer");
        employee.setSalary(70000.0);
        employeeRepository.save(employee);

        // Test retrieval
        Employee foundEmployee = employeeRepository.findById("jane.doe@example.com").orElse(null);

        assertNotNull(foundEmployee);
        assertEquals("Jane Doe", foundEmployee.getName());
    }
    @Test
    public void testDeleteEmployee() {
        // Insert a test record
        Employee employee = new Employee();
        employee.setEmail("jane.doe@example.com");
        employee.setName("Jane Doe");
        employeeRepository.save(employee);

        // Delete the employee
        employeeRepository.deleteById("jane.doe@example.com");

        // Verify deletion
        boolean exists = employeeRepository.existsById("jane.doe@example.com");
        assertFalse(exists);
    }
}
