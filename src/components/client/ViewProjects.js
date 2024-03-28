import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import clientAvatar from "../../assets/images/clientAvatar.png";
import Tooltip from "@mui/material/Tooltip";
import { motion } from "framer-motion";
import { IoEye } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

function ViewProjects() {
  const location = useLocation();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const clientData = searchParams.get("client");

    if (clientData) {
      setClient(JSON.parse(decodeURIComponent(clientData)));
    }
  }, [location.search]);

  return (
    <div className=" mx-auto pb-20 ">
      {client ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:flex gap-2 rounded-md bg-white p-2"
        >
          <div className="lg:w-1/3   p-2 ">
            <div className="flex flex-col gap-3 font-semibold">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <img
                    src={clientAvatar}
                    width={100}
                    className="rounded-md"
                    alt="Clientlogo"
                  />
                  <p className="text-lg font-semibold">{client.businessname}</p>
                </div>
                <div className="flex gap-2">
                  <Tooltip title="View Contract" placement="top" arrow>
                    <div className="bg-sky-50 rounded-md cursor-pointer h-fit p-2 m-0">
                      <IoEye fontSize={20} />
                    </div>
                  </Tooltip>
                  <Tooltip title="Add Project" placement="top" arrow>
                    <div className="bg-sky-50 rounded-md cursor-pointer h-fit p-2 m-0">
                      <IoIosAddCircle fontSize={20} />
                    </div>
                  </Tooltip>
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <p className="text-sm text-gray-500">Client ID</p>
                <p className="text-sm">{client.clientid}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Client Name</p>
                <p className="text-sm">{client.clientname}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Phone No</p>
                <p className="text-sm">{client.phone}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Email ID</p>
                <p className="text-sm">{client.email}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">GST No</p>
                <p className="text-sm">{client.gstn}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">No Of Projects</p>
                <p className="text-sm">{client.projects.length}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 rounded-md bg-sky-50 h-fit p-4 lg:m-2 lg:ml-0">
            <ul className="">
              {client.projects.map((project, index) => (
                <li key={index} className="mb-4">
                  <div className="flex items-center gap-1">
                    <h2 className="text-base font-semibold">
                      {index + 1} - {project.projectname}
                    </h2>
                    <Tooltip title="Work Status" placement="top" arrow>
                      <span
                        className={`inline-block px-1 py-0.5 rounded-md font-bold text-[.6rem] text-white cursor-pointer ${
                          project.status === 0
                            ? "bg-red-400"
                            : project.status === 1
                            ? "bg-yellow-400"
                            : "bg-green-400"
                        }`}
                      >
                        {project.status === 0
                          ? "Pending"
                          : project.status === 1
                          ? "In Progress"
                          : "Completed"}
                      </span>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col md:grid grid-cols-2 gap-3 mt-5">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Project ID</p>
                      <p className="font-bold">{project.projectid}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Project Name</p>
                      <p className="font-bold">{project.projectname}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Received Date</p>
                      <p className="font-bold">{project.receiveddate}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Deadline</p>
                      <p className="font-bold">{project.deadline}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Remark</p>
                      <p className="font-bold">{project.remark}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">Assinged To</p>
                      <p className="font-bold">{project.associate}</p>
                    </div>
                    {/* <div className="flex justify-between">
                      <p className="text-sm font-medium">Status</p>
                      <span
                        className={`inline-block px-2 py-1 rounded-md font-medium text-white ${
                          project.status === "0"
                            ? "bg-red-500"
                            : project.status === "1"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      >
                        {project.status === "0"
                          ? "Pending"
                          : project.status === "1"
                          ? "In Progress"
                          : "Completed"}
                      </span>
                    </div> */}
                  </div>
                  <hr className="mt-5 bg-gray-800 " />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ) : (
        <p>No client data found</p>
      )}
    </div>
  );
}

export default ViewProjects;
