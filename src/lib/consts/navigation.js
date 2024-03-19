import { FaDoorOpen, FaAddressBook } from "react-icons/fa";
import { MdSpaceDashboard, MdLocalPolice } from "react-icons/md";
import { IoCalendar, IoPersonAdd } from "react-icons/io5";
import { FaClipboardUser } from "react-icons/fa6";
import { SiTask } from "react-icons/si";
import { RiShieldUserFill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <MdSpaceDashboard />,
  },
  {
    key: "Pim",
    label: "PIM",
    path: "/pim",
    icon: <BsPeopleFill />,
    subItems: [
      {
        key: "employeelist",
        label: "Employee List",
        path: "/pim/employeelist",
        icon: <FaAddressBook />,
      },
      {
        key: "employee",
        label: "Add Employee",
        path: "/pim/addemployee",
        icon: <IoPersonAdd />,
      },
    ],
  },
  {
    key: "leave",
    label: "Leave",
    path: "/leave",
    icon: <FaDoorOpen />,
  },
  {
    key: "attendance",
    label: "Attendance",
    path: "/attendance",
    icon: <IoCalendar />,
  },
  {
    key: "myprofile",
    label: "My Profile",
    path: "/myprofile",
    icon: <FaClipboardUser />,
  },
  {
    key: "task",
    label: "Task",
    path: "/task",
    icon: <SiTask />,
  },
  {
    key: "admin",
    label: "Admin",
    path: "/admin",
    icon: <RiShieldUserFill />,
  },
  {
    key: "claim",
    label: "Claim",
    path: "/claim",
    icon: <MdLocalPolice />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  //   {
  //     key: "setting",
  //     label: "Settings",
  //     path: "/setting",
  //     icon: <RiSettingsFill />,
  //   },
  //   {
  //     key: "logout",
  //     label: "Log out",
  //     path: "/logout",
  //     icon: <IoExit />,
  //   },
];
