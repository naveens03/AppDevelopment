import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import WorkandExperience from "./WorkandExperience";
import Awards from "./Awards";

const AboutFreelancer = () => {
  const [profileview, setProfileview] = useState("Education");
  return (
    <div className="flex flex-col h-screen ml-[-3rem] ">
      <div className="pt-[10rem]">
        <div className="flex gap-5">
          <div className="flex flex-col gap-3 rounded-lg bg-white p-4 min-w-[224px] h-fit">
            <p
              className="text-xl font-semibold cursor-pointer"
              onClick={() => setProfileview("Education")}
            >
              Education
            </p>

            <p
              className="text-xl font-semibold cursor-pointer"
              onClick={() => setProfileview("Skills")}
            >
              Skills
            </p>
            <p
              className="text-xl font-semibold cursor-pointer"
              onClick={() => setProfileview("Awards")}
            >
              Awards
            </p>
            <p
              className="text-xl font-semibold cursor-pointer"
              onClick={() => setProfileview("Projects")}
            >
              Projects
            </p>
            <p
              className="text-xl font-semibold cursor-pointer"
              onClick={() => setProfileview("WorkandExperience")}
            >
              Work and Experience
            </p>
          </div>
          <div className="w-full">
            <div
              className={` ${
                profileview === "Education" ? "block" : "hidden"
              } w-full`}
            >
              <Education />
            </div>
            <div
              className={` ${profileview === "Skills" ? "block" : "hidden"}`}
            >
              <Skills />
            </div>
            <div
              className={` ${profileview === "Awards" ? "block" : "hidden"}`}
            >
              <Awards />
            </div>
            <div
              className={` ${profileview === "Projects" ? "block" : "hidden"}`}
            >
              <Projects />
            </div>
            <div
              className={` ${
                profileview === "WorkandExperience" ? "block" : "hidden"
              }`}
            >
              <WorkandExperience />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="overflow-y-scroll flex gap-6 flex-col">
        <div>
          <div>
            <p className="text-2xl font-semibold">Education</p>
          </div>
          <div className="flex gap-10 mt-5">
            <p className="w-fit px-3 py-1 h-fit text-buttongreen bg-bggreen1 rounded-full">
              B
            </p>
            <div className="flex flex-col gap-4">
              <p className="bg-textbg1 rounded-full px-3 py-1 w-fit">
                2005-2006
              </p>
              <p>Bachlors in Fine Arts</p>
              <p className="text-buttongreen">Modern College</p>
              <p className="text-lightgray">
                Fine Arts graduate with a strong foundation in diverse artistic
                mediums, combining technical skills with a keen creative vision.
                Adept at conveying emotions and ideas through visual
                storytelling.
              </p>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <p className="w-fit px-3 py-1 h-fit text-buttongreen bg-bggreen1 rounded-full">
              C
            </p>
            <div className="flex flex-col gap-4">
              <p className="bg-textbg1 rounded-full px-3 py-1 w-fit">
                2006-2009
              </p>
              <p>Computer Science</p>
              <p className="text-buttongreen">Harvartd University</p>
              <p className="text-lightgray">
                Computer Science graduate with a solid foundation in
                programming, algorithms, and problem-solving, eager to
                contribute innovative solutions to the tech industry.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-2xl font-semibold">Work & Experience</p>
          </div>
          <div className="flex gap-10 mt-5">
            <p className="w-fit px-3 py-1 h-fit text-buttongreen bg-bggreen1 rounded-full">
              U
            </p>
            <div className="flex flex-col gap-4">
              <p className="bg-textbg1 rounded-full px-3 py-1 w-fit">
                2019-2022
              </p>
              <p>UX Designer</p>
              <p className="text-buttongreen">Dropbox</p>
              <p className="text-lightgray">
                Fine Arts graduate with a strong foundation in diverse artistic
                mediums, combining technical skills with a keen creative vision.
                Adept at conveying emotions and ideas through visual
                storytelling.
              </p>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <p className="w-fit px-3 py-1 h-fit text-buttongreen bg-bggreen1 rounded-full">
              C
            </p>
            <div className="flex flex-col gap-4">
              <p className="bg-textbg1 rounded-full px-3 py-1 w-fit">
                2006-2009
              </p>
              <p>Computer Science</p>
              <p className="text-buttongreen">Harvartd University</p>
              <p className="text-lightgray">
                Computer Science graduate with a solid foundation in
                programming, algorithms, and problem-solving, eager to
                contribute innovative solutions to the tech industry.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-2xl font-semibold">Awards</p>
          </div>
          <div className="flex gap-10 mt-5">
            <p className="w-fit px-3 py-1 h-fit text-buttongreen bg-bggreen1 rounded-full">
              P
            </p>
            <div className="flex flex-col gap-4">
              <p className="bg-textbg1 rounded-full px-3 py-1 w-fit">2021</p>
              <p>Professional Design</p>
              <p className="text-lightgray">
                Received a prestigious award in recognition of our outstanding
                work.
              </p>
            </div>
          </div>
          <div className="flex gap-10 mt-5">
            <p className="w-fit px-3 py-1 h-fit text-buttongreen bg-bggreen1 rounded-full">
              C
            </p>
            <div className="flex flex-col gap-4">
              <p className="bg-textbg1 rounded-full px-3 py-1 w-fit">2022</p>
              <p>Creative Design</p>
              <p className="text-lightgray">
                I've received an award for my Creative Design work! Grateful for
                the recognition and excited to continue pushing the boundaries
                of creativity
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutFreelancer;
