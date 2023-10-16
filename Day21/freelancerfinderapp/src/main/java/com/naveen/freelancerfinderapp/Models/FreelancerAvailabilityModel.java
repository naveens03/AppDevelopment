package com.naveen.freelancerfinderapp.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="freelanceravailability")
public class FreelancerAvailabilityModel {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private boolean iamwillingtorelocate;
    private boolean iamlookingforremoteopportunities;
    private double minbudget;
    private String currency;
    private String whenavailable;

    @PrePersist
    protected void onCreate() {
        iamlookingforremoteopportunities = false;
        iamlookingforremoteopportunities = false;
        minbudget = -1;
        currency = null;
        whenavailable = null;
    }
}
