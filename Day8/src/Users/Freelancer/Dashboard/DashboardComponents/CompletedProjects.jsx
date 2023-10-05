import React from 'react'

const CompletedProjects = () => {
  return (
    <div className="flex">
      <div className="cursor-pointer flex flex-col gap-3 justify-center items-center w-[18rem] h-[18rem] border-[1px] border-dashed border-lightgray bg-dimgray ">
        <div className="">
          <svg
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            class="CreateModulePrompt-addIcon-xq2 text-[#0057ff] w-[5rem] z-1 bg-[#dee8ff] p-6 rounded-full"
          >
            <path 
            fill="currentcolor"
            d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z"></path>
          </svg>
        </div>
        <div className=" border- border-lightgray border-[1px] rounded-full py-2 px-4 bg-white">
            <p className="font-poppins font-semibold">Get started with projects!</p>
        </div>
      </div>
    </div>
  )
}

export default CompletedProjects