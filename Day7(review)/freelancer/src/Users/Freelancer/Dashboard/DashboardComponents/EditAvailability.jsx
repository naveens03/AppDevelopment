import { Switch } from "@mui/material";
import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { close } from "../../../../redux/editAvailabilitySlice";

const EditAvailability = () => {
  const dispatch = useDispatch();
  const BlueSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: blue[800],
      "&:hover": {
        backgroundColor: alpha(blue[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: blue[600],
    },
  }));

  const [switch1, setSwitch1] = useState({
    fulltimejob: false,
    freelancer: false,
  });

  const handleChange = (event) => {
    setSwitch1({
      ...switch1,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="fixed  bg-opacity-90 z-10 bg-black w-screen h-screen ">
      <div className="fixed top-[20%] left-[38%] flex flex-col gap-4 border-black border-2 w-[30rem] bg-white rounded-lg p-8">
        <div>
          <p className="text-black font-poppins font-bold text-3xl">
            Edit Availability
          </p>
        </div>
        <div>
          <p className="text-lg">
            Add a "Hire" button to let visitors know that you're looking for new
            opportunities
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full border-[3px] border-gray p-3 rounded-lg bg-bgblue">
            <div className="flex justify-start items-center">
              <BlueSwitch
                checked={switch1.fulltimejob}
                onChange={handleChange}
                name="fulltimejob"
              />
              <p className="text-buttonblue font-semibold text-lg font-poppins">
                Full Time Job
              </p>
            </div>
            <div
              className={`border-gray border-[2px] w-full bg-white py-3 pl-7 flex flex-col gap-3 ${
                switch1.fulltimejob ? "block transition-all" : "hidden"
              }`}
            >
              <div className="flex gap-4">
                <input type="checkbox" className="w-5 h-5"></input>
                <p className="font-poppins ">I'm willing to relocate</p>
              </div>
              <div className="flex gap-4">
                <input type="checkbox" className="w-5 h-5"></input>
                <p className="font-poppins ">
                  I'm looking for remote opportunities
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-[3px] border-gray p-3 rounded-lg bg-bgblue">
            <div className="flex justify-start items-center">
              <BlueSwitch
                checked={switch1.freelancer}
                onChange={handleChange}
                name="freelancer"
              />
              <p className="text-buttonblue font-semibold text-lg font-poppins">
                Freelance & Project Commission
              </p>
            </div>
            <div
              className={`border-gray border-[2px] w-full bg-white py-3 pl-7 flex flex-col gap-3 ${
                switch1.freelancer ? "block transition-all" : "hidden"
              }`}
            >
              <div className="flex-col flex gap-2">
                <div>
                  <p className="font-poppins font-semibold">Min. Budget</p>
                </div>
                <div className=" flex gap-3 pr-5">
                  <input
                    placeholder="Eg.5000"
                    className="border-gray border-[2px] pl-3 w-full"
                    type="number"
                  ></input>
                  <select className="border-gray border-[2px] font-poppins font-lg p-1">
                    <option>INR - ₹</option>
                    <option>USD - $</option>
                  </select>
                </div>
                <div>
                  <p className="font-poppins font-semibold">
                    When are you available?
                  </p>
                </div>
                <div>
                  <select className="border-gray border-[2px] font-poppins font-lg p-1">
                    <option className="p-2 mt-2">
                      Select your availability
                    </option>
                    <option>Within the next few weeks</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-7 ml-3">
          <button
            onClick={() => dispatch(close("false"))}
            className="rounded-full bg-buttonblue hover:bg-hoverblue px-3 py-2 font-poppins text-white font-semibold"
          >
            Done
          </button>
          <button
            onClick={() => dispatch(close("false"))}
            className="hover:underline font-poppins text-darkgray font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAvailability;
