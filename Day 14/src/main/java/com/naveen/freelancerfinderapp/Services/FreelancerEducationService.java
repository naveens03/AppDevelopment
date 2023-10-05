package com.naveen.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naveen.freelancerfinderapp.Models.FreelancerEducationModel;
import com.naveen.freelancerfinderapp.Repo.FreelancerEducationRepoInt;

@Service
public class FreelancerEducationService {
    
    @Autowired
    private FreelancerEducationRepoInt feri;

    public List<FreelancerEducationModel> getdata(){
        return feri.findAll();
    }
}
