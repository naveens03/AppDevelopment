package com.naveen.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naveen.freelancerfinderapp.Models.FreelancerEducationModel;
import com.naveen.freelancerfinderapp.Models.FreelancerModel;
import com.naveen.freelancerfinderapp.Repo.FreelancerEducationRepoInt;
import com.naveen.freelancerfinderapp.Repo.FreelancerRepoInt;

@Service
public class FreelancerEducationService {
    
    @Autowired
    private FreelancerEducationRepoInt feri;

    @Autowired 
    private FreelancerRepoInt fri;

    public List<FreelancerEducationModel> getdata(){
        return feri.findAll();
    }

    public FreelancerEducationModel savedata(FreelancerEducationModel fem,int freelancerid){
        FreelancerModel freelancer = fri.findById(freelancerid);
        List<FreelancerEducationModel> old = freelancer.getEducation();
        old.add(fem);
        feri.save(fem);
        freelancer.setEducation(old);
        fri.save(freelancer);
        return fem;
    }

    public FreelancerEducationModel updatedata(FreelancerEducationModel fem,int id){
        fem.setId(id);
        return feri.save(fem);
    }

    public void deletedata(int id){
        feri.deleteById(id);
    }
}
