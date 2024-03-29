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
        <div className="bg-sky-50 flex justify-center items-center h-screen">
          <button
            onClick={(e) => loginWithRedirect()}
            className="bg-blue-600 px-5 py-2 rounded-md text-white font-bold hover:scale-105"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default App;
