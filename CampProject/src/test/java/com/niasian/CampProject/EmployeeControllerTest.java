package com.niasian.CampProject;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.niasian.CampProject.controller.admin.EmployeeController;
import com.niasian.CampProject.entity.admin.Employee;
import com.niasian.CampProject.service.admin.EmployeeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(EmployeeController.class)
public class EmployeeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmployeeService employeeService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testAddEmployee() throws Exception {
        Employee employee = new Employee();
        Employee returnedEmployee = new Employee();
        when(employeeService.addEmployee(employee)).thenReturn(returnedEmployee);
        String json = objectMapper.writeValueAsString(returnedEmployee);
        mockMvc.perform(MockMvcRequestBuilders.post("/employees")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(json));
        org.mockito.Mockito.verify(employeeService).addEmployee(returnedEmployee);
    }

    @Test
    public void testDeleteEmployee() throws Exception {
        Employee testChillGuy = new Employee();
        testChillGuy.setEmail("imjustachillguy@google.com");  
        mockMvc.perform(MockMvcRequestBuilders.delete("/employees/{email}", testChillGuy.getEmail()))
                .andExpect(status().isOk());
        org.mockito.Mockito.verify(employeeService).deleteEmployee(testChillGuy.getEmail());
    }

    @Test
    public void testGetAllEmployees() throws Exception {
        Employee employee = new Employee();
        Employee returnedEmployee = new Employee();
        List<Employee> employees = Arrays.asList(
                employee,
                returnedEmployee
        );
        when(employeeService.getAllEmployees()).thenReturn(employees);
        String json = objectMapper.writeValueAsString(employees);
        mockMvc.perform(MockMvcRequestBuilders.get("/employees"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(json));
        org.mockito.Mockito.verify(employeeService).getAllEmployees();
    }
}
