package com.naveen.freelancerfinderapp.Services;

import java.beans.FeatureDescriptor;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.naveen.freelancerfinderapp.Models.FreelancerAvailabilityModel;
import com.naveen.freelancerfinderapp.Models.FreelancerModel;
import com.naveen.freelancerfinderapp.Repo.FreelancerAvailabilityRepoInt;
import com.naveen.freelancerfinderapp.Repo.FreelancerRepoInt;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FreelancerAvailabilityService {
    
    @Autowired 
    private FreelancerAvailabilityRepoInt fari;

    @Autowired
    private FreelancerRepoInt fri;

    public List<FreelancerAvailabilityModel> getdata(){
        return fari.findAll();
    }

    public FreelancerAvailabilityModel savedata(FreelancerAvailabilityModel fam,int freelancerid){
        FreelancerModel freelancer = fri.findById(freelancerid);
        FreelancerAvailabilityModel old = freelancer.getAvailability();
        BeanUtils.copyProperties(fam, old, getNullPropertyNames(fam));
        freelancer.setAvailability(old);

        fari.save(old);
        fri.save(freelancer);
        return old;

    }

    private String[] getNullPropertyNames(Object source) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        return Stream.of(src.getPropertyDescriptors())
                .map(FeatureDescriptor::getName)
                .filter(propertyName -> src.getPropertyValue(propertyName) == null)
                .toArray(String[]::new);
    }

}
