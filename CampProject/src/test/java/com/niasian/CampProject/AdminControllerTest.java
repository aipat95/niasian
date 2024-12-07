package com.niasian.CampProject;

import com.niasian.CampProject.service.admin.LogoutIntegrationService;
import com.niasian.CampProject.controller.admin.AdminController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AdminController.class)
public class AdminControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LogoutIntegrationService logoutIntegrationService;

    //we can't run this test until we're able to simulate a login
    @Test
    public void testLogout_Success() throws Exception {
        String email = "test@example.com";
        String expectedResponse = "Logged out successfully";
        when(logoutIntegrationService.logout(email)).thenReturn(expectedResponse);
        mockMvc.perform(MockMvcRequestBuilders.post("/admin/logout")
                .param("email", email))
                .andExpect(status().isOk())
                .andExpect(content().string(expectedResponse))
                .andExpect(content().contentType(MediaType.TEXT_PLAIN));

        verify(logoutIntegrationService, times(1)).logout(email);
    }

    //this test is expected to pass; i.e it fails cause of incomplete details
    @Test
    public void testLogout_MissingEmail() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/admin/logout"))
                .andExpect(status().isBadRequest())
                .andExpect(result -> {
                    String error = result.getResolvedException().getMessage();
                    System.out.println("Error Message: " + error);
                })
                .andExpect(content().contentType(MediaType.APPLICATION_PROBLEM_JSON));
        verify(logoutIntegrationService, never()).logout(anyString());
    }
}
