package com.naveen.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.naveen.freelancerfinderapp.Models.FreelancerAwardsModel;
import com.naveen.freelancerfinderapp.Services.FreelancerAwardsService;

@RestController
public class FreelancerAwardsController {
    
    @Autowired 
    private FreelancerAwardsService fas;

    @GetMapping("/getfreelancerawards")
    public List<FreelancerAwardsModel> getdata(){
        return fas.getdata();
    }
}
