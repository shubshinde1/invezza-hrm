import React from "react";
// import { MantineProvider, Avatar } from "@mantine/core";
// import { BiReset } from "react-icons/bi";
// import { FaUpload } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import PopupMessage from "./PopupMessage";
// import {
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import {
  PersonalInformation,
  EmploymentInformation,
  ContactInformation,
  EmergencyContacts,
} from "./Formsteps";

export default function Newempform() {
  // const [selectedImage, setSelectedImage] = useState("");
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const Navigate = useNavigate();
  // let autoCloseTimer;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccessPopupOpen(true);
  };

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleResetImage = () => {
  //   setSelectedImage("");
  // };

  // const handleAddMore = () => {
  //   setIsSuccessPopupOpen(false); // Close the popup
  //   clearTimeout(autoCloseTimer); // Cancel the auto close timer
  // };

  // const handleGoToList = () => {
  //   setIsSuccessPopupOpen(false);
  //   Navigate("/pim/employeelist");
  // };

  useEffect(() => {
    let autoCloseTimer;
    if (isSuccessPopupOpen) {
      autoCloseTimer = setTimeout(() => {
        setIsSuccessPopupOpen(false); // Close the popup after 5 seconds
        Navigate("/pim/employeelist"); // Redirect to the employee list
      }, 10000);
    }
    return () => clearTimeout(autoCloseTimer);
  }, [isSuccessPopupOpen, Navigate]);

  const [step, setStep] = useState(1);
  const steps = [
    "Personal Information",
    "Employment Information",
    "Contact Information",
    "Emergency Contacts",
  ];

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="bg-white p-4 rounded-md h-screen overflow-scroll scrollbar-hide flex flex-col md:grid grid-cols-12 gap-4">
      <div className=" bg-sky-50 rounded-md col-span-2">
        {/* <ul className="text-sm p-2 flex flex-col gap-2">
          <li
            className={`hover:bg-blue-100 py-2.5 px-1.5 rounded-md cursor-pointer ${
              step === 1 ? "bg-blue-100 font-bold" : ""
            }`}
            onClick={() => setStep(1)}
          >
            Personal Information
          </li>
          <li
            className={`hover:bg-blue-100 py-2.5 px-1.5 rounded-md cursor-pointer ${
              step === 2 ? "bg-blue-100 font-bold" : ""
            }`}
            onClick={() => setStep(2)}
          >
            Employment Information
          </li>
          <li
            className={`hover:bg-blue-100 py-2.5 px-1.5 rounded-md cursor-pointer ${
              step === 3 ? "bg-blue-100 font-bold" : ""
            }`}
            onClick={() => setStep(3)}
          >
            Contact Information
          </li>
          <li
            className={`hover:bg-blue-100 py-2.5 px-1.5 rounded-md cursor-pointer ${
              step === 4 ? "bg-blue-100 font-bold" : ""
            }`}
            onClick={() => setStep(4)}
          >
            Emergency Contacts
          </li>
        </ul> */}
        <ul className="text-sm p-2 flex flex-col gap-2">
          {steps.map((stepName, index) => (
            <li
              key={index + 1}
              className={`hover:bg-blue-100 py-2.5 px-1.5 rounded-md cursor-pointer ${
                step === index + 1 ? "bg-blue-100 font-bold" : ""
              }`}
              onClick={() => setStep(index + 1)}
            >
              {stepName}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-10">
        <div>
          {/* <div className="stepper flex w-full md:w-1/2 justify-between ">
            <div
              className={`step ${
                step === 1
                  ? "active bg-[#5336FD] text-white w-10 px-4 py-2 h-10 rounded-full"
                  : "bg-gray-200 w-10 px-4 py-2 h-10 rounded-full cursor-pointer"
              }`}
              onClick={() => setStep(1)}
            >
              <h1>1</h1>
            </div>
            <div
              className={`step ${
                step === 2
                  ? "active bg-[#5336FD] text-white w-10 px-4 py-2 h-10 rounded-full"
                  : "bg-gray-200 w-10 px-4 py-2 h-10 rounded-full cursor-pointer"
              }`}
              onClick={() => setStep(2)}
            >
              <h1>2</h1>
            </div>
            <div
              className={`step ${
                step === 3
                  ? "active bg-[#5336FD] text-white w-10 px-4 py-2 h-10 rounded-full"
                  : "bg-gray-200 w-10 px-4 py-2 h-10 rounded-full cursor-pointer"
              }`}
              onClick={() => setStep(3)}
            >
              <h1>3</h1>
            </div>
          </div> */}

          <form onSubmit={handleSubmit}>
            {step === 1 && <PersonalInformation onNext={nextStep} />}
            {step === 2 && (
              <EmploymentInformation onNext={nextStep} onPrev={prevStep} />
            )}
            {step === 3 && (
              <ContactInformation onNext={nextStep} onPrev={prevStep} />
            )}
            {step === 4 && <EmergencyContacts onPrev={prevStep} />}
          </form>
        </div>
      </div>
    </div>
  );
}
