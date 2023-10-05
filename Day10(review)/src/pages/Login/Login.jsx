import React from "react";
import freelancer from "../.././Assets/gamer.png";
import client from "../.././Assets/astro-computer.png";
import planetblue from "../.././Assets/planet-blue.png";
import planetorange from "../.././Assets/planet-orange.png";
import hello from "../.././Assets/astro-hello.png";
import { useNavigate } from "react-router";
import Footer1 from "../../components/Footer1";

const Login = () => {
  const navigate = new useNavigate();
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <div className="">
          <img
            src={planetblue}
            alt=""
            className="absolute w-[300px] hidden md:block md:right-[80rem] md:top-[9rem]"
          ></img>

          <img
            src={planetorange}
            alt=""
            className="absolute w-[400px] hidden lg:block lg:left-[80rem] lg:top-[20rem] "
          ></img>
        </div>
        <div className="grid place-content-center mt-[2%]">
          <div className="flex flex-col ">
            <div className="flex flex-col items-center mb-[5rem]">
              <p className="font-poppins font-semibold text-[20px]">
                Freelancer
              </p>
            </div>
            <div className="text-start">
              <div className="flex flex-row">
                <img
                  src={hello}
                  alt=""
                  className="w-[5rem] border-[2px] border-blue rounded-full"
                ></img>
                <p className="font-poppins font-bold text-[30px] p-2 mt-4">
                  Welcome back!
                </p>
              </div>
              <p className="text-[19px] font-semibold">
                The space is your workspace.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-[20px] justify-between mt-[50px]">
            <button
              className="w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg bg-[#EFEFFF] 
                         border-[2px] border-blue md:w-[200px] md:h-[200px] hover:bg-lightpurple "
              onClick={() => navigate("/loginfreelancer")}
            >
              <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                <img src={freelancer} alt=""></img>
              </div>
              <span className="font-poppins text-[18px] font-bold mt-[20px] text-center">
                Freelancer
              </span>
            </button>
            <button
              className="w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg bg-[#EFEFFF] 
                        border-[2px] border-blue md:w-[200px] md:h-[200px] hover:bg-lightpurple "
              onClick={() => navigate("/loginclient")}
            >
              <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                <img src={client} alt=""></img>
              </div>
              <span className="font-poppins text-[18px] font-bold mt-[20px] text-center">
                Client
              </span>
            </button>
          </div>
          <div className="text-center mt-[5rem] text-[18px]">
            <p className="">
              Don't have an account?{" "}
              <span
                className="underline tracking-wider cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default Login;
