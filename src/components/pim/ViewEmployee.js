import React from "react";
import { useParams } from "react-router-dom";
import MenuTabs from "./Menutabs";

export default function ViewEmployee() {
  const { empid, ename, designation, jdate, status } = useParams();

  return (
    <div>
      <MenuTabs />
      <h1>View Employee</h1>
      <p>Employee ID: {empid}</p>
      <p>Name: {decodeURIComponent(ename)}</p>
      <p>Designation: {decodeURIComponent(designation)}</p>
      <p>Joining Date: {decodeURIComponent(jdate)}</p>
      <p>Status: {decodeURIComponent(status)}</p>
    </div>
  );
}
