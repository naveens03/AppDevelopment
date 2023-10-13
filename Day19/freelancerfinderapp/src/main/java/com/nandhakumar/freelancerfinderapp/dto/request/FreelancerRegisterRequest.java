package com.nandhakumar.freelancerfinderapp.dto.request;

import com.nandhakumar.freelancerfinderapp.Models.FreelancerAvailabilityModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FreelancerRegisterRequest {
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String role;
	private FreelancerAvailabilityModel availability;
}
