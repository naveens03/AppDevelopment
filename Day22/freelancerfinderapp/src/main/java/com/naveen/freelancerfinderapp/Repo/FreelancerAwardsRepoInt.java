package com.naveen.freelancerfinderapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naveen.freelancerfinderapp.Models.FreelancerAwardsModel;

@Repository
public interface FreelancerAwardsRepoInt extends JpaRepository<FreelancerAwardsModel,Integer> {
    
}
