"use client";

import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import TabIndicator from './TabIndicator'


const Tab = ({ title, active, onClick, index, Icon }) => {
  console.log(title);
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
