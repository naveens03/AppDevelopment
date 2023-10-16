package com.naveen.freelancerfinderapp.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naveen.freelancerfinderapp.Models.ClientModel;

@Repository
public interface ClientRepoInt extends JpaRepository<ClientModel,Integer> {
    
    Optional<ClientModel> findByEmail(String email);

    ClientModel findById(int id);
}
