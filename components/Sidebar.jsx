import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import {
  TbRectangle,
  TbCircle,
  TbTriangle,
  TbSettings,
  TbPaperclip,
  TbMoneybag,
} from "react-icons/tb";

import SearchBar from "./SearchBar";
import Tabs from "./Tabs";
import { sideBarTabs } from "@/data/sidebarTabs";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed h-screen bg-black border-r-gray p-4 text-white shadow-xl text-sm">
        <div className="mb-4">
          <span className="text-extrabold text-lg">Cake </span>
          <span className="text-gray-500 text-sm">Dashboard</span>
        </div>
        <SearchBar />
        <span className="text-gray-500 mb-4">Menu</span>

        <Tabs tabs={sideBarTabs} />
        {/* <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg mb-2 group relative">
        <div className="hidden group-hover:block absolute bg-white py-2 px-0.5 rounded-lg left-0 mr-12"></div>
        <TbRectangle size={25} />
        <div className="w-full flex items-center justify-between">
          <div>Overview</div>
          <AiOutlineDown className="cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg mb-2">
        <TbRectangle size={25} />
        <div className="w-full flex items-center justify-between">
          <div>Transactions</div>
          <AiOutlineDown className="cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg mb-2">
        <TbCircle size={25} />
        <div className="w-full flex items-center justify-between">
          <div>Schedule Alerts</div>
          <AiOutlineDown className="cursor-pointer" />
        </div>
      </div>

      <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg mb-2">
        <TbTriangle size={25} />
        <div className="w-full flex items-center justify-between">
          <div>Cashstack</div>
          <AiOutlineDown className="cursor-pointer" />
        </div>
      </div>

      <div className="border-t border-gray-800 py-2">
        <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg">
          <TbMoneybag size={25} />
          <div className="w-full flex items-center justify-between">
            <div>Finances</div>
            <AiOutlineDown className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-2">
        <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg">
          <TbPaperclip size={25} />
          <div className="w-full flex items-center justify-between">
            <div>Contracts</div>
            <AiOutlineDown className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-2">
        <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg">
          <TbSettings size={25} />
          <div className="w-full flex items-center justify-between">
            <div>Settings</div>
            <div className="bg-white px-3 text-black font-bold rounded-full text-sm">
              2
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-2">
        <div className="flex gap-5 items-center text-gray-500 hover:text-white cursor-pointer hover:bg-gray-900 p-2 rounded-lg">
          <TbCircle size={25} />
          <div className="w-full flex items-center justify-between">
            <div>Status</div>
            <AiOutlineDown className="cursor-pointer" />
          </div>
        </div> */}
      </div>
      <main className="ml-[13.6rem] w-full bg-gray-200 h-screen">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
