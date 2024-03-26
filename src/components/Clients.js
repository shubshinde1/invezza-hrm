import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientCard from "./client/ClientCard";
import Projects from "./Projects"; // Import the Projects component
import clientData from "./client/MasterClientsProjects.json"; // Import clientData

export default function Clients() {
  return (
    <Routes>
      {/* Pass clientData as a prop to the ClientCard component */}
      <Route path="/" element={<ClientCard client={clientData} />} />
      <Route path="/projects/:projectId" element={<Projects />} />
    </Routes>
  );
}
