package com.nandhakumar.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerEducationModel;

@Repository
public interface FreelancerEducationRepoInt extends JpaRepository<FreelancerEducationModel,Integer> {
    
}
