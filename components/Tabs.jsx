import React, { useState } from "react";
import Tab from "./Tab";
import Dropdown from "./Dropdown";

const Tabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabCLick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="w-[200px]">
      {tabs.map((tab, index) => {
        if (tab.isDropDown) {
          return (
            <Dropdown
              key={index}
              title={tab.title}
              Icon={tab.icon}
              active={index === activeTabIndex}
              array={tab.array}
            />
          );
        }
        return (
          <Tab
            key={index}
            title={tab.title}
            active={index === activeTabIndex}
            onClick={() => handleTabCLick(tab.index)}
            index={index}
            Icon={tab.icon}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
