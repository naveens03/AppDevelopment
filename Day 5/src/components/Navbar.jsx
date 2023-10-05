import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className=" flex p-5 bg-bggreen border-b-bordergray border-b-[0.1rem]">
      <div className="">
        <p className="text-white ml-[3rem] py-2 font-poppins font-semibold text-xl">
          Freelancer
        </p>
      </div>
      <div className="flex justify-end w-full gap-12 mr-[4rem]">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-white font-poppins"
        >
          Dash board
        </button>
        {user != null ? (
          <>
          <button onClick={()=>dispatch(logout())} className=" py-3 px-5 bg-white text-black font-poppins rounded-full">
            Logout
          </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-white font-poppins"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className=" py-3 px-5 bg-white text-black font-poppins rounded-full"
            >
              Sign up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
