package com.nandhakumar.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerAwardsModel;
import com.nandhakumar.freelancerfinderapp.Services.FreelancerAwardsService;
import com.nandhakumar.freelancerfinderapp.constant.Api;

@RestController
@CrossOrigin("*")
@RequestMapping(Api.FREELANCERAUTH)
public class FreelancerAwardsController {
    
    @Autowired 
    private FreelancerAwardsService fas;

    @GetMapping("/getfreelancerawards")
    public List<FreelancerAwardsModel> getdata(){
        return fas.getdata();
    }

    @PostMapping("/savefreelancerawards")
    public FreelancerAwardsModel savedata(@RequestBody FreelancerAwardsModel fam,@RequestParam int id){
        return fas.savedata(fam,id);
    }

    @PutMapping("/updatefreelancerawards")
    public FreelancerAwardsModel updatedata(@RequestBody FreelancerAwardsModel fam,@PathVariable int id){
        return fas.updatedata(fam, id);
    }

    @DeleteMapping("/deletefreelancerawards")
    public void deletedata(int id){
        fas.deletedata(id);
    }
}
