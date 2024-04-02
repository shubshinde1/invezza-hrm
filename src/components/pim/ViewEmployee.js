import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import View from "./View";
import Attendance from "./Attendance";
import { useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [activeTab, setActiveTab] = useState("view");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const { empid } = useParams();
  // console.log("Employee ID:", empid);

  return (
    <div className="">
      <div className="bg-white rounded-md p-2 sticky top-0 mb-2">
        <ul className="flex gap-2">
          <li
            className={`text-sm px-3 py-1.5 rounded-md ${
              activeTab === "view"
                ? "bg-[#5336FD] text-white font-bold"
                : "bg-sky-50"
            }`}
            onClick={() => handleTabChange("view")}
          >
            <div className="cursor-pointer" activeClassName="bg-gray-200">
              View
            </div>
          </li>
          <li
            className={`text-sm px-3 py-1.5 rounded-md ${
              activeTab === "attendance"
                ? "bg-[#5336FD] text-white font-bold"
                : "bg-sky-50"
            }`}
            onClick={() => handleTabChange("attendance")}
          >
            <div className="cursor-pointer" activeClassName="bg-gray-200">
              Attendance
            </div>
          </li>
        </ul>
      </div>
      <div>
        {activeTab === "view" && (
          <div id="view" className="">
            <View />
          </div>
        )}
        {activeTab === "attendance" && (
          <div id="attendance" className="">
            <Attendance empid={empid} />
          </div>
        )}
      </div>
    </div>
  );
}
