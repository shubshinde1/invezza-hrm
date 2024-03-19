import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";
import Myprofile from "./components/Myprofile";
import Admin from "./components/Admin";
import Task from "./components/Task";
import Leave from "./components/Leave";
import Claim from "./components/Claim";
import Login from "./components/Login";
import Pim from "./components/Pim";
import Employeelist from "./components/pim/Employeelist";
import Addemployee from "./components/pim/Addemployee";
import EditEmployee from "./components/pim/EditEmployee";
import ViewEmployee from "./components/pim/ViewEmployee";
// import StickyHeadTable from "./components/pim/Employeelist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="leave" element={<Leave />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="myprofile" element={<Myprofile />} />
          <Route path="Task" element={<Task />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Claim" element={<Claim />} />
          <Route path="Pim" element={<Pim />} />
          <Route path="pim/employeelist" element={<Employeelist />} />
          <Route path="pim/addemployee" element={<Addemployee />} />
          {/* <Route exact path="/" Component={<StickyHeadTable />} /> */}
          {/* <Route path="/pim/edit/:empid" element={<EditEmployee />} /> */}
          <Route
            path="/pim/edit/:empid/:ename/:designation/:jdate/:status"
            element={<EditEmployee />}
          />
          <Route
            path="/pim/view/:empid/:ename/:designation/:jdate/:status"
            element={<ViewEmployee />}
          />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
