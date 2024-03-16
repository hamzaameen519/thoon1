import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="text-center w-full lg:w-[22rem] bg-white text-black rounded-lg border-2 relative">
      <div className="ribbon ribbon-top-left">
        <span>LIVE</span>
      </div>

      <div className="p-6 font-medium">
        <div className="w-32 border-[] p-2 border-2 rounded-full overflow-hidden mb-5">
          <img className="w-full" src="https://i.pinimg.com/736x/9a/64/8a/9a648ac91d323b0931448ab34055f967.jpg" alt="" />
        </div>
        <div className="flex justify-between mb-4">
          <span>APY</span>
          <span>{600}%</span>
        </div>
        <div className="flex justify-between">
          <span>Lock Duration</span>
          <span>{60} Days</span>
        </div>

        <div className="flex items-center flex-col mt-10 mb-8 space-y-1">
          <span>Your Wallet</span>
          <span>{0} $BABYGECKO</span>
        </div>

        <div className="flex flex-col space-y-5">
          <input className="bg-[#242323] shadow-lg shadow-[#383838] rounded-md py-2 px-4 text-gray-400 text-lg font-normal placeholder-gray-500" placeholder="Enter BABYGECKO to Stake" />
          <button className="p-3 bg-[#4c1f14] text-white rounded-md">Stake</button>
        </div>
      </div>
      <hr />
      <p className="text-xs font-medium text-center pb-4">Stake $BABYGECKO Token and Earn 730% APY</p>
    </div>
  );
}
