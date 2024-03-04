import React from "react";
import { MantineProvider, Avatar } from "@mantine/core";
import { BiReset } from "react-icons/bi";
import { FaUpload } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupMessage from "./PopupMessage";

export default function Newempform() {
  const [selectedImage, setSelectedImage] = useState("");
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccessPopupOpen(true); // Open the popup
    setTimeout(() => {
      setIsSuccessPopupOpen(false); // Close the popup after 2 seconds
      Navigate("/pim/employeelist");
    }, 2500);
  };

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
    <div className="bg-white p-4 rounded-md h-screen overflow-scroll scrollbar-hide">
      <div>
        <form onSubmit={handleSubmit} action="" method="post">
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
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="employeeId">Employee Id</label>
                  <input
                    id="employeeId"
                    name="employeeId"
                    type="text"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
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
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  />
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="maritalStatus">Marital Status</label>
                  <select
                    id="maritalStatus"
                    name="maritalStatus"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Employment Information */}
          <div className="mt-8">
            <h4 className="font-bold">Employment Information</h4>
            <div className="mt-2">
              <div className="flex gap-5 flex-wrap sm:flex-nowrap">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="dateogjoining">Date of Joining</label>
                  <input
                    id="dateogjoining"
                    name="dateogjoining"
                    type="date"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  />
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="department">Department</label>
                  <select
                    id="department"
                    name="department"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="informationtechnology">
                      Information Technology
                    </option>
                    <option value="operations">Operations</option>
                    <option value="sales">Sales</option>
                    <option value="humanresources">Human Resources</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="manager">Manger</label>
                  <select
                    id="manager"
                    name="manager"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="swpnilpatil">Swpnil Patil</option>
                    <option value="sheetalpatil">Sheetal Patil</option>
                    <option value="ishapathak">Isha Pathak</option>
                    <option value="sushantkhadilkar">Sushant Khadilkar</option>
                    <option value="shubhamshinde">Shubham Shinde</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="teamlead">Team Leader</label>
                  <select
                    id="teamlead"
                    name="teamlead"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="swpnilpatil">Swpnil Patil</option>
                    <option value="sheetalpatil">Sheetal Patil</option>
                    <option value="ishapathak">Isha Pathak</option>
                    <option value="sushantkhadilkar">Sushant Khadilkar</option>
                    <option value="shubhamshinde">Shubham Shinde</option>
                  </select>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="designation">Job Title / Designation</label>
                  <select
                    id="designation"
                    name="designation"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="software-engineer">Software Engineer</option>
                    <option value="network-administrator">
                      Network Administrator
                    </option>
                    <option value="systems-analyst">Systems Analyst</option>
                    <option value="web-developer">Web Developer</option>
                    <option value="database-administrator">
                      Database Administrator
                    </option>
                    <option value="operations-manager">
                      Operations Manager
                    </option>
                    <option value="logistics-coordinator">
                      Logistics Coordinator
                    </option>
                    <option value="supply-chain-analyst">
                      Supply Chain Analyst
                    </option>
                    <option value="production-supervisor">
                      Production Supervisor
                    </option>
                    <option value="quality-assurance-specialist">
                      Quality Assurance Specialist
                    </option>
                    <option value="sales-representative">
                      Sales Representative
                    </option>
                    <option value="account-manager">Account Manager</option>
                    <option value="sales-manager">Sales Manager</option>
                    <option value="business-development-executive">
                      Business Development Executive
                    </option>
                    <option value="customer-success-manager">
                      Customer Success Manager
                    </option>
                    <option value="hr-manager">HR Manager</option>
                    <option value="recruitment-specialist">
                      Recruitment Specialist
                    </option>
                    <option value="training-coordinator">
                      Training Coordinator
                    </option>
                    <option value="compensation-analyst">
                      Compensation Analyst
                    </option>
                    <option value="employee-relations-manager">
                      Employee Relations Manager
                    </option>
                    <option value="financial-analyst">Financial Analyst</option>
                    <option value="accountant">Accountant</option>
                    <option value="finance-manager">Finance Manager</option>
                    <option value="investment-analyst">
                      Investment Analyst
                    </option>
                    <option value="tax-consultant">Tax Consultant</option>
                    <option value="marketing-manager">Marketing Manager</option>
                    <option value="digital-marketing-specialist">
                      Digital Marketing Specialist
                    </option>
                    <option value="brand-manager">Brand Manager</option>
                    <option value="market-research-analyst">
                      Market Research Analyst
                    </option>
                    <option value="social-media-coordinator">
                      Social Media Coordinator
                    </option>
                  </select>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  {/* <label htmlFor="maritalStatus">Marital Status</label>
                  <select
                    id="maritalStatus"
                    name="maritalStatus"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select> */}
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* Contact Information */}
          <div className="mt-8">
            <h4 className="font-bold">Contact Information</h4>
            <div className="mt-2">
              <div className="flex gap-5 flex-wrap sm:flex-nowrap">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    name="state"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    <option value="arunachal-pradesh">Arunachal Pradesh</option>
                    <option value="assam">Assam</option>
                    <option value="bihar">Bihar</option>
                    <option value="chhattisgarh">Chhattisgarh</option>
                    <option value="goa">Goa</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="haryana">Haryana</option>
                    <option value="himachal-pradesh">Himachal Pradesh</option>
                    <option value="jammu-kashmir">Jammu and Kashmir</option>
                    <option value="jharkhand">Jharkhand</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="kerala">Kerala</option>
                    <option value="madhya-pradesh">Madhya Pradesh</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="manipur">Manipur</option>
                    <option value="meghalaya">Meghalaya</option>
                    <option value="mizoram">Mizoram</option>
                    <option value="nagaland">Nagaland</option>
                    <option value="odisha">Odisha</option>
                    <option value="punjab">Punjab</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="sikkim">Sikkim</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                    <option value="tripura">Tripura</option>
                    <option value="uttar-pradesh">Uttar Pradesh</option>
                    <option value="uttarakhand">Uttarakhand</option>
                    <option value="west-bengal">West Bengal</option>
                    <option value="andaman-nicobar-islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="dadra-nagar-haveli-daman-diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="delhi">Delhi</option>
                    <option value="lakshadweep">Lakshadweep</option>
                    <option value="puducherry">Puducherry</option>
                  </select>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="city">City</label>
                  <select
                    id="city"
                    name="city"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  >
                    <option value=""></option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="nagpur">Nagpur</option>
                    <option value="thane">Thane</option>
                    <option value="nashik">Nashik</option>
                    <option value="aurangabad">Aurangabad</option>
                    <option value="solapur">Solapur</option>
                    <option value="amravati">Amravati</option>
                    <option value="kolhapur">Kolhapur</option>
                    <option value="vasai-virar">Vasai-Virar</option>
                    <option value="bhiwandi">Bhiwandi</option>
                    <option value="nanded">Nanded</option>
                    <option value="jalgaon">Jalgaon</option>
                    <option value="akola">Akola</option>
                    <option value="latur">Latur</option>
                    <option value="dhule">Dhule</option>
                    <option value="ahmednagar">Ahmednagar</option>
                    <option value="chandrapur">Chandrapur</option>
                    <option value="parbhani">Parbhani</option>
                    <option value="jalna">Jalna</option>
                    <option value="bhusawal">Bhusawal</option>
                    <option value="panvel">Panvel</option>
                    <option value="satara">Satara</option>
                    <option value="beed">Beed</option>
                    <option value="yavatmal">Yavatmal</option>
                    <option value="osmanabad">Osmanabad</option>
                    <option value="nandurbar">Nandurbar</option>
                    <option value="sangli">Sangli</option>
                    <option value="buldhana">Buldhana</option>
                    <option value="wardha">Wardha</option>
                    <option value="gondia">Gondia</option>
                    <option value="ratnagiri">Ratnagiri</option>
                    <option value="washim">Washim</option>
                    <option value="hingoli">Hingoli</option>
                    <option value="raigad">Raigad</option>
                    <option value="sindhudurg">Sindhudurg</option>
                    <option value="bhandara">Bhandara</option>
                  </select>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  />
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="emailid">Email Id</label>
                  <input
                    id="emailid"
                    name="emailid"
                    type="email"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col">
                  <label htmlFor="phoneno">Phone No</label>
                  <input
                    id="phoneno"
                    name="phoneno"
                    type="number"
                    className="bg-[#EBE9F6] rounded-lg md:mt-2 py-2.5 px-3 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          <div className="mt-8">
            <div className="flex gap-5">
              <input
                type="submit"
                value="Save Details"
                className="bg-[#5336FD] px-4 py-2 text-white rounded-md cursor-pointer font-bold hover:scale-[1.020] duration-100"
              />
              <input
                type="reset"
                value="Reset Form"
                className="bg-[#EBE9F6] px-4 py-2  rounded-md cursor-pointer hover:scale-[1.020] duration-100"
              />
            </div>
          </div>

          {isSuccessPopupOpen && (
            <PopupMessage
              message="New Employee Added Successfully"
              onClose={() => setIsSuccessPopupOpen(false)}
            />
          )}
        </form>
      </div>
    </div>
  );
}
