package com.niasian.Admin.service;

import com.niasian.Admin.entity.Activity;
import com.niasian.Admin.respository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
;

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