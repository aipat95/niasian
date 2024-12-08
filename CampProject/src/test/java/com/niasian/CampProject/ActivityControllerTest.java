package com.niasian.CampProject;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.niasian.CampProject.entity.admin.Activity;
import com.niasian.CampProject.service.admin.ActivityService;
import com.niasian.CampProject.controller.admin.ActivityController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ActivityController.class)
public class ActivityControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ActivityService activityService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testAddActivity() throws Exception {
        Activity returnedActivity = new Activity();
        when(activityService.addActivity(returnedActivity)).thenReturn(returnedActivity);
        String json = objectMapper.writeValueAsString(returnedActivity);
        mockMvc.perform(post("/activities")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isOk())
                .andExpect(content().json(json));
        verify(activityService).addActivity(returnedActivity);
    }

    @Test
    public void testDeleteActivity() throws Exception {
        String type = "hiking";
        mockMvc.perform(delete("/activities/{type}", type))
                .andExpect(status().isOk());
        verify(activityService).deleteActivity(type);
    }

    @Test
    public void testGetAllActivities() throws Exception {
        List<Activity> activities = Arrays.asList(
                new Activity(),
                new Activity()
        );
        when(activityService.getAllActivities()).thenReturn(activities);
        String json = objectMapper.writeValueAsString(activities);
        mockMvc.perform(get("/activities"))
                .andExpect(status().isOk())
                .andExpect(content().json(json));
        verify(activityService).getAllActivities();
    }
}
