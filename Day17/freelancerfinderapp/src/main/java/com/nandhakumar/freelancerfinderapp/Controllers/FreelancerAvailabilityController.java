package com.nandhakumar.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerAvailabilityModel;
import com.nandhakumar.freelancerfinderapp.Services.FreelancerAvailabilityService;
import com.nandhakumar.freelancerfinderapp.constant.Api;

@RestController
@CrossOrigin("*")
@RequestMapping(Api.FREELANCERAUTH)
public class FreelancerAvailabilityController {
    
    @Autowired
    private FreelancerAvailabilityService fas;


    @PutMapping("/updatefreelanceravailability")
    public FreelancerAvailabilityModel savedata(@RequestParam int id,@RequestBody FreelancerAvailabilityModel fam ){
        return fas.savedata(fam,id);
    }

    @GetMapping("/getfreelanceravailability")
    public List<FreelancerAvailabilityModel> getdata(){
return fas.getdata();
    }

}
