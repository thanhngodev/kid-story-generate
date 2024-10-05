import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="p-5 bg-primary text-white flex justify-between items-center text-center md:p-8 rounded-[20px]">
      <h2 className="font-bold text-2xl md:text-4xl ">My Stories</h2>
    </div>
  );
};

export default DashboardHeader;
