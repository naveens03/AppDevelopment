package com.nandhakumar.freelancerfinderapp.constant;

import java.util.Arrays;
import java.util.List;

public class Api {
    public static final String REACT = "http://localhost:3000";
    public static final String DEFAULT = "http://localhost:8080";
    public static final String FREELANCERAUTH = "/api/v1/freelancerauth";
    public static final String FREELANCER = "/api/v1/freelancer";
    public static final List<String> HEADERS = Arrays.asList("Authorization", "Content-Type");
    public static final List<String> METHODS = Arrays.asList("GET", "POST", "PUT", "DELETE");
    public static final List<String> ORIGINS = Arrays.asList("http://localhost:3000");
}
