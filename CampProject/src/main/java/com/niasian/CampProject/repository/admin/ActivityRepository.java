package com.niasian.CampProject.repository.admin;

import com.niasian.CampProject.entity.admin.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, String> {}
