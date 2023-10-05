import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postblog } from "../../../../redux/blogSlice";

const Blog = () => {
    const dispatch = useDispatch();
  const [viewAddBlog, setviewAddBlog] = useState(false);
  const [blogTitle,setBlogTitle] = useState("");
  const [blogcategory,setBlogCategory] = useState("");
  const [blogDescription,setBlogDescription] = useState("");

  const titlechange = (e) => {
    setBlogTitle(e.target.value);
  }
  const categorychange = (e) => {
setBlogCategory(e.target.value);
  }
  const descriptionchange = (e) => {
setBlogDescription(e.target.value);
  }

  const handlePostblog =() => {
      dispatch(postblog({title:blogTitle,category:blogcategory,description:blogDescription}));
      setviewAddBlog(false);

  }
  return (
    <div className="flex">
      <div className={` ${viewAddBlog ? "block" : "hidden"}`}>
        <div className="fixed left-0 top-0 z-50 bg-opacity-40 bg-black w-screen h-screen flex justify-center">
          <div className="fixed h-[70%] top-[15%]  flex flex-col gap-4 w-[60%] bg-white rounded-lg p-8 text-justify">
            <div className="w-full flex fixed left-[77%]">
              <i
                class="fa-solid fa-xmark text-2xl cursor-pointer"
                onClick={() => setviewAddBlog(false)}
              ></i>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-poppins font-bold text-xl text-buttongreen">
                  Make your Blog!
                </p>
              </div>
              <div className=" pt-[2rem] flex items-center gap-2 ">
                <p className="font-poppins font-semibold text-lg text-buttongreen">
                  Blog Title:
                </p>
                <input
                  placeholder="Title"
                  className="px-3 py-2 rounded-2xl border-lightgray2 border-[1px] w-[25rem] ml-[1.1rem]"
                  onChange={titlechange}
                ></input>
              </div>
              <div className=" flex items-center gap-2">
                <p className="font-poppins  font-semibold text-lg text-buttongreen ">
                  Category:
                </p>
                <input
                  placeholder="Category"
                  className="px-3 py-2 rounded-2xl border-lightgray2 border-[1px] w-[17rem] ml-[1.3rem]"
                  onChange={categorychange}
                ></input>
              </div>
              <div className=" flex items-center gap-2">
                <p className="font-poppins font-semibold text-lg text-buttongreen ">
                  Description:
                </p>
                <textarea
                  className="border-gray rounded-2xl border-[1px] w-full h-[10rem] resize-none py-3 px-5"
                  onChange={descriptionchange}
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
              <button className=" px-7 py-2 rounded-2xl bg-buttongreen text-white font-poppins text-lg" onClick={handlePostblog}>
                Post blog
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer flex flex-col gap-3 justify-center items-center w-[18rem] h-[18rem] border-[1px] border-dashed border-lightgray bg-dimgray "
        onClick={() => setviewAddBlog(true)}
      >
        <div className="">
          <svg
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            class="CreateModulePrompt-addIcon-xq2 text-[#0057ff] w-[5rem] z-1 bg-[#dee8ff] p-6 rounded-full"
          >
            <path
              fill="currentcolor"
              d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z"
            ></path>
          </svg>
        </div>
        <div className=" border- border-lightgray border-[1px] rounded-full py-2 px-4 bg-white">
          <p className="font-poppins font-semibold">Add your 1st Blog NOW!</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
