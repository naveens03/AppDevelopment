package com.nandhakumar.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerAvailabilityModel;

public interface FreelancerAvailabilityRepoInt extends JpaRepository<FreelancerAvailabilityModel,Integer>{
    
}
