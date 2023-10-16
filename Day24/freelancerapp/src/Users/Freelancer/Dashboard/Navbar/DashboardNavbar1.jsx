import React, { useEffect, useState } from "react";
import defaultavatar from "../../../../Assets/default-avatar.png";
import { useDispatch } from "react-redux";
import { open } from "../../../../redux/editAvailabilitySlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../../../../redux/userSlice";
import { useNavigate } from "react-router";
import FreelancerService from "../../../../service/FreelancerService";

const DashboardNavbar1 = () => {
  const nav = new useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logeduser = localStorage.getItem("userdata");
  const [memberSince, setMemberSince] = useState("");
  const userobject = JSON.parse(logeduser);

  const getuser = async()=>{
    await FreelancerService.getById(localStorage.getItem('userid')).then((response)=>{
      localStorage.setItem("userdata",JSON.stringify(response.data))})
  }

  useEffect(() => {
    const options = { year: "numeric", month: "long" };
    const joindate = new Date(userobject.joiningDate);
    const monthAndYear = joindate.toLocaleDateString(undefined, options);
    setMemberSince(monthAndYear);

    getuser();
  }, [userobject]);
  return (
    <div className="absolute bg-2 bg-white left-[3rem] w-[25rem] top-[7rem] rounded-lg p-[3rem]">
      <div className="flex justify-center">
        <img src={defaultavatar} alt="" className="w-[8rem]"></img>
      </div>
      <div className="flex justify-center mt-[1rem]">
        <p className="font-poppins text-2xl font-semibold">
          {user?.name ? user.name : "Username"}
        </p>
      </div>
      <div className="flex justify-center mt-[1rem]">
        <i class="fa-solid fa-location-dot text-lightgray mr-[3px]"></i>
        <p className="text-lightgray">India</p>
      </div>
      <div className="flex justify-center mt-[1rem]">
        <button
          className="bg-buttonblue border-0 rounded-full p-[0.6rem] w-full flex justify-center "
          onClick={() => nav("/editprofile")}
        >
          <i class="fa-solid fa-pen text-white mr-[1rem] "></i>
          <p className="text-white font-semibold font-poppins">
            Edit your profile
          </p>
        </button>
      </div>
      <div className="border-gray w-full border-2 mt-[2rem] rounded-md">
        <p className="ml-[1rem] font-semibold font-poppins py-[1rem]">
          Hire {user?.name ? user.name : "Username"}
        </p>
        <p className="border-t-2 border-gray ml-4 mr-4 "></p>
        {userobject.availability.iamlookingforremoteopportunities ===
          (null || false) &&
        userobject.availability.iamwillingtorelocate === (null || false) &&
        userobject.availability.whenavailable === null &&
        userobject.availability.minbudget >= 0 ? (
          <div>
            <p className="ml-[1rem] font-semibold font-poppins py-[1rem]">
              Looking For Opportunities?
            </p>
            <p className="ml-[1rem] font-thin font-poppins text-lightgray ">
              Add our new 'Hire' section to your profile to let visitors know
              that you're looking for new opportunities.
            </p>
          </div>
        ) : (
          <div className="flex flex-col py-[1rem] mx-[1rem] font-medium">
            <div>
              {userobject.availability.iamlookingforremoteopportunities !==
              false
                ? "I'm looking for remote opportunities"
                : ""}
            </div>
            <div>
              {userobject.availability.iamwillingtorelocate !== false
                ? "I'm willing to relocate"
                : ""}
            </div>

            <div>
              <p>
                Minbudget : {userobject.availability.currency}{" "}
                {userobject.availability.minbudget}{" "}
              </p>
            </div>
            <div>
              <p>Availability:</p>
            </div>
            <div>
              <p className="ml-2">{userobject.availability.whenavailable}</p>
            </div>
          </div>
        )}
        <div>
          <button
            className="bg-gray border-0 rounded-full p-[0.6rem] w-[80%] flex justify-center ml-[10%] my-[1rem]"
            onClick={() => {
              dispatch(open("true"));
            }}
          >
            <i class="fa-solid fa-pen text-buttonblue mr-[1rem] "></i>
            <p className="text-buttonblue font-semibold font-poppins">
              Edit Availability
            </p>
          </button>
        </div>
      </div>
      <div className="mt-[1rem] flex justify-center">
        <p className=" text-lightgray text-[12px]">
          MEMBER SINCE: {memberSince}
        </p>
      </div>
    </div>
  );
};

export default DashboardNavbar1;
