import React from "react";
import Navbar from "../components/Navbar";
import BlogData from "../data/BlogData";
import admin from "../Assets/default-avatar.png";
import Footer from "./HomeComponents/Footer";
import { useSelector } from "react-redux";
import { selectBlog } from "../redux/blogSlice";
import blog7 from "../Assets/blog7.jpg";

const Blog = () => {
  const firstThreeProperties = BlogData.slice(0, 3);
  const blogdata = useSelector(selectBlog);
  console.log(blogdata);
  return (
    <div className="w-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <p className="pl-[5rem] py-[3rem] font-poppins text-3xl font-bold">
          Blog
        </p>
      </div>
      <div className="w-screen flex gap-[5%] justify-start px-[5%]">
        <div className="w-[250%]">
          <div className=" grid gap-[7rem]">
            {BlogData.map((blogs, index) => (
              <div className="flex gap-[5%]">
                <div className="w-[18.5rem]">
                  <img
                    alt=""
                    src={blogs.image}
                    className="w-[18.5rem] rounded-tl-xl rounded-bl-xl rounded-br-xl hover:scale-105 duration-150"
                  ></img>
                </div>
                <div className=" flex flex-col gap-7 w-[70%] py-[5%]">
                  <p className="text-lightgray">{blogs.category}</p>
                  <p className="text-2xl font-poppins font-semibold hover:scale-105 hover:text-buttongreen hover:underline hover:decoration-buttongreen">
                    {blogs.title}
                  </p>
                  <p className="line-clamp-3">{blogs.data}</p>
                  <div className="flex items-center gap-5 pt-[2rem]">
                    <div>
                      <img src={admin} className="w-[3rem]" alt=""></img>
                    </div>
                    <div>
                      <p className="font-semibold">Admin</p>
                      <p>September 7, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="mb-[10rem]">
            {blogdata != null ? (
              <div className="flex gap-[5%]">
                <div className="w-[18.5rem]">
                  <img
                    alt=""
                    src={blog7}
                    className="w-[18.5rem] rounded-tl-xl rounded-bl-xl rounded-br-xl hover:scale-105 duration-150"
                  ></img>
                </div>
                <div className=" flex flex-col gap-7 w-[70%] py-[5%]">
                  <p className="text-lightgray">{blogdata.category}</p>
                  <p className="text-2xl font-poppins font-semibold hover:scale-105 hover:text-buttongreen hover:underline hover:decoration-buttongreen">
                    {blogdata.title}
                  </p>
                  <p className="line-clamp-3">{blogdata.description}</p>
                  <div className="flex items-center gap-5 pt-[2rem]">
                    <div>
                      <img src={admin} className="w-[3rem]" alt=""></img>
                    </div>
                    <div>
                      <p className="font-semibold">Admin</p>
                      <p>September 7, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            </div>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-7">
          <div>
            <input
              placeholder="Search"
              className="px-5 border-[1px] border-lightgray2  py-2 w-full"
            ></input>
          </div>
          <div className="px-5 border-[1px] border-lightgray2  py-2 w-full flex flex-col gap-3">
            <p className="font-semibold font-poppins text-lg">Categories</p>
            <div className="font-light flex flex-col gap-2">
              <p className="hover:text-buttongreen hover:underline hover:decoration-buttongreen hover:scale-105">
                App Developer
              </p>
              <p className="hover:text-buttongreen hover:underline hover:decoration-buttongreen hover:scale-105">
                Digital Marketing
              </p>
              <p className="hover:text-buttongreen hover:underline hover:decoration-buttongreen hover:scale-105">
                Freelancer
              </p>
              <p className="hover:text-buttongreen hover:underline hover:decoration-buttongreen hover:scale-105">
                Graphics Design
              </p>
              <p className="hover:text-buttongreen hover:underline hover:decoration-buttongreen hover:scale-105">
                Video & Audio
              </p>
              <p className="hover:text-buttongreen hover:underline hover:decoration-buttongreen hover:scale-105">
                Music & Audio
              </p>
            </div>
          </div>
          <div className="px-5 border-[1px] border-lightgray2  py-2 w-full flex flex-col gap-3">
            <div>
              <p className="font-semibold font-poppins text-lg">Recent Posts</p>
            </div>
            <div className="grid gap-4">
              {firstThreeProperties.map((blogs, index) => (
                <div className="flex items-center gap-2 justify-evenly">
                  <div>
                    <img
                      src={blogs.image}
                      className="w-[4rem] h-[4rem] rounded-xl"
                      alt=""
                    ></img>
                  </div>
                  <div className="w-[12rem]">
                    <p className=" line-clamp-1">{blogs.title}</p>
                    <p className="font-light text-sm">September 7, 2023</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
