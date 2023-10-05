import React from "react";
import MembershipPlans from "../../data/MembershipPlans";

const Layout8 = () => {
  return (
    <div className="w-full mt-[10rem]">
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <p className="font-bold text-3xl font-poppins">Membership Plans</p>
        <p className="text-lightgray">Pick the most suitable option</p>
      </div>
      <div>
        <div className="flex  gap-10 px-10  my-[4rem]">
          {MembershipPlans.map((membership, index) => (
            <div className="border-gray border-[2px] px-4 py-[4rem] items-center flex flex-col gap-3">
              <p className="font-bold text-3xl">${membership.price}</p>
              <p className="font-semibold text-2xl">{membership.plan} Plan</p>
              <p className="text-center mb-[2rem]">
                One time fee for one listing or task highlighted in search
                results.
              </p>
              <p>{membership.listing}Listing</p>
              <p>{membership.visibility}Days Visibility</p>
              <p>Highlighted in Search Results</p>
              <p>{membership.revisions}Revisions</p>
              <p>9 days Delivery Time</p>
              <p>Support 24/7</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout8;
