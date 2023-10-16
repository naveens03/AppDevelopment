package com.naveen.contactus.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.naveen.contactus.Models.ContactUsModel;
import com.naveen.contactus.Repo.ContactUsRepoInt;

@Service
public class ContactUsService {
    
    @Autowired
    private ContactUsRepoInt curi;

    public List<ContactUsModel> getdata(){
        return curi.findAll();
    }

    public ContactUsModel savedata(ContactUsModel cum){
        return curi.save(cum);
    }

    public ContactUsModel updatedata(ContactUsModel cum,int id){
        cum.setId(id);
        return curi.save(cum);
    }

    public void deletedata(int id){
        curi.deleteById(id);
    }
}
