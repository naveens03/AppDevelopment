package com.naveen.freelancerfinderapp.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactUs {
    
    private int id;
    private String name;
    private String email;
    private String message;
}
