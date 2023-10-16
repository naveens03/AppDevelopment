import React, { useState } from "react";

const Projects = () => {
  const [addview, setAddview] = useState(false);
  const logeduser = localStorage.getItem("userdata");
  const userobject = JSON.parse(logeduser);

  const handleprojectadd = () => {
    setAddview(true);
  };

  const [project, setProject] = useState({
    title: "",
    description: "",
    role: "",
    startDate: "",
    endDate: "",
    techUsed: [],
    images: [],
    tags: [],
  });

  const handleprojectchange = (event) => {
    const propertyName = event.target.name;

    const propertyValue = event.target.value;

    console.log(event.target.checked);
    setProject({ ...project, [propertyName]: propertyValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(project);
  };

  return (
    <div className="w-full">
      <div
        className={`${
          addview ? "block" : "hidden"
        } fixed top-0 left-0  bg-opacity-50 z-10 bg-black w-screen h-screen `}
      >
        <div
          className={`   fixed top-[33%] right-[10%] bg-white w-[40rem] p-3 rounded-lg`}
        >
          <div className="w-full flex justify-end cursor-pointer ">
            <i
              class="fa-solid fa-xmark text-2xl"
              onClick={() => setAddview(false)}
            ></i>
          </div>
          <div className=" mt-[-2rem]">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <div>
                <p className="font-poppins font-semibold text-lg">
                  Add Your Project Detail
                </p>
              </div>

              <div className="flex items-center gap-[4.5rem]">
                {" "}
                <p>Project Title</p>{" "}
                <input
                  placeholder="Project title"
                  name="title"
                  className="px-2 py-1 border-gray border-[2px] rounded-md"
                  onChange={handleprojectchange}
                  required
                ></input>
              </div>
              <div className="flex items-center gap-3">
                {" "}
                <p>Your role on the project</p>{" "}
                <input
                  placeholder="role"
                  name="role"
                  className="px-2 py-1 border-gray border-[2px] rounded-md"
                  onChange={handleprojectchange}
                  required
                ></input>
              </div>

              <div className="flex items-center gap-3">
                {" "}
                <p>Start date of the project</p>{" "}
                <input
                  type="date"
                  placeholder="startDate"
                  name="startDate"
                  className="px-2 py-1 border-gray border-[2px] rounded-md "
                  onChange={handleprojectchange}
                  required
                ></input>
              </div>
              <div className="flex items-center gap-3">
                {" "}
                <p>End date of the project</p>{" "}
                <input
                  type="date"
                  placeholder="endDate"
                  name="endDate"
                  className="px-2 py-1 border-gray border-[2px] rounded-md "
                  onChange={handleprojectchange}
                  required
                ></input>
              </div>
              <div className="flex flex-col gap-3">
                {" "}
                <p>Customized Description</p>{" "}
                <textarea
                  placeholder="customizedDescription"
                  name="customizedDescription"
                  className="px-2 py-1 border-gray border-[2px] rounded-md w-full h-[10rem]"
                  onChange={handleprojectchange}
                  required
                ></textarea>
              </div>
              <div>
                <button className=" ml-[1rem] rounded-full bg-buttonblue hover:bg-hoverblue px-3 py-2 font-poppins text-white font-semibold">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-10 items-center">
          <p className="text-2xl font-semibold">Projects</p>
          <button
            className="bg-bgblue rounded-full px-3 py-1 cursor-pointer"
            onClick={handleprojectadd}
          >
            add
          </button>
        </div>
        <div className="overflow-y-scroll w-full h-[37rem]">
          {userobject.education.map((edu, index) => {
            return (
              <div className="flex gap-10 mt-5">
                <p className="px-3 py-1 h-fit text-buttongreen bg-bggreen1 rounded-full">
                  {edu.degree.slice(0, 1)}
                </p>
                <div className="flex flex-col gap-4">
                  <p className="bg-textbg1 rounded-full px-3 py-1 w-fit">
                    {edu.graduationYear}
                  </p>
                  <p>
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="text-buttongreen">{edu.institution}</p>
                  <p className="text-lightgray">{edu.customizedDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
