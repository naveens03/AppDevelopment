package com.naveen.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naveen.freelancerfinderapp.Models.FreelancerProjectsModel;
import com.naveen.freelancerfinderapp.Services.FreelancerProjectsService;

@RestController
public class FreelancerProjectsController {
    
    @Autowired
    private FreelancerProjectsService fps;

    @GetMapping("/getfreelancerprojects")
    public List<FreelancerProjectsModel> getdata(){
        return fps.getdata();
    }
}
