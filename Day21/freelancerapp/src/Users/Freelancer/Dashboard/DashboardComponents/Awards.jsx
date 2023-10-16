import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FreelancerService from '../../../../service/FreelancerService';

const Awards = () => {
  const [addview, setAddview] = useState(false);
  const logeduser = localStorage.getItem("userdata");
  const userobject = JSON.parse(logeduser);
  const handleawardsadd = () => {
    setAddview(true);
  };

  const [awards, setAwards] = useState({
    title: "",
    receiveddate: "",
    customizeddescription: "",
  });

  const handleawardschange = (event) => {
    const propertyName = event.target.name;

    const propertyValue = event.target.value;
    setAwards({ ...awards, [propertyName]: propertyValue });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(
      `http://localhost:8080/api/v1/freelancerauth/savefreelancerawards?id=${userobject.id}`,
      awards
    );

    await FreelancerService.getById(localStorage.getItem('userid'))
      .then((response) => {
        localStorage.setItem("userdata", JSON.stringify(response.data));
      });

    setAddview(false);
  };

  const getuser = async()=>{
    await FreelancerService.getById(localStorage.getItem('userid')).then((response)=>{
      localStorage.setItem("userdata",JSON.stringify(response.data))})
  }
  useEffect(() => {
    getuser();
  }, []);
  return (
    <div className="w-full">
      <div
        className={`${
          addview ? "block" : "hidden"
        } fixed top-0 left-0  bg-opacity-50 z-10 bg-black w-screen h-screen `}
      >
        <div
          className={`   fixed top-[43%] left-[47%] bg-white w-[40rem] p-3 rounded-lg`}
        >
          <div className="w-full flex fixed left-[87%]">
          <i
            class="fa-solid fa-xmark text-2xl"
            onClick={() => setAddview(false)}
          ></i>
        </div>
          <div className="">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <div>
                <p className="font-poppins font-semibold text-lg">
                  Add Your Award Detail
                </p>
              </div>
              <div className="flex gap-10">
                <div className="flex items-center gap-[4.5rem]">
                  {" "}
                  <p>Title</p>{" "}
                  <input
                    placeholder="title"
                    name="title"
                    className="px-2 py-1 border-gray border-[2px] rounded-md"
                    onChange={handleawardschange}
                    required
                  ></input>
                </div>
                <div className="flex items-center gap-3">
                  {" "}
                  <p>Received Date</p>{" "}
                  <input
                    placeholder="receivedDate"
                    name="receiveddate"
                    className="px-2 py-1 border-gray border-[2px] rounded-md"
                    onChange={handleawardschange}
                    required
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {" "}
                <p>Customized Description</p>{" "}
                <textarea
                  placeholder="customizedDescription"
                  name="customizeddescription"
                  className="px-2 py-1 border-gray border-[2px] rounded-md w-full h-[10rem]"
                  onChange={handleawardschange}
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
          <p className="text-2xl font-semibold">Awards</p>
          <button
            className="bg-bgblue rounded-full px-3 py-1 cursor-pointer"
            onClick={handleawardsadd}
          >
            add
          </button>
        </div>
        <div className="overflow-y-scroll w-full h-[37rem]">
          {userobject?.awards?.map((award, index) => {
            return (
              <div className="flex gap-10 mt-5">
                <p className="px-3 py-1 h-fit text-buttongreen bg-bggreen1 rounded-full">
                {award.title.slice(0,1)}
                </p>
                <div className="flex flex-col gap-4">
                  <p className="bg-textbg1 rounded-full px-3 py-1 w-fit">
                    {award.receiveddate}
                  </p>
                  <p>
                    {award.title}
                  </p>
                  <p className="text-lightgray">{award.customizeddescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Awards