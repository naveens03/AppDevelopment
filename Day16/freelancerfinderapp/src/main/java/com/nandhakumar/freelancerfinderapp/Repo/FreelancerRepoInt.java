package com.nandhakumar.freelancerfinderapp.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerModel;

@Repository
public interface FreelancerRepoInt extends JpaRepository<FreelancerModel,Integer> {
    Optional<FreelancerModel> findByEmail(String email);

    FreelancerModel findById(int id);
}
