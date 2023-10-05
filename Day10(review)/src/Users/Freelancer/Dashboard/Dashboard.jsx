import React from "react";
import DashboardNavbar1 from "./Navbar/DashboardNavbar1";
import DashboardNavbar2 from "./Navbar/DashboardNavbar2";
import bannerimage from "../../../Assets/banner.jpg";
import OngoingProjects from "./DashboardComponents/OngoingProjects";
import CompletedProjects from "./DashboardComponents/CompletedProjects";
import Projectrequests from "./DashboardComponents/Project requests";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectdashboardNav2View } from "../../../redux/dashboardNav2ViewSlice";
import EditAvailability from "./DashboardComponents/EditAvailability";
import { selectActivenav1edit } from "../../../redux/editAvailabilitySlice";
import AboutFreelancer from "./DashboardComponents/AboutFreelancer";
import Blog from "./DashboardComponents/Blog";

const Dashboard = () => {
  const dashboardNav2View = useSelector(selectdashboardNav2View);
  const activenav1edit = useSelector(selectActivenav1edit);
  return (
    <div>
      <div className={` ${activenav1edit === "true" ? "block" : "hidden"}`}>
        <EditAvailability />
      </div>
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
      <DashboardNavbar1 />
      <DashboardNavbar2 />
      <div className="h-screen bg-gray  pl-[33rem]">
        <div
          className={` ${
            dashboardNav2View.dashboardNav2View === "OngoingProjects"
              ? "block pt-[10rem]"
              : "hidden"
          }`}
        >
          <OngoingProjects />
        </div>
        <div
          className={` ${
            dashboardNav2View.dashboardNav2View === "CompletedProjects"
              ? "block pt-[10rem]"
              : "hidden"
          }`}
        >
          <CompletedProjects />
        </div>
        <div
          className={` ${
            dashboardNav2View.dashboardNav2View === "ProjectRequests"
              ? "block pt-[10rem]"
              : "hidden"
          }`}
        >
          <Projectrequests />
        </div>
        <div
          className={` ${
            dashboardNav2View.dashboardNav2View === "Profile"
              ? "block"
              : "hidden"
          }`}
        >
          <AboutFreelancer />
        </div>
        <div
          className={` ${
            dashboardNav2View.dashboardNav2View === "Blog"
              ? "block pt-[10rem]"
              : "hidden"
          }`}
        >
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
