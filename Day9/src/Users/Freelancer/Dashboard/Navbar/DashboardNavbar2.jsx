import React from "react";
import { changedashboardNav2view } from "../../../../redux/dashboardNav2ViewSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectdashboardNav2View } from "../../../../redux/dashboardNav2ViewSlice";

const DashboardNavbar2 = () => {
  const dispatch = useDispatch();
  const dashboardNav2View = useSelector(selectdashboardNav2View);
  return (
    <div className="absolute top-[21rem] left-[33rem] flex p-3 gap-4">
      <button
        className={`px-3 py-2 rounded-full ${
          dashboardNav2View.dashboardNav2View === "OngoingProjects"
            ? "text-white bg-black"
            : "text-black hover:bg-hovergray"
        }   cursor-pointer`}
        onClick={() =>
          dispatch(
            changedashboardNav2view({
              dashboardNav2View: "OngoingProjects",
            })
          )
        }
      >
        <p className="font-poppins font-semibold">Ongoing projects</p>
      </button>
      <button
        className={`p-3 rounded-full ${
          dashboardNav2View.dashboardNav2View === "CompletedProjects"
            ? "text-white bg-black"
            : "text-black hover:bg-hovergray"
        }`}
        onClick={() =>
          dispatch(
            changedashboardNav2view({
              dashboardNav2View: "CompletedProjects",
            })
          )
        }
      >
        <p className="font-poppins font-semibold">Completed projects</p>
      </button>
      <button
        className={`p-3 rounded-full ${
          dashboardNav2View.dashboardNav2View === "ProjectRequests"
            ? "text-white bg-black"
            : "text-black hover:bg-hovergray"
        }`}
        onClick={() =>
          dispatch(
            changedashboardNav2view({
              dashboardNav2View: "ProjectRequests",
            })
          )
        }
      >
        <p className="font-poppins font-semibold">Project Requests</p>
      </button>
      <button
        className={`p-3 rounded-full ${
          dashboardNav2View.dashboardNav2View === "Profile"
            ? "text-white bg-black"
            : "text-black hover:bg-hovergray"
        }`}
        onClick={() =>
          dispatch(
            changedashboardNav2view({
              dashboardNav2View: "Profile",
            })
          )
        }
      >
        <p className="font-poppins font-semibold">Profile</p>
      </button>
      <button
        className={`p-3 rounded-full ${
          dashboardNav2View.dashboardNav2View === "Blog"
            ? "text-white bg-black"
            : "text-black hover:bg-hovergray"
        }`}
        onClick={() =>
          dispatch(
            changedashboardNav2view({
              dashboardNav2View: "Blog",
            })
          )
        }
      >
        <p className="font-poppins font-semibold">Blog</p>
      </button>
    </div>
  );
};

export default DashboardNavbar2;
