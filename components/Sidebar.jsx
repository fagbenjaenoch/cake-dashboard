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
import Dropdown from "./Dropdown";
import Tabs from "./Tabs";
import { sideBarTabs } from "@/data/sidebarTabs";

const Sidebar = ({ children }) => {
  return (
    <div className="">
      <div className="fixed h-screen bg-black border-r-gray p-4 text-white shadow-xl text-sm">
        <div className="mb-4">
          <span className="text-extrabold text-lg">Cake </span>
          <span className="text-gray-500 text-sm">Dashboard</span>
        </div>
        <SearchBar />
        <span className="text-gray-500 mb-4">Menu</span>

        <Tabs tabs={sideBarTabs} />
      </div>

      <main className="ml-[13.6rem] w-ful bg-gray-100 h-screen">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
