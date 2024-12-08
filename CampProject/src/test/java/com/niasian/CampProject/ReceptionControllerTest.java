package com.niasian.CampProject;

import com.niasian.CampProject.service.reception.LogoutIntegrationService;
import com.niasian.CampProject.controller.reception.ReceptionController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ReceptionController.class)
public class ReceptionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private LogoutIntegrationService logoutIntegrationService;

    // Test for successful logout
    @Test
    public void testLogout_Success() throws Exception {
        String email = "test@chillguy.com";
        String expectedResponse = "Logged out successfully";
        when(logoutIntegrationService.logout(email)).thenReturn(expectedResponse);
        mockMvc.perform(MockMvcRequestBuilders.post("/reception/logout")
                .param("email", email))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string(expectedResponse));
        verify(logoutIntegrationService, times(1)).logout(email);
    }

    // Test for missing email parameter
    @Test
    public void testLogout_MissingEmail() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/reception/logout"))
                .andExpect(status().isBadRequest());
        verify(logoutIntegrationService, never()).logout(anyString());
    }
}
