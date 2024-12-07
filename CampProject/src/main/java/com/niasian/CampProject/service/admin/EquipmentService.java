package com.niasian.CampProject.service.admin;

import com.niasian.CampProject.entity.admin.Equipment;
import com.niasian.CampProject.repository.admin.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentService {
    @Autowired
    private EquipmentRepository equipmentRepository;

    public Equipment addEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    public List<Equipment> getAllEquipment() {
        return equipmentRepository.findAll();
    }

    public void deleteEquioment(Long id) {
        equipmentRepository.deleteById(id);
    }
}
