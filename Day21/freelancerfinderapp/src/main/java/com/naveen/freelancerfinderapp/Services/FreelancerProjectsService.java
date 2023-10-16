package com.naveen.freelancerfinderapp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naveen.freelancerfinderapp.Models.FreelancerModel;
import com.naveen.freelancerfinderapp.Models.FreelancerProjectsModel;
import com.naveen.freelancerfinderapp.Repo.FreelancerProjectsRepoInt;
import com.naveen.freelancerfinderapp.Repo.FreelancerRepoInt;

@Service
public class FreelancerProjectsService {
    
    @Autowired
    private FreelancerProjectsRepoInt fpri;

     @Autowired 
    private FreelancerRepoInt fri;

    public List<FreelancerProjectsModel> getdata(){
        return fpri.findAll();
    }

    public FreelancerProjectsModel savedata(FreelancerProjectsModel fem,int freelancerid){
        FreelancerModel freelancer = fri.findById(freelancerid);
        List<FreelancerProjectsModel> old = freelancer.getProjects();
        old.add(fem);
        fpri.save(fem);
        freelancer.setProjects(old);
        fri.save(freelancer);
        return fem;
    }

    public FreelancerProjectsModel updatedata(FreelancerProjectsModel fem,int id){
        fem.setId(id);
        return fpri.save(fem);
    }

    public void deletedata(int id){
        fpri.deleteById(id);
    }
}
