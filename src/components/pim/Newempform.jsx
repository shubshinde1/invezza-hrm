import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PersonalInformation,
  EmploymentInformation,
  ContactInformation,
  EmergencyContacts,
  WorkExperience,
  Documents,
} from "./Formsteps";

export default function Newempform() {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccessPopupOpen(true);
  };

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
    "Work Experience",
    "Documents",
  ];

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="bg-white dark:bg-neutral-950 dark:text-white p-2 rounded-md h-screen overflow-scroll scrollbar-hide flex flex-col md:grid grid-cols-12 gap-4">
      <div className="  col-span-3 md:col-span-2 ">
        <div className="bg-sky-50 dark:bg-neutral-900 rounded-md sticky top-0">
          <ul className="text-sm p-2 flex flex-col gap-2 sticky top-0">
            {steps.map((stepName, index) => (
              <li
                key={index + 1}
                className={`hover:bg-blue-100 hover:dark:bg-neutral-800 py-2.5 px-1.5 rounded-md cursor-pointer ${
                  step === index + 1 ? "bg-blue-100 dark:bg-neutral-950 font-bold" : ""
                }`}
                onClick={() => setStep(index + 1)}
              >
                {stepName}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-9 md:col-span-10">
        <div>
          <form onSubmit={handleSubmit}>
            {step === 1 && <PersonalInformation onNext={nextStep} />}
            {step === 2 && (
              <EmploymentInformation onNext={nextStep} onPrev={prevStep} />
            )}
            {step === 3 && (
              <ContactInformation onNext={nextStep} onPrev={prevStep} />
            )}
            {step === 4 && (
              <EmergencyContacts onNext={nextStep} onPrev={prevStep} />
            )}
            {step === 5 && (
              <WorkExperience onNext={nextStep} onPrev={prevStep} />
            )}
            {step === 6 && <Documents onPrev={prevStep} />}
          </form>
        </div>
      </div>
    </div>
  );
}
