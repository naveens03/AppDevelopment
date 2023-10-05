import React from "react";
import defaultavatar from "../../../../Assets/default-avatar.png";
import { useDispatch } from "react-redux";
import { open } from "../../../../redux/editAvailabilitySlice";
import { useSelector} from "react-redux/es/hooks/useSelector";
import { selectUser } from "../../../../redux/userSlice";

const DashboardNavbar1 = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className="absolute bg-2 bg-white left-[3rem] w-[25rem] top-[7rem] rounded-lg p-[3rem]">
      <div className="flex justify-center">
        <img src={defaultavatar} alt="" className="w-[8rem]"></img>
      </div>
      <div className="flex justify-center mt-[1rem]">
        <p className="font-poppins text-2xl font-semibold">{user?.emailfreelancer ? user.emailfreelancer : "Username" }</p>
      </div>
      <div className="flex justify-center mt-[1rem]">
        <i class="fa-solid fa-location-dot text-lightgray mr-[3px]"></i>
        <p className="text-lightgray">India</p>
      </div>
      <div className="flex justify-center mt-[1rem]">
        <button className="bg-buttonblue border-0 rounded-full p-[0.6rem] w-full flex justify-center ">
          <i class="fa-solid fa-pen text-white mr-[1rem] "></i>
          <p className="text-white font-semibold font-poppins">
            Edit your profile
          </p>
        </button>
      </div>
      <div className="border-gray w-full border-2 mt-[2rem] rounded-md">
        <p className="ml-[1rem] font-semibold font-poppins py-[1rem]">
          Hire {user?.emailfreelancer ? user.emailfreelancer : "Username" }
        </p>
        <p className="border-t-2 border-gray ml-4 mr-4 "></p>
        <div>
          <p className="ml-[1rem] font-semibold font-poppins py-[1rem]">
            Looking For Opportunities?
          </p>
          <p className="ml-[1rem] font-thin font-poppins text-lightgray ">
            Add our new 'Hire' section to your profile to let visitors know that
            you're looking for new opportunities.
          </p>
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
          MEMBER SINCE: SEPTEMBER 19, 2023
        </p>
      </div>
    </div>
  );
};

export default DashboardNavbar1;
