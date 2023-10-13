package com.nandhakumar.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerAwardsModel;
import com.nandhakumar.freelancerfinderapp.Models.FreelancerModel;
import com.nandhakumar.freelancerfinderapp.Repo.FreelancerAwardsRepoInt;
import com.nandhakumar.freelancerfinderapp.Repo.FreelancerRepoInt;

@Service
public class FreelancerAwardsService {
    
    @Autowired
    private FreelancerAwardsRepoInt fari;

    @Autowired 
    private FreelancerRepoInt fri;

    public List<FreelancerAwardsModel> getdata(){
        return fari.findAll();
    }

    public FreelancerAwardsModel savedata(FreelancerAwardsModel fam,int freelancerid){
        FreelancerModel freelancer = fri.findById(freelancerid);
        List<FreelancerAwardsModel> old = freelancer.getAwards();
        old.add(fam);
        fari.save(fam);
        freelancer.setAwards(old);
        fri.save(freelancer);
        return fam;
    }

    public FreelancerAwardsModel updatedata(FreelancerAwardsModel fam,int id){
        fam.setId(id);
        return fari.save(fam);
    }

    public void deletedata(int id){
        fari.deleteById(id);
    }
}
