import React from "react";
import Navbar from "./Navbar";
import location from "../Assets/location.png";
import email from "../Assets/email.png";
import phone from "../Assets/phone.png";
import Footer from "../pages/HomeComponents/Footer";

const ContactUs = () => {
  return (
    <div className="bg-gray">
      <div>
        <Navbar />
      </div>
      <div className="">
        <div className="bg-contactusbg bg-no-repeat ml-[-3rem] mt-[4rem]  flex flex-col">
            <div className="h-full w-full bg-layout1bg  pl-[10rem] py-[6.5rem]">
          <p className="text-white font-bold text-[3rem]">Contact Us</p>
          <p className="text-white">
            We’d love to talk about how we can help you.
          </p>
          </div>
        </div>
        <div className="flex justify-between p-[4rem]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-poppins text-xl font-semibold">
                Keep In Touch With Us.
              </p>
              <p className="text-lightgray">
                Contact us for any inquiries or assistance. We're here to help.
              </p>
            </div>
            <div className="flex gap-5">
              <img
                src={location}
                alt=""
                className="w-[3.6rem] h-[3.5rem]"
              ></img>
              <div>
                <p className="font-medium">Address</p>
                <p>22 Anna Nagar,Kovaipudur</p>
                <p>Coimbatore,641042</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src={phone} alt="" className="w-[3.6rem] h-[3.5rem]"></img>
              <div>
                <p className="font-medium">Phone</p>
                <p>+(91) 9876543210</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src={email} alt="" className="w-[3.6rem] h-[3.5rem]"></img>
              <div>
                <p className="font-medium">Email</p>
                <p className="">freelancer@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-[40rem] mt-[-15rem] bg-white rounded-3xl p-[2.5rem] flex flex-col gap-5">
            <div className="flex flex-col gap-3 ">
              <p className="font-bold text-[1.2rem]">Tell us about yourself</p>
              <p>
                Whether you have questions or you would just like to say hello,
                contact us.
              </p>
            </div>
            <div className="flex justify-around gap-5">
              <div className="w-[90%] flex flex-col gap-3">
                <p className="font-poppins text-lg">Name</p>
                <input
                  placeholder="Your name"
                  className="border-gray rounded-2xl border-[1px] pl-4 py-4 w-full"
                ></input>
              </div>
              <div className="w-[90%] flex flex-col gap-3">
                <p className="font-poppins text-lg">Email</p>
                <input
                  placeholder="example@gmail.com"
                  className="border-gray rounded-2xl border-[1px] pl-4 py-4 w-full"
                ></input>
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-3">
              <p className="font-poppins text-lg">Messages</p>
              <textarea
                className="border-gray rounded-2xl border-[1px] w-full h-[10rem] resize-none py-3 px-5"
                placeholder="Description"
              ></textarea>
            </div>
            <div>
              <button className=" px-7 py-2 rounded-2xl bg-buttongreen text-white font-poppins text-lg">
                Send Messages
              </button>
            </div>
          </div>
        </div>
        <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.47295765238!2d76.9231925762387!3d10.927601489230495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2z4K624K-N4K6w4K-AIOCuleCuv-CusOCvgeCut-CvjeCuo-CuviDgrpXgrr7grrLgr4fgrpzgr40g4K6G4K6q4K-NIOCun-CvhuCuleCvjeCuqeCuvuCusuCunOCuvw!5e0!3m2!1sta!2sin!4v1695551009025!5m2!1sta!2sin" className="w-full h-[30rem] my-[5rem]"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
