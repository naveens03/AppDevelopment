package com.naveen.freelancerfinderapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.naveen.freelancerfinderapp.Models.FreelancerModel;
import com.naveen.freelancerfinderapp.Services.FreelancerService;

@RestController
public class FreelancerController {
    
    @Autowired
    private FreelancerService fs;

    @GetMapping("/getfreelancerdata")
    public List<FreelancerModel> getdata(){
        return fs.getdata();
    }

    @PostMapping("/savefreelancerdata")
    public FreelancerModel savedata(@RequestBody FreelancerModel fm){
        return fs.savedata(fm);
    }

    @PutMapping("/updatefreelancerdata")
    public FreelancerModel updatedata(@RequestBody FreelancerModel fm,@RequestParam int id){
        return fs.updatedata(fm, id);
    }

    @DeleteMapping("/deletefreelancerdata")
    public void deletedata(@RequestParam int id){
        fs.deletedata(id);
    }
}
