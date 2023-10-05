import React from "react";
import image1 from "../../Assets/layout1homeimage.png";

const Layout1 = () => {
  return (
    <div className={`w-full h-screen bg-bggreen flex bg-layout1bg`}>
      <div className="px-[4rem] py-[7rem] w-[60%] flex flex-col gap-10">
        <div>
          <p className="font-poppins font-bold text-[3rem] text-white mt-[3rem]">
            Find the perfect freelance services for your business
          </p>
        </div>
        <div>
          <p className="font-poppins font-medium text-white text-[1.3rem]">
            Work with talented people at the most affordable price to get the
            most out of your time and cost
          </p>
        </div>
        <div className="absolute flex top-[34rem] border-2 border-white w-[55%] bg-white rounded-full p-2 pl-5">
          <div className="flex gap-5 w-full">
            <i class="fa-solid fa-magnifying-glass pt-5"></i>
            <input
              placeholder="What you are looking for?"
              className="w-full"
            ></input>
          </div>
          <div className="flex justify-end w-full">
            <button className="rounded-full bg-brightgreen py-5 px-10">
              <p className="text-white font-poppins font-semibold text-xl">
                Search
              </p>
            </button>
          </div>
        </div>
        <div className="flex gap-[4rem] mt-[10rem]">
          <div className="text-white">
            <p className="font-bold text-[1.5rem]">180M</p>
            <p>Total freelancer</p>
          </div>
          <div className="text-white">
            <p className="font-bold text-[1.5rem]">100M</p>
            <p>Positive review</p>
          </div>
          <div className="text-white">
            <p className="font-bold text-[1.5rem]">50M</p>
            <p>Orders recieved</p>
          </div>
          <div className="text-white">
            <p className="font-bold text-[1.5rem]">60M</p>
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
      <div className="py-[3rem] mr-10">
        <img src={image1} className="h-[90%]" alt=""></img>
      </div>
    </div>
  );
};

export default Layout1;
