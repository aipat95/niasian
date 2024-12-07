package com.niasian.CampProject;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.niasian.CampProject.controller.reception.CheckinController;
import com.niasian.CampProject.entity.reception.Checkin;
import com.niasian.CampProject.service.reception.CheckinService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CheckinController.class)
public class CheckinControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CheckinService checkinService;

    @Autowired
    private ObjectMapper objectMapper;

    // Test for POST /reception/checkin
    @Test
    public void testCheckinCustomer() throws Exception {
        Checkin checkin = new Checkin();
        checkin.setName("Test Customer 1");
        checkin.setPassportNumber("123456");

        Checkin savedCheckin = new Checkin();
        savedCheckin.setName("Test Customer 1");
        savedCheckin.setPassportNumber("123456");

        when(checkinService.checkinCustomer(checkin)).thenReturn(savedCheckin);

        String jsonCheckin = objectMapper.writeValueAsString(checkin);
        mockMvc.perform(MockMvcRequestBuilders.post("/reception/checkin")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonCheckin))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("Test Customer"));
        verify(checkinService, times(1)).checkinCustomer(checkin);
    }

    // Test for GET /reception/checkin
    @Test
    public void testGetAllCheckins() throws Exception {
        List<Checkin> checkins = new ArrayList<>();
        Checkin checkin1 = new Checkin();
        checkin1.setName("Customer 1");
        checkin1.setPassportNumber("111111");
        Checkin checkin2 = new Checkin();
        checkin2.setName("Customer 2");
        checkin2.setPassportNumber("222222");
        checkins.add(checkin1);
        checkins.add(checkin2);
        when(checkinService.getAllCheckins()).thenReturn(checkins);
        String jsonCheckins = objectMapper.writeValueAsString(checkins);
        mockMvc.perform(MockMvcRequestBuilders.get("/reception/checkin"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(jsonCheckins));
        verify(checkinService, times(1)).getAllCheckins();
    }

    // Test for PUT /reception/checkin/{passportNumber}
    @Test
    public void testUpdateCheckin() throws Exception {
        String passportNumber = "123456";
        Checkin updatedCheckin = new Checkin();
        updatedCheckin.setName("Updated Customer");
        updatedCheckin.setPassportNumber("123456");
        Checkin updatedRecord = new Checkin();
        updatedRecord.setName("Updated Customer");
        updatedRecord.setPassportNumber("123456");
        when(checkinService.updateCheckin(passportNumber, updatedCheckin)).thenReturn(updatedRecord);
        String jsonUpdatedCheckin = objectMapper.writeValueAsString(updatedCheckin);
        mockMvc.perform(MockMvcRequestBuilders.put("/reception/checkin/{passportNumber}", passportNumber)
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonUpdatedCheckin))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("Check-in updated for Updated Customer"));
        verify(checkinService, times(1)).updateCheckin(passportNumber, updatedCheckin);
    }
}
