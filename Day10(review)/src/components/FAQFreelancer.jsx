import React, { useState } from "react";
import { close } from "../redux/FooterSlice";
import { useDispatch } from "react-redux";
import FAQFreelancerData from "../data/FAQFreelancerData";

const FAQFreelancer = () => {
  const dispatch = useDispatch();
  const [viewqus, setviewqus] = useState("");
  return (
    <div className="fixed left-0 top-0 z-50 bg-opacity-40 bg-black w-screen h-screen flex justify-center">
      <div className="fixed h-[90%] top-[5%]  flex flex-col gap-4 w-[70%] bg-white rounded-lg p-8 overflow-y-scroll text-justify">
        <div className="w-full flex fixed left-[82%]">
          <i
            class="fa-solid fa-xmark text-2xl cursor-pointer"
            onClick={() => dispatch(close({ viewFAQFreelancer: "false" }))}
          ></i>
        </div>
        <div className="">
          <p className="text-bggreen font-poppins font-semibold text-2xl">
            FAQ Freelancer
          </p>
        </div>

        <div className="flex flex-col gap-2 pr-5">
          {FAQFreelancerData.map((faq, index) => (
            <div
              className={`w-full border-[1px] px-10 rounded-lg ${viewqus === faq.id ? "border-bggreen my-[-8px] py-4" : "border-lightgreen py-2"}`}
              onClick={() => setviewqus(faq.id)}
            >
              <div className="flex gap-2">
                <p className="text-bggreen font-semibold">Q{faq.id}.</p>
                <p className="text-bggreen font-semibold">{faq.qus}</p>
              </div>
              <div>
                {faq.id === 13 ? (
                  <p
                    className={`${
                      viewqus === faq.id ? "" : "line-clamp-1"
                    }  px-5`}
                  >
                    For any questions, issues, or support needs, you can reach
                    out to our customer support team via the in-app support
                    feature or contact us at{" "}
                    {
                      <span className="underline text-blue">
                        freelancersupport@gmail.com
                      </span>
                    }
                    .
                  </p>
                ) : (
                  <p
                    className={`${
                      viewqus === faq.id ? "" : "line-clamp-1"
                    }  px-5`}
                  >
                    {faq.ans}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQFreelancer;
