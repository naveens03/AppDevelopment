package com.nandhakumar.freelancerfinderapp.config;

import static com.nandhakumar.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_CREATE;
import static com.nandhakumar.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_DELETE;
import static com.nandhakumar.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_READ;
import static com.nandhakumar.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_UPDATE;
import static com.nandhakumar.freelancerfinderapp.Models.enumerate.Role.FREELANCER;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.nandhakumar.freelancerfinderapp.constant.Api;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

        private final JwtAuthenticationFilter jwtAuthenticationFilter;
        private final AuthenticationProvider authenticationProvider;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
                httpSecurity
                                .cors(corsConfirguarationSource -> corsConfirguarationSource.configurationSource(
                                                corsConfigurationSource()))
                                .csrf(csrf -> csrf.disable())
                                .authorizeHttpRequests(authorize -> authorize
                                                .requestMatchers(Api.FREELANCERAUTH + "/**").permitAll()
                                                .requestMatchers(Api.FREELANCER+"/**")
                                                .hasRole(FREELANCER.name())
                                                .requestMatchers(GET, Api.FREELANCER+"/**")
                                                .hasAuthority(FREELANCER_READ.name())
                                                .requestMatchers(PUT, Api.FREELANCER+"/**")
                                                .hasAuthority(FREELANCER_UPDATE.name())
                                                .requestMatchers(POST, Api.FREELANCER+"/**")
                                                .hasAuthority(FREELANCER_CREATE.name())
                                                .requestMatchers(DELETE, Api.FREELANCER+"/**")
                                                .hasAuthority(FREELANCER_DELETE.name())
                                                .anyRequest().authenticated())
                                .sessionManagement(session -> session
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
                return httpSecurity.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
                CorsConfiguration configuration = new CorsConfiguration();
                configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
                configuration.setAllowCredentials(true);
                configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
                configuration.setAllowedOrigins(Arrays.asList(Api.REACT));
                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
                source.registerCorsConfiguration("/**", configuration);
                return source;
        }
}

