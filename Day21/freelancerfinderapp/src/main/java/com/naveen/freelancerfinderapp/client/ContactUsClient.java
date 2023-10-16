package com.naveen.freelancerfinderapp.client;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.naveen.freelancerfinderapp.vo.ContactUs;




@Component
@FeignClient(name = "contactus")
public interface ContactUsClient {
    
    @GetMapping("/getcontactus")
    public List<ContactUs> getdata();

    @PostMapping("/savecontactus")
    public ContactUs savedata(@RequestBody ContactUs cum);
}
