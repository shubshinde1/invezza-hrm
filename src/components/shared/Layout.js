import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="px-2 overflow-scroll h-[98vh] scrollbar-hide">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
