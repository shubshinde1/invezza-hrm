import React from "react";
import Menutabs from "./Menutabs";
import Newempform from "./Newempform";

export default function AddEmployee({ match }) {
  return (
    <div className="flex flex-col md:h-[88vh]  mb-2">
      {!match && <Menutabs />}
      <Newempform />
    </div>
  );
}
