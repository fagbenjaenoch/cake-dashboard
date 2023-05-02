import React, { useState } from "react";
import TabIndicator from "./TabIndicator";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const Dropdown = ({ title, active, Icon, array, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg mb-2 relative ${
          isOpen ? "bg-gray-900" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {active && <TabIndicator />}
        {Icon}
        <div className="w-full flex items-center justify-between">
          <div>{title}</div>
          {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {isOpen &&
        array.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 px-4 text-[0.7rem] rounded-lg mb-2 relative"
            >
              {item.icon}
              <div className="w-full flex items-center justify-between">
                <div>{item.title}</div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Dropdown;
