import React from "react";
// import { , useRouteMatch } from "react-router-dom";
import {
  BrowserRouter as useRouteMatch,
  Route,
  Routes,
} from "react-router-dom";
import Employeelist from "./pim/Employeelist";
import Addemployee from "./pim/Addemployee";

export default function Pim() {
  const match = useRouteMatch("/pim");

  return (
    <div className="">
      <Employeelist />
      <Routes>
        <Route path="/pim" render={() => <Addemployee match={!!match} />} />
      </Routes>
    </div>
  );
}
