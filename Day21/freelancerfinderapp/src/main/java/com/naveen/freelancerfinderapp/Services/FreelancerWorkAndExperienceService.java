package com.naveen.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naveen.freelancerfinderapp.Models.FreelancerModel;
import com.naveen.freelancerfinderapp.Models.FreelancerWorkAndExperienceModel;
import com.naveen.freelancerfinderapp.Repo.FreelancerRepoInt;
import com.naveen.freelancerfinderapp.Repo.FreelancerWorkAndExperienceRepoInt;

@Service
public class FreelancerWorkAndExperienceService {
    
    @Autowired
    private FreelancerWorkAndExperienceRepoInt fweri;

     @Autowired 
    private FreelancerRepoInt fri;

    public List<FreelancerWorkAndExperienceModel> getdata(){
        return fweri.findAll();
    }

    public FreelancerWorkAndExperienceModel savedata(FreelancerWorkAndExperienceModel fem,int freelancerid){
        FreelancerModel freelancer = fri.findById(freelancerid);
        List<FreelancerWorkAndExperienceModel> old = freelancer.getWorkAndExperience();
        old.add(fem);
        fweri.save(fem);
        freelancer.setWorkAndExperience(old);
        fri.save(freelancer);
        return fem;
    }

    public FreelancerWorkAndExperienceModel updatedata(FreelancerWorkAndExperienceModel fem,int id){
        fem.setId(id);
        return fweri.save(fem);
    }

    public void deletedata(int id){
        fweri.deleteById(id);
    }
}
