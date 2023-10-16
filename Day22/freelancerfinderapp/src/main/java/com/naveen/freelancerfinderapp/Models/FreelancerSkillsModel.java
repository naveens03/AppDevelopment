package com.naveen.freelancerfinderapp.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="freelancerskills")
public class FreelancerSkillsModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String skillName;
    private double experience;
    private List<String> relatedTechnologies;
    private List<String> certifications;
    @Column(columnDefinition = "TEXT")
    private String customizedDescription;
}
