package com.niasian.CampProject.service.admin;

import com.niasian.CampProject.entity.admin.Activity;
import com.niasian.CampProject.repository.admin.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
@Service

public class ActivityService {
    @Autowired
    private ActivityRepository activityRepository;

    public Activity addActivity(Activity activity) {

        return activityRepository.save(activity);
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public void deleteActivity(String type) {
        activityRepository.deleteById(type);
    }
}
