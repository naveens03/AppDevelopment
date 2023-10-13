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

import com.nandhakumar.freelancerfinderapp.Models.FreelancerWorkAndExperienceModel;
import com.nandhakumar.freelancerfinderapp.Services.FreelancerWorkAndExperienceService;
import com.nandhakumar.freelancerfinderapp.constant.Api;

@RestController
@CrossOrigin("*")
@RequestMapping(Api.FREELANCERAUTH)
public class FreelancerWorkAndExperienceController {
    
    @Autowired
    private FreelancerWorkAndExperienceService fwes;

    @GetMapping("/getfreelancerworkandexperience")
    public List<FreelancerWorkAndExperienceModel> getdata(){
        return fwes.getdata();
    }

    @PostMapping("/savefreelancerworkandexperience")
    public FreelancerWorkAndExperienceModel savedata(@RequestBody FreelancerWorkAndExperienceModel fpm,@RequestParam int id){
        return fwes.savedata(fpm,id);
    }

    @PutMapping("/updatefreelancerworkandexperience")
    public FreelancerWorkAndExperienceModel updatedata(@RequestBody FreelancerWorkAndExperienceModel fpm,@PathVariable int id){
        return fwes.updatedata(fpm, id);
    }

    @DeleteMapping("/deletefreelancerworkandexperience")
    public void deletedata(int id){
        fwes.deletedata(id);
    }
}
