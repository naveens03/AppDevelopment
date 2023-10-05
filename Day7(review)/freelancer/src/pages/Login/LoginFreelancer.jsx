import React, { useState } from "react";
import planetblue from "../.././Assets/planet-blue.png";
import planetorange from "../.././Assets/planet-orange.png";
import hello from "../.././Assets/astro-hello.png";
import { useNavigate } from "react-router";
import spaceship from "../.././Assets/space-ship.png";
import Footer1 from "../../components/Footer1";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

const LoginFreelancer = () => {
  const dispatch = new useDispatch();
  const navigate = new useNavigate();

  const [emailfreelancer, setEmailfreelancer] = useState("");
  const [passwordfreelancer, setPasswordfreelancer] = useState("");

  const [isemailfreelancer, setIsemailfreelancer] = useState(true);
  const [ispasswordfreelancer, setIspasswordfreelancer] = useState(true);

  const handlefreelanceremail = (e) => {
    setEmailfreelancer(e.target.value);
    setIsemailfreelancer(true);
  };

  const handlefreelancerpassword = (e) => {
    setPasswordfreelancer(e.target.value);
    setIspasswordfreelancer(true);
  };

  const handleSubmitFreelance = (e) => {
    e.preventDefault();
    if (!emailfreelancer) {
      setIsemailfreelancer(false);
    }
    if (!passwordfreelancer) {
      setIspasswordfreelancer(false);
    }
    if (!emailfreelancer) {
      setIsemailfreelancer(false);
      return;
    }
    if (!passwordfreelancer) {
      setIspasswordfreelancer(false);
      return;
    }
    dispatch(login({
      emailfreelancer:emailfreelancer
    }))
    navigate("/");
  };

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
              <div className="flex">
                <p className="text-[19px] font-semibold mt-3 mr-1">
                  Make your workspace ready
                </p>
                <img src={spaceship} className="w-[5rem]" alt=""></img>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmitFreelance}>
            <div className="flex-row w-full gap-[20px] justify-between mt-[50px]">
              <div>
                <div className="flex gap-3 items-center">
                  <p className="font-poppins font-bold text-[19px]">Email*</p>
                  {!isemailfreelancer && (
                    <div className="text-red">
                      <span>Email is required.</span>
                    </div>
                  )}
                </div>
                <input
                  className="hover:border-[1px] transition-all duration-100 border-lightgray w-[30rem]
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
                  placeholder="Email"
                  onChange={handlefreelanceremail}
                ></input>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <p className="font-poppins font-bold text-[19px]">
                    Password*
                  </p>
                  {!ispasswordfreelancer && (
                    <div className="text-red">
                      <span>Password is required.</span>
                    </div>
                  )}
                </div>
                <input
                  className="hover:border-[1px] transition-all duration-100 border-lightgray w-[30rem]
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
                  placeholder="Password"
                  onChange={handlefreelancerpassword}
                ></input>
              </div>
              <div>
                <span className="underline tracking-wider cursor-pointer ">
                  Forgot password?
                </span>
              </div>
            </div>
            <button className="bg-buttonblue w-full mt-12 text-white text-lg font-semibold font-poppins p-2 rounded-xl">
              Resume Freelance Ventures!
            </button>
          </form>
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

export default LoginFreelancer;
