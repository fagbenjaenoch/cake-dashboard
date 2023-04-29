"use client";

import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const TabIndicator = () => {
  return (
    <div className="absolute bg-white py-2 px-0.5 rounded-lg left-0 mr-12"></div>
  );
};

const Tab = ({ title, active, onClick, index, Icon }) => {
  return (
    <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg mb-2 relative">
      {active && <TabIndicator />}
      {Icon}
      <div className="w-full flex items-center justify-between">
        <div>{title}</div>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default Tab;
