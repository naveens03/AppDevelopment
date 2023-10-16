package com.naveen.contactus.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.naveen.contactus.Models.ContactUsModel;

@Repository
public interface ContactUsRepoInt extends JpaRepository<ContactUsModel,Integer>{
    
}
