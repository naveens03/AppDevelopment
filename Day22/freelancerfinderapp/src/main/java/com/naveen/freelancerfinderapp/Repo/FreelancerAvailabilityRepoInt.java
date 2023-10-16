package com.naveen.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.naveen.freelancerfinderapp.Models.FreelancerAvailabilityModel;

public interface FreelancerAvailabilityRepoInt extends JpaRepository<FreelancerAvailabilityModel,Integer>{
    
}
