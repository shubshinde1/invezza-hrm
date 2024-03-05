import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuTabs = () => {
  const location = useLocation();

  return (
    <div className="bg-white rounded-md p-2 sticky top-0 mb-2 z-0">
      <ul className="flex gap-2">
        <li
          className={` text-sm px-3 py-1.5 rounded-md ${
            location.pathname === "/pim/employeelist"
              ? "bg-[#5336FD] text-white font-bold "
              : "clor"
          }`}
        >
          <NavLink to="/pim/employeelist" activeClassName="bg-gray-200">
            Employee List
          </NavLink>
        </li>
        <li
          className={` text-sm px-3 py-1.5 rounded-md ${
            location.pathname === "/pim/addemployee"
              ? "bg-[#5336FD] text-white font-bold"
              : "clor"
          }`}
        >
          <NavLink to="/pim/addemployee" activeClassName="bg-gray-200">
            Add Employee
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuTabs;
