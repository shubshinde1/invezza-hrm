import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Myprofile from "./components/Myprofile";
import Admin from "./components/Admin";
import Task from "./components/Task";
import Leave from "./components/Leave";
import Claim from "./components/Claim";
import Login from "./components/Login";
import Pim from "./components/Pim";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Employeelist from "./components/pim/Employeelist";
import Addemployee from "./components/pim/Addemployee";
import EditEmployee from "./components/pim/EditEmployee";
import ViewEmployee from "./components/pim/ViewEmployee";
import Attendance from "./components/pim/Attendance";
import Addclient from "./components/client/Addclient";
import ViewProjects from "./components/client/ViewProjects";
import Addproject from "./components/projects/Addproject";
import Loginimg from "../src/assets/images/login.svg";
import logo from "../src/assets/images/invezza-logo.png";

function App() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <Router>
          <Routes>
            {/* <Route index element={<Login />} /> */}

            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="leave" element={<Leave />} />
              <Route path="clients" element={<Clients />} />
              <Route path="projects" element={<Projects />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="myprofile" element={<Myprofile />} />
              <Route path="Task" element={<Task />} />
              <Route path="Admin" element={<Admin />} />
              <Route path="Claim" element={<Claim />} />
              <Route path="Pim" element={<Pim />} />
              <Route path="pim/employeelist" element={<Employeelist />} />
              <Route path="pim/addemployee" element={<Addemployee />} />
              <Route path="pim/attendance" element={<Attendance />} />
              <Route
                path="/pim/edit/:empid/:ename/:designation/:jdate/:status"
                element={<EditEmployee />}
              />
              <Route
                path="/pim/view/:empid/:ename/:designation/:jdate/:status"
                element={<ViewEmployee />}
              />
              <Route path="projects/viewprojects" element={<ViewProjects />} />
              <Route path="clients/addclient" element={<Addclient />} />
              <Route path="projects/addproject" element={<Addproject />} />
            </Route>
          </Routes>
        </Router>
      ) : (
        <div className="bg-sky-50 flex flex-col md:flex-row gap-28 md:gap-5 justify-center items-center h-[95vh] lg:h-[92vh] p-10 m-5 rounded-md ">
          <div className="w-full md:w-1/2 flex gap-10 md:items-start justify-center md:justify-start xl:px-28 flex-col">
            <div className="flex flex-col gap-5 items-center md:items-start justify-center text-center md:text-start">
              <img src={logo} className="md:w-2/3" />
              <h2 className="text-lg">Welcome To Invezza HRMS Portal</h2>
            </div>
            <button
              onClick={(e) => loginWithRedirect()}
              className="bg-blue-600 px-5 py-2 rounded-md text-white md:text-base font-bold hover:bg-blue-700 xl:w-1/5"
            >
              Login
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center  ">
            <img src={Loginimg} alt="Clientlogo" className="md:w-2/3 " />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
