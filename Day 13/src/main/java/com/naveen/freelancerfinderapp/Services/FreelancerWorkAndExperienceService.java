package com.naveen.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naveen.freelancerfinderapp.Models.FreelancerWorkAndExperienceModel;
import com.naveen.freelancerfinderapp.Repo.FreelancerWorkAndExperienceRepoInt;

@Service
public class FreelancerWorkAndExperienceService {
    
    @Autowired
    private FreelancerWorkAndExperienceRepoInt fweri;

    public List<FreelancerWorkAndExperienceModel> getdata(){
        return fweri.findAll();
    }
}
