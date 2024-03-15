import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col xl:flex-row w-full xl:space-x-8">
      <div className="border-2 py-6 px-4 bg-white text-black flex justify-between items-center lg:items-end pb-14 rounded-lg w-full mb-8">
        <div className="flex flex-col">
          <h3 className="text-3xl font-medium mb-1">{0} BABYGECKO</h3>
          <span className="font-semibold">Your total Staked Token</span>
        </div>
      </div>
      <div className="border-2 py-6 px-4 bg-white text-black flex justify-between items-center lg:items-end pb-14 rounded-lg w-full mb-8 flex-col lg:flex-row">
        <div className="flex flex-col mb-4 lg:mb-0">
          <h3 className="text-3xl font-medium mb-1">0.0000 USDT</h3>
          <span className="font-semibold">Total Reward</span>
        </div>
        <button className="p-3 bg-[#4c1f14] text-white rounded-md w-80">Claim Reward</button>
      </div>
    </div>
  );
}
