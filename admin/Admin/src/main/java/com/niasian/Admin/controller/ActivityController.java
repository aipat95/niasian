package com.niasian.Admin.controller;

import com.niasian.Admin.entity.Activity;
import com.niasian.Admin.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activities")
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

