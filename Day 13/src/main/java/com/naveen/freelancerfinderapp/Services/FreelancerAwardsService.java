package com.naveen.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naveen.freelancerfinderapp.Models.FreelancerAwardsModel;
import com.naveen.freelancerfinderapp.Repo.FreelancerAwardsRepoInt;

@Service
public class FreelancerAwardsService {
    
    @Autowired
    private FreelancerAwardsRepoInt fari;

    public List<FreelancerAwardsModel> getdata(){
        return fari.findAll();
    }
}
