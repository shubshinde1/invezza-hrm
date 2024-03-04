import React, { useEffect } from "react";
import { FaSquareCheck } from "react-icons/fa6";

const PopupMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2000); // Close the popup after 2 seconds

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <>
      <div
        className="flex items-center"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          zIndex: "9999",
        }}
      >
        <FaSquareCheck className="text-green-600 text-2xl" />
        <p className="ml-2">{message}</p>
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
          backdropFilter: "blur(5px)", // Apply the blur effect
          zIndex: "9998",
        }}
      ></div>
    </>
  );
};

export default PopupMessage;
