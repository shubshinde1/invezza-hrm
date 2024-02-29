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
    <div className="bg-white p-4 rounded-md h-screen">
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

          {/* Employment Information */}
          <div className="mt-8">
            <h4 className="font-bold">Personal Information</h4>
            <div className="mt-2">
              <div className="flex gap-5 flex-wrap sm:flex-nowrap">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label>First Name</label>
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
                  <label>Email Id</label>
                  <input className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3"></input>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label>Phone No</label>
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
