package com.niasian.CampProject.repository.admin;

import com.niasian.CampProject.entity.admin.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long> {}
