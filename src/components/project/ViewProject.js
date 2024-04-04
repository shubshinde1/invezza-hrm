import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../client/MasterClientsProjects.json";

export default function ViewProject() {
  const { projectId } = useParams();

  // Find the project that matches the projectId from the URL parameter
  const project = projectData
    .flatMap((client) => client.projects)
    .find((project) => project.projectid === parseInt(projectId));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-white dark:bg-neutral-950 dark:text-white p-4 rounded-md">
      <h2>Project Details</h2>
      <p>Project ID: {projectId}</p>
      <p>Project Name: {project.projectname}</p>
      <p>Received Date: {project.receiveddate}</p>
      <p>Deadline: {project.deadline}</p>
      <p>Remark: {project.remark}</p>
      <p>Associate: {project.associate}</p>
      <p>Status: {project.status}</p>
      <p>Client ID: {project.clientid}</p>
      <p>Business Name: {project.businessname}</p>
      {/* Render other project details as needed */}
    </div>
  );
}
