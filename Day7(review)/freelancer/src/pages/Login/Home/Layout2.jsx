import React from "react";
import postjob from "../../../Assets/working-time.png";
import working from "../../../Assets/working.png";
import paysecure from "../../../Assets/secure-payment.png";
import support from "../../../Assets/support.png";
import DesignAndCreativedata from "../../../data/DesignAndCreativedata";
const Layout2 = () => {
  return (
    <div className="w-full rounded-tl-[4rem] mt-[-4rem] bg-white p-[4rem] ">
      <div className="mt-[5rem] flex flex-col gap-3">
        <p className="font-poppins font-bold text-4xl">Need something done?</p>
        <p className="font-poppins text-lg">
          Most viewed and all-time top-selling services
        </p>
      </div>
      <div className="w-full flex flex-row mt-[5rem] gap-5 justify-evenly">
        <div className="flex flex-col gap-3">
          <img src={postjob} className="w-[3rem]" alt=""></img>
          <p className="text-2xl">Post a job</p>
          <p>
            It’s free and easy to post a job. Simply fill in a title,
            description.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <img src={working} className="w-[3rem]" alt=""></img>
          <p className="text-2xl">Choose freelancers</p>
          <p>
            It’s free and easy to post a job. Simply fill in a title,
            description.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <img src={paysecure} className="w-[3rem]" alt=""></img>
          <p className="text-2xl">Pay safely</p>
          <p>
            It’s free and easy to post a job. Simply fill in a title,
            description.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <img src={support} className="w-[3rem]" alt=""></img>
          <p className="text-2xl">We’re here to help</p>
          <p>
            We provide 24/7 support to assist you with any inquiries or issues
            you may have.
          </p>
        </div>
      </div>
      <div className="mt-[5rem] flex justify-between">
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-3xl">Popular Services</p>
          <p>Most viewed and all-time top-selling services</p>
        </div>
        <div className="flex gap-[3rem]">
          <button className="h-fit p-3 border-gray border-[2px] rounded-full hover:text-brightgreen">
            Design & Creative
          </button>
          <button className="h-fit p-3 border-gray border-[2px] rounded-full hover:text-brightgreen">
            Development & It
          </button>
          <button className="h-fit p-3 border-gray border-[2px] rounded-full hover:text-brightgreen">
            Digital Marketing
          </button>
          <button className="h-fit p-3 border-gray border-[2px] rounded-full hover:text-brightgreen">
            Writing & Translation
          </button>
        </div>
      </div>
      <div className=" mt-[3rem] justify-evenly grid grid-cols-4 gap-6">
        {DesignAndCreativedata.map((user, index) => (
          <div className="border-[2px] flex  flex-col border-gray">
            <img src={user.image1} className="w-full" alt=""></img>
            <div className="p-6 flex flex-col gap-2 ">
              <div className="">
                <p className="font-poppins text-lightgray">Design & Creative</p>
              </div>
              <div>
                <p className="font-poppins font-lg text-xl line-clamp-2">{user.text1}</p>
              </div>
              <div className="flex gap-3">
                <i
                  class="fa fa-star text-goldstar text-sm"
                  aria-hidden="true"
                ></i>
                <p>{user.rating}</p>
                <p>({user.review} reviews)</p>
              </div>
              <div className="">
                <p className="border-t-[2px] border-lightgray2 ml-4 mr-4 "></p>
              </div>
              <div className="flex  items-center gap-2 justify-evenly">
                <img
                  src={user.userimage}
                  className="w-[2.5rem] h-[2.5rem] rounded-full"
                  alt=""
                ></img>
                <p className="font-poppins text-[1.1rem]">{user.name}</p>
                <div className="flex ">
                  <p className="font-poppins text-lightgray">Starting at:</p>
                  <p>${user.cost}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-[5rem]">
        <button className="border-brightgreen border-[2px] rounded-full px-5 py-2 bg-buttongreen text-white font-poppins text-xl">
          All Services
        </button>
      </div>
    </div>
  );
};

export default Layout2;
