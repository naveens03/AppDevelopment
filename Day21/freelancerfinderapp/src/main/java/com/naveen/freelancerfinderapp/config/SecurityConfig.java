package com.naveen.freelancerfinderapp.config;

import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.ADMIN_CREATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.ADMIN_DELETE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.ADMIN_READ;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.ADMIN_UPDATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.CLIENT_CREATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.CLIENT_DELETE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.CLIENT_READ;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.CLIENT_UPDATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_CREATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_DELETE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_READ;
import static com.naveen.freelancerfinderapp.Models.enumerate.Permission.FREELANCER_UPDATE;
import static com.naveen.freelancerfinderapp.Models.enumerate.Role.ADMIN;
import static com.naveen.freelancerfinderapp.Models.enumerate.Role.CLIENT;
import static com.naveen.freelancerfinderapp.Models.enumerate.Role.FREELANCER;
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

import com.naveen.freelancerfinderapp.constant.Api;

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
                                                .requestMatchers(Api.CLIENTAUTH + "/**").permitAll()
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
                                                .requestMatchers(Api.ADMIN+"/**")
                                                .hasRole(ADMIN.name())
                                                .requestMatchers(GET, Api.ADMIN+"/**")
                                                .hasAuthority(ADMIN_READ.name())
                                                .requestMatchers(PUT, Api.ADMIN+"/**")
                                                .hasAuthority(ADMIN_UPDATE.name())
                                                .requestMatchers(POST, Api.ADMIN+"/**")
                                                .hasAuthority(ADMIN_CREATE.name())
                                                .requestMatchers(DELETE, Api.ADMIN+"/**")
                                                .hasAuthority(ADMIN_DELETE.name())
                                                .requestMatchers(Api.CLIENT+"/**")
                                                .hasRole(CLIENT.name())
                                                .requestMatchers(GET, Api.CLIENT+"/**")
                                                .hasAuthority(CLIENT_READ.name())
                                                .requestMatchers(PUT, Api.CLIENT+"/**")
                                                .hasAuthority(CLIENT_UPDATE.name())
                                                .requestMatchers(POST, Api.CLIENT+"/**")
                                                .hasAuthority(CLIENT_CREATE.name())
                                                .requestMatchers(DELETE, Api.CLIENT+"/**")
                                                .hasAuthority(CLIENT_DELETE.name())
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

