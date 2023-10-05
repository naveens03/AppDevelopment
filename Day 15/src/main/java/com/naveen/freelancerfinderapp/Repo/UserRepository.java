package com.naveen.freelancerfinderapp.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.naveen.freelancerfinderapp.Models.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String username);

    User findByUid(Long uid);

    void deleteByUid(Long uid);

}

