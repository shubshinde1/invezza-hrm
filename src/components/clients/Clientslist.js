import React from "react";
import Clientscards from "./ClientCard";
import clientData from "./MasterClientsProjects.json";

export default function App() {
  return (
    <div>
      {/* <h1>Clients List</h1> */}
      <Clientscards clients={clientData} />
    </div>
  );
}
