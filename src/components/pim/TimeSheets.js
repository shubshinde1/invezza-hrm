import React from "react";
import empdata from "./leaveData.json";
import { useParams } from "react-router-dom";

const data = empdata;

export default function TimeSheets() {
  const { empid } = useParams();
  // Filter the data array to find the matching employee data
  const employeeData = data.filter((emp) => emp.empid === empid);

  console.log(employeeData);

  // Check if there's any matching employee data
  if (employeeData.length === 0) {
    return <div>No data found for employee with ID {empid}</div>;
  }

  // Access the property you want to render directly
  const leave0From = employeeData[0].attendance.leave0.from;
  const date = new Date(leave0From);
  console.log(typeof date);

  return <div>{leave0From}</div>;
}
