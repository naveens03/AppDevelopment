import React from "react";
import layout3image from "../../Assets/layout3home.png";
import contactus from "../../Assets/operator1.png"

const Layout3 = () => {
  return (
    <div className="w-full h-screen flex justify-between p-[3rem]">
      <div className="pt-[15rem] flex flex-col gap-5">
        <div>
          <p className="text-buttongreen font-medium font-poppins">
            For clients
          </p>
        </div>
        <div>
          <p className="font-semibold font-poppins text-3xl">
            Find talent your way
          </p>
        </div>
        <div className="w-[30rem]">
          <p className="font-poppins text-lightgray">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </p>
        </div>
        <div>
            <button className="bg-buttongreen rounded-full px-7 py-4 text-white font-semibold flex  items-center gap-2">
                <p>Contact us</p>
                <img src={contactus} alt="" className="w-[1rem]         "></img>
            </button>
        </div>
      </div>
      <div className="">
        <div className="bg-bggreen w-[21rem] mt-[15rem] ml-[-6rem] absolute rounded-3xl p-[2rem] flex flex-col gap-5">
            <div className="flex items-center gap-4">
            <i className="fa-solid fa-check rounded-full bg-white py-[0.6rem] px-[0.7rem] text-[12px]"></i>
            <p className="text-white">The best for every budget</p>
            </div>
            <div className="flex items-center gap-4">
            <i className="fa-solid fa-check rounded-full bg-white py-[0.6rem] px-[0.7rem] text-[12px]"></i>
            <p className="text-white">Quality work done quickly</p>
            </div>
            <div className="flex items-center gap-4">
            <i className="fa-solid fa-check rounded-full bg-white py-[0.6rem] px-[0.7rem] text-[12px]"></i>
            <p className="text-white">Protected payments, every time</p>
            </div>
            <div className="flex items-center gap-4">
            <i className="fa-solid fa-check rounded-full bg-white py-[0.6rem] px-[0.7rem] text-[12px]"></i>
            <p className="text-white">24/7 support</p>
            </div>
        </div>
        <img src={layout3image} alt=""></img>
      </div>
    </div>
  );
};

export default Layout3;
