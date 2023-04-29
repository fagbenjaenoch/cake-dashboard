import React, { useState } from "react";
import Tab from "./Tab";

const Tabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabCLick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      {tabs.map((tab, index) => {
        <Tab
          key={index}
          title={tab.title}
          active={index === activeTabIndex}
          onClick={() => handleTabCLick(tab.index)}
          index={index}
          Icon={tab.icon}
        />;
      })}
      {console.log(tabs.length)}

      {[1, 2, 3, 4, 5].map((_, index) => (
        <div key={index}>Hi</div>
      ))}
    </div>
  );
};

export default Tabs;
