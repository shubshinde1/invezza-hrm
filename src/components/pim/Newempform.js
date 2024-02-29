import React from "react";
import { MantineProvider, Avatar } from "@mantine/core";
import { BiReset } from "react-icons/bi";
import { FaUpload } from "react-icons/fa6";
import { useState } from "react";

export default function Newempform() {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setSelectedImage("");
  };

  return (
    <div className="bg-white p-4 rounded-md h-screen overflow-scroll">
      <div>
        <div>
          <h4 className="font-bold">Add Profile Picture</h4>

          {/* user profile */}
          <div className="flex items-center md:items-center mt-4 gap-4">
            <div>
              <MantineProvider>
                <Avatar
                  className="w-28 md:w-20 bg-[#EBE9F6] p-2 rounded-md"
                  src={selectedImage || ""}
                  alt="Profile"
                />
              </MantineProvider>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col md:flex-row">
                <label
                  htmlFor="upload-avatar"
                  className="bg-[#5336FD] px-3 py-2 flex text-white rounded-md cursor-pointer items-center hover:scale-[1.020] duration-150"
                >
                  <input
                    type="file"
                    id="upload-avatar"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                  <FaUpload size={18} />
                  <h1 className="ml-2 text-xs font-bold">Upload Avatar</h1>
                </label>
                <div
                  className="bg-[#EBE9F6] px-3 py-2 flex rounded-md md:ml-4 mt-4 md:mt-0 cursor-pointer items-center hover:scale-[1.020] duration-150"
                  onClick={handleResetImage}
                >
                  <BiReset size={20} />
                  <h1 className="ml-2 text-xs font-bold">Reset Image</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mt-8">
            <h4 className="font-bold">Personal Information</h4>
            <div className="mt-2">
              <div className="flex gap-5 flex-wrap sm:flex-nowrap">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"
                  />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"
                  />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="employeeId">Employee Id</label>
                  <input
                    id="employeeId"
                    name="employeeId"
                    type="text"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"
                  />
                </div>
              </div>
              <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"
                  />
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <select
                    id="maritalStatus"
                    name="maritalStatus"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"
                  >
                    <option value="">Select Marital Status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Employment Information */}
          <div className="mt-8">
            <h4 className="font-bold">Employment Information</h4>
            <div className="mt-2">
              <div className="flex gap-5 flex-wrap sm:flex-nowrap">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label>Date of Joining</label>
                  <input className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"></input>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label>Last Name</label>
                  <input className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"></input>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label>Employee Id</label>
                  <input className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"></input>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label>Date of Birth</label>
                  <input className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"></input>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <label>Gender</label>
                  <input className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"></input>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label>Marital Status</label>
                  <input className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
