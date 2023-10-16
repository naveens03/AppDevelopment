package com.naveen.freelancerfinderapp.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.naveen.freelancerfinderapp.Models.ClientModel;
import com.naveen.freelancerfinderapp.Models.enumerate.Role;
import com.naveen.freelancerfinderapp.Repo.ClientRepoInt;
import com.naveen.freelancerfinderapp.Util.JwtUtil;
import com.naveen.freelancerfinderapp.dto.request.ClientAuthenticationRequest;
import com.naveen.freelancerfinderapp.dto.request.ClientRegisterRequest;
import com.naveen.freelancerfinderapp.dto.response.ClientAuthenticationResponse;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class ClientService {

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    
    @Autowired
    private ClientRepoInt cri;

    public boolean clientRegistration(ClientRegisterRequest request) {
        Optional<ClientModel> isUserExists = cri.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var client = ClientModel.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role .valueOf(request.getRole().toUpperCase()))
                    .build();
            cri.save(client);
            return true;
        } else {
            return false;
        }
    }

    public ClientAuthenticationResponse clientAuthentication(ClientAuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var client = cri.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(client);
        return ClientAuthenticationResponse.builder()
                .token(token)
                .id(client.getId())
                .build();
    }

    public List<ClientModel> getdata(){
        return cri.findAll();
    }

    public ClientModel savedata(ClientModel cm){
        return cri.save(cm);
    }

}
