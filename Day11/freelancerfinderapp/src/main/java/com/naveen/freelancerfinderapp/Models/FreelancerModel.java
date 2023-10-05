package com.naveen.freelancerfinderapp.Models;

import java.util.*;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="freelancer")
public class FreelancerModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String name;
    private Date joiningDate;
    private String email;
    private String password;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerSkillsModel> skills;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerEducationModel> education;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerWorkAndExperienceModel> workAndExperience;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerProjectsModel> projects;
    @OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "fk_freelancer_id", referencedColumnName = "id")
    private List<FreelancerAwardsModel> awards;
}
