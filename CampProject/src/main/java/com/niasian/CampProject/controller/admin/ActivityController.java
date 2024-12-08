package com.niasian.CampProject.controller.admin;

import com.niasian.CampProject.entity.admin.Activity;
import com.niasian.CampProject.service.admin.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/activities")
@CrossOrigin(origins = "http://localhost:5173")

public class ActivityController {
    @Autowired
    private ActivityService activityService;

    // Add a new activity
    @PostMapping
    public Activity addActivity(@RequestBody Activity activity) {
        return activityService.addActivity(activity);
    }

    // Delete an activity by ID
    @DeleteMapping("/{type}")
    public void deleteActivity(@PathVariable String type) {
        activityService.deleteActivity(type);
    }

    // Get all activities
    @GetMapping
    public List<Activity> getAllActivities() {
        return activityService.getAllActivities();
    }

}