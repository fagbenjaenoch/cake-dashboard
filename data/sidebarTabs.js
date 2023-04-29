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
  },
  {
    title: "Cashstack",
    icon: <TbTriangle size={25} />,
  },
  {
    title: "Finances",
    icon: <TbMoneybag size={25} />,
  },
  {
    title: "Contracts",
    icon: <TbPaperclip size={25} />,
  },
  {
    title: "Settings",
    icon: <TbSettings size={25} />,
  },
  {
    title: "Status",
    icon: <TbRectangle size={25} />,
  },
];
