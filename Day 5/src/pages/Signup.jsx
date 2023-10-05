import React, { useState } from "react";
import freelancerimg from ".././Assets/gamer.png";
import clientimg from ".././Assets/astro-computer.png";
import planetblue from ".././Assets/planet-blue.png";
import planetorange from ".././Assets/planet-orange.png";
import { useNavigate } from "react-router";
import astro1 from ".././Assets/astronaut-pushing-package-cart.png";
import astro2 from ".././Assets/astronaut-chilling-on-moon.png";
import astro3 from ".././Assets/astro-angle.png";
import astro4 from ".././Assets/astronaut-celebrating.png";
import astro5 from ".././Assets/astro-ipad.png";
import astro6 from ".././Assets/astronaut-riding-on-rocket.png";
import astro7 from ".././Assets/refer_friend_astros.png";
import Footer1 from "../components/Footer1";

const Signup = () => {
  const navigate = new useNavigate();

  const [makeVisible, setMakeVisible] = useState(1);
  const [isClient, setIsClient] = useState(true);
  const [bringsYou, setBringsYou] = useState(1);
  const [interested, setInterested] = useState(1);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailfreelancer, setEmailfreelancer] = useState("");
  const [passwordfreelancer, setPasswordfreelancer] = useState("");

  const [isfirstname, setIsfirstname] = useState(true);
  const [islastname, setIslastname] = useState(true);
  const [isemailfreelancer, setIsemailfreelancer] = useState(true);
  const [ispasswordfreelancer, setIspasswordfreelancer] = useState(true);

  const [nameclient, setNameClient] = useState("");
  const [emailclient, setEmailclient] = useState("");
  const [passwordclient, setPasswordclient] = useState("");

  const [isnameclient, setIsnameclient] = useState(true);
  const [isemailclient, setIsemailclient] = useState(true);
  const [ispasswordclient, setIspasswordclient] = useState(true);

  const handlefreelancerFirstname = (e) => {
    setFirstName(e.target.value);
    setIsfirstname(true);
  };

  const handlefreelancerLastname = (e) => {
    setLastname(e.target.value);
    setIslastname(true);
  };

  const handlefreelanceremail = (e) => {
    setEmailfreelancer(e.target.value);
    setIsemailfreelancer(true);
  };

  const handlefreelancerpassword = (e) => {
    setPasswordfreelancer(e.target.value);
    setIspasswordfreelancer(true);
  };

  const handleclientname = (e) => {
    setNameClient(e.target.value);
    setIsnameclient(true);
  };

  const handleclientemail = (e) => {
    setEmailclient(e.target.value);
    setIsemailclient(true);
  };

  const handleclientpassword = (e) => {
    setPasswordclient(e.target.value);
    setIspasswordclient(true);
  };

  const handleSubmitFreelance = (e) => {
    e.preventDefault();
    if (!firstname) {
      setIsfirstname(false);
    }
    if (!lastname) {
      setIslastname(false);
    }
    if (!emailfreelancer) {
      setIsemailfreelancer(false);
    }
    if (!passwordfreelancer) {
      setIspasswordfreelancer(false);
    }
    if (!firstname) {
      setIsfirstname(false);
      return;
    }
    if (!lastname) {
      setIslastname(false);
      return;
    }
    if (!emailfreelancer) {
      setIsemailfreelancer(false);
      return;
    }
    if (!passwordfreelancer) {
      setIspasswordfreelancer(false);
      return;
    }
    navigate("/");
  };

  const handleSubmitClient = (e) => {
    e.preventDefault();
    if (!nameclient) {
      setIsnameclient(false);
    }
    if (!emailclient) {
      setIsemailclient(false);
    }
    if (!passwordclient) {
      setIspasswordclient(false);
    }
    if (!nameclient) {
      setIsnameclient(false);
      return;
    }
    if (!emailclient) {
      setIsemailclient(false);
      return;
    }
    if (!passwordclient) {
      setIspasswordclient(false);
      return;
    }
    navigate("/");
  };

  return (
    <div className="overflow-x-hidden">
      {/* start of 1 */}
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
      {makeVisible === 1 ? (
        <div className="">
          <div className=""></div>
          <div className="grid place-content-center mt-[2%]">
            <div className="flex flex-col items-center">
              <p className="font-poppins font-semibold text-[20px] mb-[3rem]">
                Freelancer
              </p>
              <p className="font-poppins font-bold text-[30px] p-2">
                Welcome to freelancer
              </p>
              <p className="text-[17px] font-semibold">
                Sign up as Freelancer or Client
              </p>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-[20px] justify-between mt-[50px]">
              <button
                onClick={() => setIsClient(false)}
                className={` w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg ${
                  !isClient ? "bg-lightpurple" : "bg-[#EFEFFF] "
                } 
                         border-[2px] border-blue md:w-[200px] md:h-[200px]`}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={freelancerimg} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[20px] text-center">
                  Freelancer
                </span>
              </button>
              <button
                onClick={() => setIsClient(true)}
                className={`w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg ${
                  isClient ? "bg-lightpurple" : "bg-[#EFEFFF] "
                } bg-[#EFEFFF] 
                        border-[2px] border-blue md:w-[200px] md:h-[200px] `}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={clientimg} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[20px] text-center">
                  Client
                </span>
              </button>
            </div>
            <div className="mt-[2rem] flex md:flex-row justify-between">
              <button
                onClick={() => navigate("/login")}
                className="rounded-lg cursor-pointer border-blue border-[2px] px-[3rem] py-[12px] text-blue text-base
                  font-semibold font-poppins hover:text-white hover:bg-blue"
              >
                Back
              </button>
              <button
                onClick={() => setMakeVisible(2)}
                className="rounded-lg cursor-pointer border-blue border-[2px] px-[3rem] py-[12px] text-white bg-blue text-base
                  font-semibold font-poppins"
              >
                Continue
              </button>
            </div>
            <div className="text-center mt-[5rem] text-[18px]">
              <p className="">
                Have an account?{" "}
                <span
                  className="underline tracking-wider cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : makeVisible === 2 ? (
        // {/* end of 1 */}
        <div className="">
          <div className=""></div>
          <div className="grid place-content-center mt-[2%]">
            <div className="flex flex-col items-center">
              <p className="font-poppins font-semibold text-[20px] mb-[3rem]">
                Freelancer
              </p>
              <p className="font-poppins font-bold text-[30px] p-2">
                Tell us what brings you to Freelancer
              </p>
            </div>
            <div className="grid  grid-cols-2  gap-x-36 gap-y-6 md:flex-row  ">
              <button
                onClick={() => setBringsYou(1)}
                className={`w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg ${
                  bringsYou === 1 ? "bg-lightpurple" : "bg-[#EFEFFF] "
                } 
                         border-[2px] border-blue md:w-[200px] md:h-[200px] `}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={clientimg} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[20px] text-center">
                  Get global jobs
                </span>
              </button>
              <button
                onClick={() => setBringsYou(2)}
                className={`w-full h-full flex flex-col   items-center p-[30px] cursor-pointer rounded-lg ${
                  bringsYou === 2 ? "bg-lightpurple" : "bg-[#EFEFFF] "
                }  
                        border-[2px] border-blue md:w-[200px] md:h-[200px] `}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={astro1} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[5px] text-center">
                  Connect with professionals
                </span>
              </button>
              <button
                onClick={() => setBringsYou(3)}
                className={`w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg ${
                  bringsYou === 3 ? "bg-lightpurple" : "bg-[#EFEFFF] "
                } 
                         border-[2px] border-blue md:w-[200px] md:h-[200px]`}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={astro2} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[5px] text-center">
                  Learn from community
                </span>
              </button>
              <button
                onClick={() => setBringsYou(4)}
                className={`w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg ${
                  bringsYou === 4 ? "bg-lightpurple" : "bg-[#EFEFFF] "
                }  
                         border-[2px] border-blue md:w-[200px] md:h-[200px] `}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={astro3} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[20px] text-center">
                  Earn money
                </span>
              </button>
            </div>
            <div className="mt-[2rem] flex md:flex-row justify-between">
              <button
                onClick={() => setMakeVisible(1)}
                className="rounded-lg cursor-pointer border-blue border-[2px] px-[3rem] py-[12px] text-blue text-base
                  font-semibold font-poppins hover:text-white hover:bg-blue"
              >
                Back
              </button>

              <button
                onClick={() => setMakeVisible(3)}
                className="rounded-lg cursor-pointer border-blue border-[2px] px-[3rem] py-[12px] text-white bg-blue text-base
                  font-semibold font-poppins"
              >
                Continue
              </button>
            </div>
            <div className="text-center mt-[5rem] text-[18px]">
              <p className="">
                Have an account?{" "}
                <span
                  className="underline tracking-wider cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : // {/*end of 2*/}
      makeVisible === 3 ? (
        <div className="">
          <div className=""></div>
          <div className="grid place-content-center mt-[2%]">
            <div className="flex flex-col items-center">
              <p className="font-poppins font-semibold text-[20px] mb-[3rem]">
                Freelancer
              </p>
              <p className="font-poppins font-bold text-[30px] p-2">
                What jobs are you interested on?
              </p>
            </div>
            <div className="grid  grid-cols-2  gap-x-36 gap-y-6 md:flex-row  ">
              <button
                onClick={() => setInterested(1)}
                className={`w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg ${
                  interested === 1 ? "bg-lightpurple" : "bg-[#EFEFFF] "
                } 
              border-[2px] border-blue md:w-[200px] md:h-[200px] `}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={astro4} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[20px] text-center">
                  Engineering
                </span>
              </button>
              <button
                onClick={() => setInterested(2)}
                className={`w-full h-full flex flex-col   items-center p-[30px] cursor-pointer rounded-lg ${
                  interested === 2 ? "bg-lightpurple" : "bg-[#EFEFFF] "
                } 
                        border-[2px] border-blue md:w-[200px] md:h-[200px] `}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={astro5} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[5px] text-center">
                  Product and Design
                </span>
              </button>
              <button
                onClick={() => setInterested(3)}
                className={`w-full h-full flex flex-col  items-center p-[30px] cursor-pointer rounded-lg ${
                  interested === 3 ? "bg-lightpurple" : "bg-[#EFEFFF] "
                } 
                         border-[2px] border-blue md:w-[200px] md:h-[200px]`}
              >
                <div className="bg-lightpurple rounded-full w-[108px] h-[108px]">
                  <img src={astro6} alt=""></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[5px] text-center">
                  Community and Marketing
                </span>
              </button>
              <button
                onClick={() => setInterested(4)}
                className={`w-full h-full flex flex-col  items-center p-[28px] cursor-pointer rounded-lg ${
                  interested === 4 ? "bg-lightpurple" : "bg-[#EFEFFF] "
                } 
                         border-[2px] border-blue md:w-[200px] md:h-[200px] `}
              >
                <div className="bg-lightpurple rounded-full w-[94px] h-[108px]">
                  <img src={astro7} alt="" className="w-[100px] mt-4"></img>
                </div>
                <span className="font-poppins text-[18px] font-bold mt-[-6px] text-center">
                  Business and sales
                </span>
              </button>
            </div>
            <div className="mt-[2rem] flex md:flex-row justify-between">
              <button
                onClick={() => setMakeVisible(2)}
                className="rounded-lg cursor-pointer border-blue border-[2px] px-[3rem] py-[12px] text-blue text-base
                  font-semibold font-poppins hover:text-white hover:bg-blue"
              >
                Back
              </button>

              <button
                onClick={() => setMakeVisible(4)}
                className="rounded-lg cursor-pointer border-blue border-[2px] px-[3rem] py-[12px] text-white bg-blue text-base
                  font-semibold font-poppins"
              >
                Continue
              </button>
            </div>
            <div className="text-center mt-[5rem] text-[18px]">
              <p className="">
                Have an account?{" "}
                <span
                  className="underline tracking-wider cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : // {/*end of 3*/}
      !isClient && makeVisible === 4 ? (
        <div className="">
          <div className=""></div>
          <div className="grid place-content-center mt-[2%]">
            <div className="flex flex-col items-center">
              <p className="font-poppins font-semibold text-[20px] mb-[3rem]">
                Freelancer
              </p>
              <p className="font-poppins font-bold text-[30px] p-2">
                One final step to create your free account!
              </p>
              <p className="text-[17px] font-semibold">
                Almost there! Finish filling out the following and get started
                on Freelancer!
              </p>
            </div>

            {/* freelancer */}

            <form onSubmit={handleSubmitFreelance} className="mt-8">
              <div className="flex gap-8">
                <div>
                  <div className="flex gap-3 items-center">
                    <p className="font-poppins font-bold text-[19px]">
                      First name*
                    </p>
                    {!isfirstname && (
                      <div className="text-red">
                        <span>Firstname is required.</span>
                      </div>
                    )}
                  </div>

                  <input
                    placeholder="Firstname"
                    type="text"
                    className="hover:border-[1px] transition-all duration-100 border-lightgray w-[18rem]
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
                    onChange={handlefreelancerFirstname}
                  ></input>
                </div>
                <div>
                  <div className="flex gap-3 items-center">
                    <p className="font-poppins font-bold text-[19px]">
                      Last name*
                    </p>
                    {!islastname && (
                      <div className="text-red">
                        <span>Lastname is required.</span>
                      </div>
                    )}
                  </div>
                  <input
                    placeholder="Lastname"
                    type="text"
                    className="hover:border-[1px] transition-all duration-100 border-lightgray w-[18rem]
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
                    onChange={handlefreelancerLastname}
                  ></input>
                </div>
              </div>
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
                  placeholder="Email"
                  type="email"
                  className="hover:border-[1px] transition-all duration-100 border-lightgray w-full
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
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
                  placeholder="Password"
                  className="hover:border-[1px] transition-all duration-100 border-lightgray w-full
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
                  onChange={handlefreelancerpassword}
                ></input>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  className="w-5 h-5 mr-3"
                  required
                ></input>
                <p>
                  I agree to Freelancer's{" "}
                  <span className="underline tracking-wider cursor-pointer">
                    terms of service
                  </span>{" "}
                  and{" "}
                  <span className="underline tracking-wider cursor-pointer">
                    privacy policy
                  </span>{" "}
                  .
                </p>
              </div>
              <div>
                <button className="bg-buttonblue w-full mt-12 text-white text-lg font-semibold font-poppins p-2 rounded-xl">
                  Get started with freelancer
                </button>
              </div>
            </form>
            <div className="text-center mt-[5rem] text-[18px]">
              <p className="">
                Have an account?{" "}
                <span
                  className="underline tracking-wider cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // end of 4
        //client
        <div className="">
          <div className=""></div>
          <div className="grid place-content-center mt-[2%]">
            <div className="flex flex-col items-center">
              <p className="font-poppins font-semibold text-[20px] mb-[3rem]">
                Freelancer
              </p>
              <p className="font-poppins font-bold text-[30px] p-2">
                One final step to create your free account!
              </p>
              <p className="text-[17px] font-semibold">
                Almost there! Finish filling out the following and get started
                on Freelancer!
              </p>
            </div>

            <form onSubmit={handleSubmitClient} className="mt-8">
              <div className="">
                <div>
                  <div className="flex gap-3 items-center">
                    <p className="font-poppins font-bold text-[19px]">
                      Company or client name*
                    </p>
                    {!isnameclient && (
                      <div className="text-red">
                        <span>Name is required.</span>
                      </div>
                    )}
                  </div>
                  <input
                    onChange={handleclientname}
                    placeholder="Company or client name"
                    type="text"
                    className="hover:border-[1px] transition-all duration-100 border-lightgray w-full
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <p className="font-poppins font-bold text-[19px]">Email*</p>
                  {!isemailclient && (
                    <div className="text-red">
                      <span>Email is required.</span>
                    </div>
                  )}
                </div>
                <input
                  onChange={handleclientemail}
                  placeholder="Email"
                  type="email"
                  className="hover:border-[1px] transition-all duration-100 border-lightgray w-full
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
                ></input>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <p className="font-poppins font-bold text-[19px]">
                    Password*
                  </p>
                  {!ispasswordclient && (
                    <div className="text-red">
                      <span>Password is required.</span>
                    </div>
                  )}
                </div>
                <input
                  onChange={handleclientpassword}
                  placeholder="Password"
                  className="hover:border-[1px] transition-all duration-100 border-lightgray w-full
                        my-[1rem] rounded-xl h-[3rem] bg-lightgray2 pl-4"
                ></input>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  className="w-5 h-5 mr-3"
                  required
                ></input>
                <p>
                  I agree to Freelancer's{" "}
                  <span className="underline tracking-wider cursor-pointer">
                    terms of service
                  </span>{" "}
                  and{" "}
                  <span className="underline tracking-wider cursor-pointer">
                    privacy policy
                  </span>{" "}
                  .
                </p>
              </div>
              <div>
                <button className="bg-buttonblue w-full mt-12 text-white text-lg font-semibold font-poppins p-2 rounded-xl">
                  Get started with freelancer
                </button>
              </div>
            </form>
            <div className="text-center mt-[5rem] text-[18px]">
              <p className="">
                Have an account?{" "}
                <span
                  className="underline tracking-wider cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {/*end of 5 */}
      <Footer1 />
    </div>
  );
};

export default Signup;
