package com.naveen.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naveen.freelancerfinderapp.Models.FreelancerModel;

@Repository
public interface FreelancerRepoInt extends JpaRepository<FreelancerModel,Integer> {
    
}
