package com.nandhakumar.freelancerfinderapp.Models;

import java.util.*;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.nandhakumar.freelancerfinderapp.Models.enumerate.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="freelancer")
public class FreelancerModel implements UserDetails {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private Boolean isEnabled;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    private Date joiningDate;
    
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

    @OneToOne
	@JoinColumn(name = "fk_freelancer_availability_id")
	private FreelancerAvailabilityModel availability;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // return List.of(new SimpleGrantedAuthority(role.name()));
        return role.getAuthority();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @PrePersist
    protected void onCreate() {
        joiningDate = new Date();
    }
}
