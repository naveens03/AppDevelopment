package com.nandhakumar.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerAwardsModel;

@Repository
public interface FreelancerAwardsRepoInt extends JpaRepository<FreelancerAwardsModel,Integer> {
    
}
