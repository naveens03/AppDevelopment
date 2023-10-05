import React from "react";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../redux/FooterSlice";
import { selectFooter } from "../../redux/FooterSlice";
import TermsAndConditions from "../../components/TermsAndConditions";
import FAQFreelancer from "../../components/FAQFreelancer";
import FAQClient from "../../components/FAQClient";
import { useNavigate } from "react-router";

const Footer = () => {
  const dispatch = useDispatch();
  const viewFooter = useSelector(selectFooter);
  const navigate = new useNavigate();
  return (
    <div>
      <div className={`${viewFooter?.viewPrivacyPolicy === "true"? "block" : "hidden"}`}>
      <PrivacyPolicy />
      </div>
      <div className={`${viewFooter?.viewTermsandConditions === "true"? "block" : "hidden"}`}>
      <TermsAndConditions/>
      </div>
      <div className={`${viewFooter?.viewFAQFreelancer === "true"? "block" : "hidden"}`}>
      <FAQFreelancer/>
      </div>
      <div className={`${viewFooter?.viewClient === "true"? "block" : "hidden"}`}>
      <FAQClient/>
      </div>
      <div className="bg-bggreen px-12 text-white pb-10 bg-layout1bg">
        <div className="flex flex-row justify-between p-8">
          <div className="flex gap-10 font-semibold font-poppins text-lg">
            <p className="cursor-pointer" onClick={()=>dispatch(open({viewTermsandConditions:"true"}))}>Terms and Conditions</p>
            <p className="cursor-pointer" onClick={()=>dispatch(open({viewPrivacyPolicy:"true"}))}>Privacy Policy</p>
          </div>
          <div className="flex gap-7 items-center">
            <p className="font-semibold text-lg">Follow Us</p>
            <a href="https://www.facebook.com/facebook/" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f text-white"></i></a>
           <a href="https://twitter.com/home" target="_blank" rel="noreferrer" ><i class="fa-brands fa-x-twitter"></i></a> 
           <a href="https://www.instagram.com/Instagram/" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a> 
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>  
          </div>
        </div>
        <div>
          <p className="border-t-[1px] border-opacity-10 border-gray ml-4 mr-4 "></p>
        </div>
        <div className="flex justify-around gap-20 mt-[3rem] mb-[3rem] ">
          <div className="flex flex-col gap-6">
            <p className="font-semibold font-poppins">About</p>
            <div className="flex flex-col gap-1 text-textgray">
              <p>About Us</p>
              <p>Become Seller</p>
              <p>Jobs on Freelancer</p>
              <p>Pricing</p>
              <p>Services Freelancer</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold font-poppins">Categories</p>
            <div className="flex flex-col gap-1 text-textgray">
              <p>Design & Creative</p>
              <p>Development & IT</p>
              <p>Music & Audio</p>
              <p>Programming & Tech</p>
              <p>Digital Marketing</p>
              <p>Finance & Accounting</p>
              <p>Writing & Translation</p>
              <p>Trending</p>
              <p>Lifestyle</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold font-poppins">Support</p>
            <div className="flex flex-col gap-1 text-textgray">
              <p>Help & Support</p>
              <p className="cursor-pointer" onClick={()=>dispatch(open({viewFAQFreelancer:"true"}))}>FAQ-Freelancer</p>
              <p className="cursor-pointer" onClick={()=>dispatch(open({viewClient:"true"}))}>FAQ-Client</p>
              <p className="cursor-pointer" onClick={()=>navigate("/contactus")} >Contact Us</p>
              <p>Services</p>
            </div>
          </div>
        </div>
        <div>
          <p className="border-t-[1px] border-opacity-10 border-gray ml-4 mr-4 "></p>
        </div>
        <div className="pt-5">
          <p>© Freelancer 2022. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
