package com.nandhakumar.freelancerfinderapp.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerModel;
import com.nandhakumar.freelancerfinderapp.Models.enumerate.Role;
import com.nandhakumar.freelancerfinderapp.Repo.FreelancerAvailabilityRepoInt;
import com.nandhakumar.freelancerfinderapp.Repo.FreelancerRepoInt;
import com.nandhakumar.freelancerfinderapp.Util.JwtUtil;
import com.nandhakumar.freelancerfinderapp.dto.request.FreelancerAuthenticationRequest;
import com.nandhakumar.freelancerfinderapp.dto.request.FreelancerRegisterRequest;
import com.nandhakumar.freelancerfinderapp.dto.response.FreelancerAuthenticationResponse;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FreelancerService {
    private final FreelancerRepoInt fri;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Autowired
    private FreelancerAvailabilityRepoInt fari;

    public boolean freelancerRegistration(FreelancerRegisterRequest request) {
        Optional<FreelancerModel> isUserExists = fri.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            fari.save(request.getAvailability());
            var freelancer = FreelancerModel.builder()
                    .firstname(request.getFirstname())
                    .lastname(request.getLastname())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role .valueOf(request.getRole().toUpperCase()))
                    .availability(request.getAvailability())
                    .build();
            fri.save(freelancer);
            return true;
        } else {
            return false;
        }
    }

    public FreelancerAuthenticationResponse freelancerAuthentication(FreelancerAuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var freelancer = fri.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(freelancer);
        return FreelancerAuthenticationResponse.builder()
                .token(token)
                .id(freelancer.getId())
                .build();
    }


    public FreelancerModel getbyid(int id){
        return fri.findById(id);
    }
    

    public List<FreelancerModel> getdata(){
        return fri.findAll();
    }

    public FreelancerModel savedata(FreelancerModel user){
        return fri.save(user);
    }

    public FreelancerModel updatedata(FreelancerModel fm,int id){
        fm.setId(id);
        return fri.save(fm);
    }
    
    public void deletedata(int id){
        fri.deleteById(id);
    }

}
