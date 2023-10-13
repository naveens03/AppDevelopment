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

import com.nandhakumar.freelancerfinderapp.Models.FreelancerEducationModel;
import com.nandhakumar.freelancerfinderapp.Services.FreelancerEducationService;
import com.nandhakumar.freelancerfinderapp.constant.Api;

@RestController
@CrossOrigin("*")
@RequestMapping(Api.FREELANCERAUTH)
public class FreelancerEducationController {
    
    @Autowired
    private FreelancerEducationService fes;

    @GetMapping("/getfreelancereducation")
    public List<FreelancerEducationModel> getdata(){
        return fes.getdata();
    }

    @PostMapping("/savefreelancereducation")
    public FreelancerEducationModel savedata(@RequestBody FreelancerEducationModel fem,@RequestParam int id){
        return fes.savedata(fem,id);
    }

    @PutMapping("/updatefreelancereducation")
    public FreelancerEducationModel updatedata(@RequestBody FreelancerEducationModel fem,@PathVariable int id){
        return fes.updatedata(fem, id);
    }

    @DeleteMapping("/deletefreelancereducation")
    public void deletedata(int id){
        fes.deletedata(id);
    }
}
