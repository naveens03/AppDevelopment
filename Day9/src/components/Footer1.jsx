import React from "react";
import planetblue2 from "../Assets/planet-blue2.png";
import freelancerimg from "../Assets/gamer.png";

const Footer1 = () => {
  return (
    <div className="grid place-content-center mt-[6%] bg-bgpurple h-fit w-full">
      <img
        src={planetblue2}
        alt=""
        className="absolute w-[250px] hidden md:block md:left-[75%] lg:left-[70%] mt-[-5rem]"
      ></img>
      <div className="flex-col md:w-[490px] mt-20">
        <p className="font-bold text-[20px] mb-10">
          What the community is saying about Freelancer
        </p>
        <p className="mb-5">
          I’m grateful for Freelancer and their exceptional professionalism and
          communication during my job search for full-stack developer roles in
          Canada. Their talent team’s dedication to support made the process a
          smooth and positive experience. I’m looking forward to growing my
          career with the Freelancer community
        </p>
      </div>
      <div className="flex mb-10">
        <div>
          <img src={freelancerimg} alt="" className="w-[5rem] ml-[1rem] "></img>
        </div>
        <div className="mt-4 ">
          <p className="font-poppins text-lg">Kishore kumar</p>
          <p>Full-stack developer</p>
        </div>
        <div className="flex gap-2 ml-[2rem] mt-[2rem]">
          <i class="fa fa-star text-goldstar" aria-hidden="true"></i>
          <i class="fa fa-star text-goldstar" aria-hidden="true"></i>
          <i class="fa fa-star text-goldstar" aria-hidden="true"></i>
          <i class="fa fa-star text-goldstar" aria-hidden="true"></i>
          <i class="fa fa-star text-goldstar" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
