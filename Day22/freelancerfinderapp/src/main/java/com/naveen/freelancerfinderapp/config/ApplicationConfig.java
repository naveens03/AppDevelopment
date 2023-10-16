package com.naveen.freelancerfinderapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.naveen.freelancerfinderapp.Repo.ClientRepoInt;
import com.naveen.freelancerfinderapp.Repo.FreelancerRepoInt;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    private final FreelancerRepoInt fri;
    private final ClientRepoInt cri;

    @Bean
    public UserDetailsService userDetailsService() {
        return email -> fri.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
    }  

    @Bean
    public UserDetailsService clientDetailsService() {
        return email -> cri.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService());
        daoAuthenticationProvider.setPasswordEncoder(passworEncoder());
        return daoAuthenticationProvider;
    }

    // @Bean
    // public AuthenticationProvider clientauthenticationProvider() {
    //     DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
    //     daoAuthenticationProvider.setUserDetailsService(clientDetailsService());
    //     daoAuthenticationProvider.setPasswordEncoder(passworEncoder());
    //     return daoAuthenticationProvider;
    // }

    // @Bean
    // public AuthenticationProvider customAuthenticationProvider() {
    // return new CustomAuthenticationProvider(userDetailsService(), clientDetailsService());
    // }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passworEncoder() {
        return new BCryptPasswordEncoder();
    }
}

