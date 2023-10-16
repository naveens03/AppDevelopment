import React from "react";
import bannerimage from "../../../Assets/banner.jpg";

const Dashboard = () => {
  return (
    <div>
      <div className="h-[18rem] bg-darkgray  ">
        <img
          alt=""
          src={bannerimage}
          className="w-screen h-[18rem] z-[-1]"
        ></img>
        <div className="flex flex-row gap-3 justify-end items-end  border-2 border-black mt-[-3rem]">
          <div>
            <i class="fa-regular fa-image text-white text-3xl"></i>
          </div>
          <div className="">
            <p className="text-white font-poppins text-xl">
              Change Banner Image
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
