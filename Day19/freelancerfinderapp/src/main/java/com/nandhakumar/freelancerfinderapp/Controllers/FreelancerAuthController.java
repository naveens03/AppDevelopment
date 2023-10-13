package com.nandhakumar.freelancerfinderapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nandhakumar.freelancerfinderapp.Services.FreelancerService;
import com.nandhakumar.freelancerfinderapp.constant.Api;
import com.nandhakumar.freelancerfinderapp.dto.request.FreelancerAuthenticationRequest;
import com.nandhakumar.freelancerfinderapp.dto.request.FreelancerRegisterRequest;
import com.nandhakumar.freelancerfinderapp.dto.response.FreelancerAuthenticationResponse;

@RestController
@RequestMapping(Api.FREELANCERAUTH)
@CrossOrigin("*")
public class FreelancerAuthController {

    @Autowired
    private FreelancerService fs;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody FreelancerRegisterRequest request) {
        boolean isRegistered = fs.freelancerRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Sommething went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<FreelancerAuthenticationResponse> authenticate(@RequestBody FreelancerAuthenticationRequest request) {
        return ResponseEntity.ok(fs.freelancerAuthentication(request));
    }
    
}
