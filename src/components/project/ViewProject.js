import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../client/MasterClientsProjects.json";
import { FaFolderOpen } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Projectimg from "../../assets/images/clientAvatar.png";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

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
    <div className="bg-white dark:bg-neutral-950 dark:text-white p-2 rounded-md mb-20">
      <div className="flex gap-2 items-center ">
        <div className="flex gap-2 items-center">
          <FaFolderOpen />
          <Link to="/projects" className="hover:text-blue-400">
            <h2>View Projects</h2>
          </Link>
        </div>
        {">"}
        <div>
          <p className="text-blue-400">{project.projectname}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-col lg:flex-row gap-2">
        <div className="bg-sky-50 dark:bg-neutral-900 lg:w-1/4 p-2 rounded-md flex flex-col gap-10">
          <div>
            <img src={Projectimg} className="rounded-md w-1/4 md:w-1/2" />
            <div className="mt-2">
              <div className="flex flex-col ">
                <p className="text-xl">{project.projectname}</p>
                <p>Id - {projectId}</p>
                <p>{project.businessname}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-fit bg-sky-100 dark:bg-neutral-950 p-2 rounded-md text-lg flex items-center gap-2 justify-center group">
              <FaGithub fontSize={20} className="group-hover:text-purple-900" />
            </button>
            <button className="w-fit bg-sky-100 dark:bg-neutral-950 p-2 rounded-md text-lg flex items-center gap-2 justify-center group">
              <FaLink fontSize={18} className="group-hover:text-blue-600" />
            </button>
          </div>
        </div>
        <div className="bg-sky-50 dark:bg-neutral-900 lg:w-3/4 p-2 rounded-md flex flex-col justify-between">
          <div>
            <p className="text-lg font-bold">Description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus sollicitudin mauris, sit amet tempor tortor interdum nec.
              Integer aliquam, libero id finibus ultricies, nulla dui suscipit
              elit, non suscipit velit velit a tellus. Vestibulum at justo nec
              mauris lacinia posuere. Morbi at velit ex. Nam vehicula, arcu vel
              condimentum aliquet, magna libero tempor lacus, id condimentum
              quam justo ut sem. Nulla facilisi. Fusce posuere urna vel elit
              placerat, sed malesuada dui sollicitudin. Morbi nec arcu nec ex
              viverra gravida sed et quam. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Sed at
              arcu pretium, bibendum dolor at, tristique magna. Integer gravida
              ante nec lectus sollicitudin, ac pharetra dui bibendum. Donec at
              neque ac justo gravida interdum. Cras at risus lectus. Sed varius
              nisl vitae massa ullamcorper dignissim. Vivamus commodo semper
              eros.
            </p>
          </div>
          <div className="grid grid-cols-12 lg:flex gap-4 mt-4 lg:mt-0">
            <div className="col-span-6 bg-sky-100 dark:bg-neutral-950 p-4 rounded-md">
              <p className="text-neutral-500">Client ID</p>
              <p className="text-base">{project.clientid}</p>
            </div>
            <div className="col-span-6 bg-sky-100 dark:bg-neutral-950 p-4 rounded-md">
              <p className="text-neutral-500">Start Date</p>
              <p className="text-base">{project.receiveddate}</p>
            </div>
            <div className="col-span-6 bg-sky-100 dark:bg-neutral-950 p-4 rounded-md">
              <p className="text-neutral-500">Deadline</p>
              <p className="text-base">{project.deadline}</p>
            </div>
            <div className="col-span-6 bg-sky-100 dark:bg-neutral-950 p-4 rounded-md">
              <p className="text-neutral-500">Status</p>
              <p className="text-base">{project.status}</p>
            </div>
            <div className="col-span-12 bg-sky-100 dark:bg-neutral-950 p-4 rounded-md">
              <p className="text-neutral-500">Associate</p>
              <p className="text-base">{project.associate}</p>
            </div>
            <div className="col-span-12 bg-sky-100 dark:bg-neutral-950 p-4 rounded-md">
              <p className="text-neutral-500">Remark</p>
              <p className="text-base">{project.remark}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
