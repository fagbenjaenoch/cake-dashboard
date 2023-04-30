import React, { useState } from "react";
import {
  TbApple,
  TbHeadset,
  TbNotification,
  TbSearch,
  TbWindow,
} from "react-icons/tb";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-4 flex flex-row items-center justify-between text-black bg-white">
      <div className="block">
        <h1 className="text-xl font-bold">Welcome, Josiah 🎉</h1>
        <p className="text-sm">
          Here&apos;s what happening in your Cake account today
        </p>
      </div>
      <div className="hidden lg:flex lg:flex-row items-center gap-5">
        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
          <TbSearch className="text-gray-300" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none bg-transparent"
            placeholder="Search a transaction"
          />
          <button className="bg-white p-1 rounded-lg font-semibold flex flex-row items-center gap-1">
            <TbWindow /> Search
          </button>
        </div>
        <button>
          <TbNotification size={20} />
        </button>
        <button>
          <TbHeadset size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
