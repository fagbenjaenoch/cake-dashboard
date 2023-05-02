import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import {
  TbRectangle,
  TbCircle,
  TbTriangle,
  TbSettings,
  TbPaperclip,
  TbMoneybag,
  TbLogout,
  TbDotsVertical,
} from "react-icons/tb";

import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Tabs from "./Tabs";
import { sideBarTabs } from "@/data/sidebarTabs";
import { FaMale, FaPrescription } from "react-icons/fa";

const Sidebar = ({ children }) => {
  return (
    <div className="">
      <div className="fixed w- h-screen bg-black border-r-gray p-4 text-white shadow-xl text-sm flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <div className="mb-4">
            <span className="text-extrabold text-lg">Cake </span>
            <span className="text-gray-500 text-sm">Dashboard</span>
          </div>
          <SearchBar />
          <div>
            <span className="text-gray-500 mb-4">Menu</span>
            <Tabs tabs={sideBarTabs} />
          </div>
        </div>
        <div>
          <span className="text-gray-500 mb-4">Profile</span>
          <div className="flex flex-row items-center justify-between mb-4">
            <FaMale size={25} />
            <div className="flex flex-col gap-0 items-center">
              <span className="text-white font-bold text-[0.9rem]">
                Josiah Daniels
              </span>
              <span className="text-gray-600 text-[0.75rem]">
                Product Designer
              </span>
            </div>
            <TbDotsVertical className="cursor-pointer" />
          </div>
          <div className=" flex gap-1 items-center bg-gray-900 hover:bg-gray-800 cursor-pointer p-2 rounded-lg">
            <TbLogout size={25} />
            <span className="ml-4">Log out</span>
          </div>
        </div>
      </div>

      <main className="ml-[232px] w-ful bg-gray-200 h-screen">{children}</main>
    </div>
  );
};

export default Sidebar;
