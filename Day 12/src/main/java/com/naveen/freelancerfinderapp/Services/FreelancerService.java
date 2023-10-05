package com.naveen.freelancerfinderapp.Services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naveen.freelancerfinderapp.Models.FreelancerModel;
import com.naveen.freelancerfinderapp.Repo.FreelancerRepoInt;

@Service
public class FreelancerService {
    
    @Autowired
    private FreelancerRepoInt fri;

    public List<FreelancerModel> getdata(){
        return fri.findAll();
    }

    public FreelancerModel savedata(FreelancerModel user){
        Date currentDate = new Date();
        user.setJoiningDate(currentDate);
        return fri.save(user);
    }

    public FreelancerModel updatedata(FreelancerModel fm,int id){
        fm.setId(id);
        return fri.save(fm);
    }
    
    public void deletedata(int id){
        fri.deleteById(id);
    }

}
