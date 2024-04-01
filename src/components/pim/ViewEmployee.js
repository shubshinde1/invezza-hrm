import React, { useState } from "react";
import View from "./View";
import Attendance from "./Attendance";
import attendanceData from "./leaveData.json";

export default function ViewEmployee() {
  const [activeTab, setActiveTab] = useState("view");
  const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEmployeeSelect = (employeeId) => {
    // Find the selected employee data from the leaveData.json file
    const employee = attendanceData.find(
      (employee) => employee.id === employeeId
    );
    setSelectedEmployeeData(employee);
  };

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
            <View onEmployeeSelect={handleEmployeeSelect} />
          </div>
        )}
        {activeTab === "attendance" && selectedEmployeeData && (
          <div id="attendance" className="">
            <Attendance data={selectedEmployeeData} />
          </div>
        )}
      </div>
    </div>
  );
}
