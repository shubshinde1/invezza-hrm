import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import classNames from "classnames";

const LogoutMenuItem = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    navigate("/login");
  };

  const cancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <Menu.Item className="z-50">
      {({ active }) => (
        <>
          <div
            className={`px-3 py-2 flex hover:bg-sky-50 cursor-pointer rounded-md  ${
              active ? "" : ""
            }`}
            onClick={handleLogout}
          >
            <FaPowerOff fontSize={18} color="red" />
            <span className="ml-3">Logout</span>
          </div>

          {showConfirmation && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                backdropFilter: "blur(3px)", // Apply the blur effect
                zIndex: 9998,
              }}
            >
              <div className="absolute inset-0 opacity-50 backdrop-blur-lg bg-black"></div>
              <div className="absolute bg-white p-7 rounded-md shadow-lg">
                <p>Are you sure you want to logout?</p>
                <div className="flex justify-around mt-4 ">
                  <button
                    className="px-3 py-2 bg-red-500 text-white rounded-md mr-2 flex items-center hover:scale-105 duration-300"
                    onClick={confirmLogout}
                  >
                    <FaPowerOff fontSize={18} className="mr-2" />
                    Logout
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 rounded-md hover:scale-105 duration-300"
                    onClick={cancelLogout}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Menu.Item>
  );
};

export default LogoutMenuItem;
