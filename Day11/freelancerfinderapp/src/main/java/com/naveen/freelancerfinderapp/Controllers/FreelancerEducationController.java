package com.naveen.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naveen.freelancerfinderapp.Models.FreelancerEducationModel;
import com.naveen.freelancerfinderapp.Services.FreelancerEducationService;

@RestController
public class FreelancerEducationController {
    
    @Autowired
    private FreelancerEducationService fes;

    @GetMapping("/getfreelancereducation")
    public List<FreelancerEducationModel> getdata(){
        return fes.getdata();
    }
}
