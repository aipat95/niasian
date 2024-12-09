package com.niasian.CampProject.controller.admin;

import com.niasian.CampProject.entity.admin.Equipment;
import com.niasian.CampProject.service.admin.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipment")
@CrossOrigin(origins = "http://localhost:5173")

public class EquipmentController { @Autowired
private EquipmentService equipmentService;

    @PostMapping
    public Equipment addEquipment(@RequestBody Equipment equipment) {
        return equipmentService.addEquipment(equipment);
    }

    @GetMapping
    public List<Equipment> getAllEquipment() {
        return equipmentService.getAllEquipment();
    }

    @DeleteMapping("/{id}")
    public Equipment deleteEquipment(@PathVariable long id){
        equipmentService.deleteEquioment(id);
        return null;
    }
}
