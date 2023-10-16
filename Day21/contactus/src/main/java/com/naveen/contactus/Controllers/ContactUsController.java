package com.naveen.contactus.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.naveen.contactus.Models.ContactUsModel;
import com.naveen.contactus.Services.ContactUsService;

@RestController
@CrossOrigin("*")
public class ContactUsController {
    
    @Autowired
    private ContactUsService cus;

    @GetMapping("/getcontactus")
    public List<ContactUsModel> getdata(){
        return cus.getdata();
    }

    @PostMapping("/savecontactus")
    public ContactUsModel savedata(@RequestBody ContactUsModel cum){
        return cus.savedata(cum); 
    }


}
