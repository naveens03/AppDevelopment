import React from "react";
import user1 from "../../Assets/user1.jpg";

const Layout7 = () => {
  return (
    <div className="bg-bggreen1 pt-[5rem] px-[5rem] pb-[10rem] flex justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-3xl font-poppins">
            People Love To Learn With Freelancer
          </p>
          <p className="text-lightgray">
            Learning flourishes with freelancers.
          </p>
        </div>
        <div className="ml-3 flex justify-evenly gap-10 mr-[5rem]">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-3xl font-poppins">4.8/5</p>
            <p className="text-lightgray">
              Clients rate professionals on Freelancer
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-3xl font-poppins">90%</p>
            <p className="text-lightgray">
              90% of customers are satisfied through to see their freelancers
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-3xl font-poppins">Award winner</p>
            <p className="text-lightgray">G2’s 2022 Best Software Awards</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-[25rem] rounded-3xl p-[2rem] flex flex-col gap-4">
        <div>
          <p className="font-poppins font-semibold text-xl text-buttongreen">
            Great Work
          </p>
        </div>
        <div>
          <p className="font-medium ">
            “I found the course material to be highly engaging, and the
            instructors to be helpful and communicative.”
          </p>
        </div>
        <div className="">
          <p className="border-t-[2px] border-lightgray2 ml-4 mr-4 "></p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <img src={user1} className="w-[3.5rem] rounded-full" alt=""></img>
          </div>
          <div>
            <p>Nandha kumar</p>
            <p className="font-poppins text-lightgray text-sm">Web Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout7;
