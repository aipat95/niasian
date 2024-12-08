package com.niasian.CampProject;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.niasian.CampProject.entity.admin.Equipment;
import com.niasian.CampProject.service.admin.EquipmentService;
import com.niasian.CampProject.controller.admin.EquipmentController;
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

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(EquipmentController.class)
public class EquipmentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EquipmentService equipmentService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testAddEquipment() throws Exception {
        Equipment equipment = new Equipment();
        Equipment returnedEquipment = new Equipment();
        //nb: they're both empty, so their generated hashes should be the same
        when(equipmentService.addEquipment(equipment)).thenReturn(returnedEquipment);
        String json = objectMapper.writeValueAsString(returnedEquipment);
        mockMvc.perform(MockMvcRequestBuilders.post("/equipment")
                .contentType(MediaType.APPLICATION_JSON)
                .content(json))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(json));
        org.mockito.Mockito.verify(equipmentService).addEquipment(any(Equipment.class));
    }

    @Test
    public void testGetAllEquipment() throws Exception {
        List<Equipment> equipmentList = Arrays.asList(
                new Equipment(),
                new Equipment()
        );
        when(equipmentService.getAllEquipment()).thenReturn(equipmentList);

        String json = objectMapper.writeValueAsString(equipmentList);
        mockMvc.perform(MockMvcRequestBuilders.get("/equipment"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(json));
        org.mockito.Mockito.verify(equipmentService).getAllEquipment();
    }
}
