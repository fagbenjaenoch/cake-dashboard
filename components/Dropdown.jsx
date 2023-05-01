import React, { useState } from "react";
import TabIndicator from "./TabIndicator";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const Dropdown = ({ title, active, Icon, array }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg mb-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {active && <TabIndicator />}
        {Icon}
        <div className="w-full flex items-center justify-between">
          <div>{title}</div>
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {isOpen && (
        <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 px-4 text-[0.7rem] rounded-lg mb-2 relative">
          {Icon}
          <div className="w-full flex items-center justify-between">
            <div>{title}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
