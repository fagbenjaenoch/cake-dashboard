import {
  TbRectangle,
  TbCircle,
  TbTriangle,
  TbSettings,
  TbPaperclip,
  TbMoneybag,
} from "react-icons/tb";

export const sideBarTabs = [
  {
    title: "Overview",
    icon: <TbRectangle size={25} />,
    isDropDown: true,
    array: [{ title: "Transactions", icon: <TbRectangle size={20} /> }],
  },
  {
    title: "Cashstack",
    icon: <TbTriangle size={25} />,
    isDropDown: false,
  },
  {
    title: "Finances",
    icon: <TbMoneybag size={25} />,
    isDropDown: false,
  },
  {
    title: "Contracts",
    icon: <TbPaperclip size={25} />,
    isDropDown: false,
  },
  {
    title: "Settings",
    icon: <TbSettings size={25} />,
    isDropDown: false,
  },
  {
    title: "Status",
    icon: <TbRectangle size={25} />,
    isDropDown: false,
  },
];
