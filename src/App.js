// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
