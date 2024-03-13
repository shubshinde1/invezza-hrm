import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import PopupMessage from "./PopupMessage";
import { useNavigate } from "react-router-dom";
import { MantineProvider, Avatar } from "@mantine/core";
import { BiReset } from "react-icons/bi";
import { FaUpload } from "react-icons/fa6";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import { createGlobalStyle } from "styled-components";
import { IoAddCircle } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoMdSave } from "react-icons/io";
import Checkbox from "@mui/joy/Checkbox";

const GlobalStyles = createGlobalStyle`
.MuiPaper-root{
  height:215px;
  border-radius:10px;
} 
  .MuiMenuItem-root {
    font-family: Euclid;
    font-size: 14px;
    font-weight: bold;
    margin: auto 8px;
    border-radius: 7px;
  }
  .MuiMenuItem-root:hover {
    background-color:#e0f2fe;
    padding-left: 14px;
  }
  .MuiMenuItem-root:hover {
    transition-duration: 0.2s;
  }

  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
`;

const useStyles = makeStyles({
  root: {
    "& .MuiInputLabel-root": {
      fontFamily: "euclid",
      fontSize: 14,
      paddingTop: -2.5,
      fontWeight: "bold",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
      fontWeight: "bold",
      fontSize: 15,
    },
    "& .MuiInputBase-root": {
      backgroundColor: "#f0f9ff",
      border: "0 none",
      borderRadius: 7,
      height: 50,
      width: "100%",
      overflow: "hidden",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
    },
    "& .Muilplaceholder": {
      fontFamily: "euclid",
      fontSize: 10,
    },
    "& .MuiOutlinedInput-input": {
      fontFamily: "euclid-medium",
      fontSize: 14,
    },
    "& ::placeholder": {
      fontSize: 12,
    },
    "& JoyCheckbox-input": {
      backgroundColor: "red",
    },
    display: "block",
    width: "100%",
    fontFamily: "euclid-medium",
  },
});

export function PersonalInformation({ onNext }) {
  const [selectedImage, setSelectedImage] = useState("");
  const classes = useStyles();

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
    <div className="">
      <div>
        <h4 className="font-bold">Personal Information</h4>
        <motion.div
          className="mt-2"
          animate={{ y: 0 }}
          initial={{ y: -20 }}
          transition={{ type: "spring", bounce: 0.7 }}
        >
          <div className="flex items-center md:items-center mt-4 gap-4">
            <div>
              <div className="w-28 md:w-20 bg-sky-50 p-2 rounded-md flex justify-center">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    className="w-full h-full object-cover rounded-md"
                    alt="Profile"
                  />
                ) : (
                  <FaUserAlt className="text-6xl text-gray-300" />
                )}
              </div>
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
                  className="bg-sky-50 px-3 py-2 flex rounded-md md:ml-4 mt-4 md:mt-0 cursor-pointer items-center hover:scale-[1.020] duration-150"
                  onClick={handleResetImage}
                >
                  <BiReset size={20} />
                  <h1 className="ml-2 text-xs font-bold">Reset Image</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-5 flex-wrap sm:flex-nowrap">
              <div className="w-full lg:w-1/3 flex flex-col">
                <TextField
                  className={classNames(
                    "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                    classes.root
                  )}
                  id="fname"
                  name="fname"
                  label="First Name"
                  variant="outlined"
                  margin="dense"
                />
              </div>
              <div className="w-full lg:w-1/3 flex flex-col">
                <TextField
                  className={classNames(
                    "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                    classes.root
                  )}
                  id="lname"
                  name="lname"
                  label="Last Name"
                  variant="outlined"
                  margin="dense"
                />
              </div>
              <div className="w-full lg:w-1/3 flex flex-col">
                <TextField
                  className={classNames(
                    "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                    classes.root
                  )}
                  id="empid"
                  name="empid"
                  label="Employee Id"
                  variant="outlined"
                  margin="dense"
                />
              </div>
            </div>
            <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
              <div className="w-full lg:w-1/3 flex flex-col">
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  className="w-full"
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Date of Birth"
                      className={classNames(
                        "col-span-12 sm:col-span-6 xl:col-span-2",
                        classes.root
                      )}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>

              <div className="w-full lg:w-1/3 flex flex-col">
                <FormControl
                  variant="outlined"
                  margin="dense"
                  className={classNames(
                    "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                    classes.root
                  )}
                >
                  <InputLabel id="gender-label" className="w-52">
                    Gender
                  </InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    name="gender"
                    label="Gender"
                    IconComponent={(props) => (
                      // <div className="bg-red-500 z-50">
                      <ArrowDropDownRoundedIcon
                        {...props}
                        sx={{
                          fontSize: 40,
                          // marginLeft: "0.375rem",
                          // backgroundColor: "#bfdbfe",
                          borderRadius: 1,
                        }}
                        // className="bg-sky-200 mr-1.5 rounded-md cursor-pointer"
                      />
                      // </div>
                    )}
                  >
                    <GlobalStyles />
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col">
                <FormControl
                  variant="outlined"
                  margin="dense"
                  className={classNames(
                    "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                    classes.root
                  )}
                >
                  <InputLabel id="maritialstatus-label" className="w-52">
                    Maritial Status
                  </InputLabel>
                  <Select
                    labelId="maritialstatus-label"
                    id="maritialstatus"
                    name="maritialstatus"
                    label="Maritial Status"
                    IconComponent={(props) => (
                      <ArrowDropDownRoundedIcon
                        {...props}
                        sx={{ fontSize: 40 }}
                      />
                    )}
                  >
                    <GlobalStyles />
                    <MenuItem value="single">Single</MenuItem>
                    <MenuItem value="married">Married</MenuItem>
                    <MenuItem value="divorced">Divorced</MenuItem>
                    <MenuItem value="widowed">Widowed</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex justify-end md:absolute md:z-0 mt-8 md:bottom-36 md:right-10">
        <button
          type="button"
          onClick={onNext}
          className="bg-[#5336FD] text-white px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            Next
            <TbPlayerTrackNextFilled />
          </div>
        </button>
      </div>
    </div>
  );
}

export function EmploymentInformation({ onPrev, onNext }) {
  const classes = useStyles();

  // Employment Information Form Component
  return (
    <div className="">
      <h4 className="font-bold">Employment Information</h4>
      <motion.div
        className="mt-2"
        animate={{ y: 0 }}
        initial={{ y: -20 }}
        transition={{ type: "spring", bounce: 0.7 }}
      >
        <div className="flex gap-5 flex-wrap sm:flex-nowrap">
          <div className="w-full lg:w-1/3 flex flex-col">
            <LocalizationProvider dateAdapter={AdapterDayjs} className="w-full">
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Date of Joining"
                  className={classNames(
                    "col-span-12 sm:col-span-6 xl:col-span-2",
                    classes.root
                  )}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col">
            <FormControl
              variant="outlined"
              margin="dense"
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2",
                classes.root
              )}
            >
              <InputLabel id="dept-label" className="w-52">
                Department
              </InputLabel>
              <Select
                labelId="dept-label"
                id="gender"
                name="gender"
                label="Gender"
                IconComponent={(props) => (
                  <ArrowDropDownRoundedIcon {...props} sx={{ fontSize: 40 }} />
                )}
              >
                <GlobalStyles />
                <MenuItem value="informationtechnology">
                  Information Technology
                </MenuItem>
                <MenuItem value="operations">Operations</MenuItem>
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="humanresources">Human Resources</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="marketing">Marketing</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col">
            <FormControl
              variant="outlined"
              margin="dense"
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2",
                classes.root
              )}
            >
              <InputLabel id="report-label" className="w-52">
                Reporting To
              </InputLabel>
              <Select
                labelId="report-label"
                id="reporting"
                name="reporting"
                label="Reporting To"
                IconComponent={(props) => (
                  <ArrowDropDownRoundedIcon {...props} sx={{ fontSize: 40 }} />
                )}
              >
                <GlobalStyles />
                <MenuItem value="swpnilpatil">Swpnil Patil</MenuItem>
                <MenuItem value="sheetalpatil">Sheetal Patil</MenuItem>
                <MenuItem value="ishapathak">Isha Pathak</MenuItem>
                <MenuItem value="sushantkhadilkar">Sushant Khadilkar</MenuItem>
                <MenuItem value="shubhamshinde">Shubham Shinde</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
          <div className="w-full lg:w-1/3 flex flex-col">
            <FormControl
              variant="outlined"
              margin="dense"
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2",
                classes.root
              )}
            >
              <InputLabel id="tl-label" className="w-52">
                Team Leader
              </InputLabel>
              <Select
                labelId="tl-label"
                id="teamleader"
                name="teamleader"
                label="Team Leader"
                IconComponent={(props) => (
                  <ArrowDropDownRoundedIcon {...props} sx={{ fontSize: 40 }} />
                )}
              >
                <GlobalStyles />
                <MenuItem value="swpnilpatil">Swpnil Patil</MenuItem>
                <MenuItem value="sheetalpatil">Sheetal Patil</MenuItem>
                <MenuItem value="ishapathak">Isha Pathak</MenuItem>
                <MenuItem value="sushantkhadilkar">Sushant Khadilkar</MenuItem>
                <MenuItem value="shubhamshinde">Shubham Shinde</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col">
            <FormControl
              variant="outlined"
              margin="dense"
              className={classNames(
                "col-span-12 sm:col-span-6 xl:col-span-2",
                classes.root
              )}
            >
              <InputLabel id="report-label" className="w-52">
                Reporting To
              </InputLabel>
              <Select
                labelId="report-label"
                id="reporting"
                name="reporting"
                label="Reporting To"
                IconComponent={(props) => (
                  <ArrowDropDownRoundedIcon {...props} sx={{ fontSize: 40 }} />
                )}
              >
                <GlobalStyles />
                <MenuItem value="swpnilpatil">Swpnil Patil</MenuItem>
                <MenuItem value="sheetalpatil">Sheetal Patil</MenuItem>
                <MenuItem value="ishapathak">Isha Pathak</MenuItem>
                <MenuItem value="sushantkhadilkar">Sushant Khadilkar</MenuItem>
                <MenuItem value="shubhamshinde">Shubham Shinde</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col"></div>
        </div>
      </motion.div>
      <div className="w-full flex justify-between md:absolute md:z-0 mt-8 md:bottom-36 md:right-10 md:w-7/12 md:w-7/12 lg:w-8/12 ">
        <button
          type="button"
          onClick={onPrev}
          className="bg-blue-100 px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            <TbPlayerTrackNextFilled className="rotate-180" />
            Back
          </div>
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-[#5336FD] text-white px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            Next
            <TbPlayerTrackNextFilled />
          </div>
        </button>
      </div>
    </div>
  );
}

export function ContactInformation({ onPrev, onNext }) {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const Navigate = useNavigate();
  const classes = useStyles();
  // let autoCloseTimer;

  useEffect(() => {
    let autoCloseTimer;
    if (isSuccessPopupOpen) {
      autoCloseTimer = setTimeout(() => {
        setIsSuccessPopupOpen(false); // Close the popup after 5 seconds
        Navigate("/pim/employeelist"); // Redirect to the employee list
      }, 5000);
    }
    return () => clearTimeout(autoCloseTimer);
  }, [isSuccessPopupOpen, Navigate]);

  // const handleAddMore = () => {
  //   setIsSuccessPopupOpen(false); // Close the popup
  //   clearTimeout(autoCloseTimer);
  //   onPrev();
  //   onPrev();
  // };

  // const handleGoToList = () => {
  //   setIsSuccessPopupOpen(false);
  //   Navigate("/pim/employeelist");
  // };

  return (
    <div>
      <div className="">
        <h4 className="font-bold">Contact Information</h4>
        <motion.div
          className="mt-2"
          animate={{ y: 0 }}
          initial={{ y: -20 }}
          transition={{ type: "spring", bounce: 0.7 }}
        >
          <div className="flex gap-5 flex-wrap sm:flex-nowrap">
            <div className="w-full lg:w-1/3 flex flex-col">
              <FormControl
                variant="outlined"
                margin="dense"
                // className="col-span-12 sm:col-span-6 xl:col-span-2"
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2",
                  classes.root
                )}
                // sx={{
                //   "& .MuiInputLabel-root": {
                //     fontSize: 14,
                //   },
                //   "& .MuiInputBase-root": {
                //     backgroundColor: "#f0f9ff",
                //     border: "0 none",
                //     borderRadius: 2,
                //     height: 50,
                //   },
                //   "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                //     borderColor: "transparent",
                //   },
                //   "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                //     {
                //       borderColor: "transparent",
                //     },
                //   "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                //     {
                //       borderColor: "transparent",
                //     },
                // }}
              >
                <InputLabel id="state-label" className="w-52">
                  State
                </InputLabel>
                <Select
                  labelId="state-label"
                  id="state"
                  name="state"
                  label="State"
                  IconComponent={(props) => (
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{ fontSize: 40 }}
                    />
                  )}
                >
                  <GlobalStyles />
                  <MenuItem value="andhra-pradesh">Andhra Pradesh</MenuItem>
                  <MenuItem value="arunachal-pradesh">
                    Arunachal Pradesh
                  </MenuItem>
                  <MenuItem value="assam">Assam</MenuItem>
                  <MenuItem value="bihar">Bihar</MenuItem>
                  <MenuItem value="chhattisgarh">Chhattisgarh</MenuItem>
                  <MenuItem value="goa">Goa</MenuItem>
                  <MenuItem value="gujarat">Gujarat</MenuItem>
                  <MenuItem value="haryana">Haryana</MenuItem>
                  <MenuItem value="himachal-pradesh">Himachal Pradesh</MenuItem>
                  <MenuItem value="jammu-kashmir">Jammu and Kashmir</MenuItem>
                  <MenuItem value="jharkhand">Jharkhand</MenuItem>
                  <MenuItem value="karnataka">Karnataka</MenuItem>
                  <MenuItem value="kerala">Kerala</MenuItem>
                  <MenuItem value="madhya-pradesh">Madhya Pradesh</MenuItem>
                  <MenuItem value="maharashtra">Maharashtra</MenuItem>
                  <MenuItem value="manipur">Manipur</MenuItem>
                  <MenuItem value="meghalaya">Meghalaya</MenuItem>
                  <MenuItem value="mizoram">Mizoram</MenuItem>
                  <MenuItem value="nagaland">Nagaland</MenuItem>
                  <MenuItem value="odisha">Odisha</MenuItem>
                  <MenuItem value="punjab">Punjab</MenuItem>
                  <MenuItem value="rajasthan">Rajasthan</MenuItem>
                  <MenuItem value="sikkim">Sikkim</MenuItem>
                  <MenuItem value="tamil-nadu">Tamil Nadu</MenuItem>
                  <MenuItem value="telangana">Telangana</MenuItem>
                  <MenuItem value="tripura">Tripura</MenuItem>
                  <MenuItem value="uttar-pradesh">Uttar Pradesh</MenuItem>
                  <MenuItem value="uttarakhand">Uttarakhand</MenuItem>
                  <MenuItem value="west-bengal">West Bengal</MenuItem>
                  <MenuItem value="andaman-nicobar-islands">
                    Andaman and Nicobar Islands
                  </MenuItem>
                  <MenuItem value="chandigarh">Chandigarh</MenuItem>
                  <MenuItem value="dadra-nagar-haveli-daman-diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </MenuItem>
                  <MenuItem value="delhi">Delhi</MenuItem>
                  <MenuItem value="lakshadweep">Lakshadweep</MenuItem>
                  <MenuItem value="puducherry">Puducherry</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <FormControl
                variant="outlined"
                margin="dense"
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2",
                  classes.root
                )}
              >
                <InputLabel id="city-label" className="w-52">
                  City
                </InputLabel>
                <Select
                  labelId="city-label"
                  id="city"
                  name="city"
                  label="City"
                  IconComponent={(props) => (
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{ fontSize: 40 }}
                    />
                  )}
                >
                  <GlobalStyles />
                  <MenuItem value="mumbai">Mumbai</MenuItem>
                  <MenuItem value="pune">Pune</MenuItem>
                  <MenuItem value="nagpur">Nagpur</MenuItem>
                  <MenuItem value="thane">Thane</MenuItem>
                  <MenuItem value="nashik">Nashik</MenuItem>
                  <MenuItem value="aurangabad">Aurangabad</MenuItem>
                  <MenuItem value="solapur">Solapur</MenuItem>
                  <MenuItem value="amravati">Amravati</MenuItem>
                  <MenuItem value="kolhapur">Kolhapur</MenuItem>
                  <MenuItem value="vasai-virar">Vasai-Virar</MenuItem>
                  <MenuItem value="bhiwandi">Bhiwandi</MenuItem>
                  <MenuItem value="nanded">Nanded</MenuItem>
                  <MenuItem value="jalgaon">Jalgaon</MenuItem>
                  <MenuItem value="akola">Akola</MenuItem>
                  <MenuItem value="latur">Latur</MenuItem>
                  <MenuItem value="dhule">Dhule</MenuItem>
                  <MenuItem value="ahmednagar">Ahmednagar</MenuItem>
                  <MenuItem value="chandrapur">Chandrapur</MenuItem>
                  <MenuItem value="parbhani">Parbhani</MenuItem>
                  <MenuItem value="jalna">Jalna</MenuItem>
                  <MenuItem value="bhusawal">Bhusawal</MenuItem>
                  <MenuItem value="panvel">Panvel</MenuItem>
                  <MenuItem value="satara">Satara</MenuItem>
                  <MenuItem value="beed">Beed</MenuItem>
                  <MenuItem value="yavatmal">Yavatmal</MenuItem>
                  <MenuItem value="osmanabad">Osmanabad</MenuItem>
                  <MenuItem value="nandurbar">Nandurbar</MenuItem>
                  <MenuItem value="sangli">Sangli</MenuItem>
                  <MenuItem value="buldhana">Buldhana</MenuItem>
                  <MenuItem value="wardha">Wardha</MenuItem>
                  <MenuItem value="gondia">Gondia</MenuItem>
                  <MenuItem value="ratnagiri">Ratnagiri</MenuItem>
                  <MenuItem value="washim">Washim</MenuItem>
                  <MenuItem value="hingoli">Hingoli</MenuItem>
                  <MenuItem value="raigad">Raigad</MenuItem>
                  <MenuItem value="sindhudurg">Sindhudurg</MenuItem>
                  <MenuItem value="bhandara">Bhandara</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                  classes.root
                )}
                id="address"
                name="address"
                label="Address"
                variant="outlined"
                margin="dense"
              />
            </div>
          </div>
          <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                  classes.root
                )}
                id="zip"
                name="zip"
                label="Zip Code"
                type="number"
                variant="outlined"
                margin="dense"
              />
            </div>

            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                  classes.root
                )}
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                  classes.root
                )}
                id="phone"
                name="phone"
                label="Phone Number"
                type="number"
                variant="outlined"
                margin="dense"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex justify-between md:absolute md:z-0 mt-8 md:bottom-36 md:right-10 md:w-7/12 lg:w-8/12 ">
        <button
          type="button"
          onClick={onPrev}
          className="bg-blue-100 px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            <TbPlayerTrackNextFilled className="rotate-180" />
            Back
          </div>
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-[#5336FD] text-white px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            Next
            <TbPlayerTrackNextFilled />
          </div>
        </button>
      </div>
    </div>
  );
}

export function EmergencyContacts({ onPrev, onNext }) {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const Navigate = useNavigate();
  let autoCloseTimer;
  const classes = useStyles();

  useEffect(() => {
    let autoCloseTimer;
    if (isSuccessPopupOpen) {
      autoCloseTimer = setTimeout(() => {
        setIsSuccessPopupOpen(false); // Close the popup after 5 seconds
        Navigate("/pim/employeelist"); // Redirect to the employee list
      }, 5000);
    }
    return () => clearTimeout(autoCloseTimer);
  }, [isSuccessPopupOpen, Navigate]);

  const handleAddMore = () => {
    setIsSuccessPopupOpen(false);
    clearTimeout(autoCloseTimer);
    onPrev();
    onPrev();
    onPrev();
  };

  const handleGoToList = () => {
    setIsSuccessPopupOpen(false);
    Navigate("/pim/employeelist");
  };
  // Contact Information Form Component

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsSuccessPopupOpen(true);
  // };
  return (
    <div>
      <div className="">
        <h4 className="font-bold">Emergency Contacts</h4>
        <motion.div
          className="mt-2"
          animate={{ y: 0 }}
          initial={{ y: -20 }}
          transition={{ type: "spring", bounce: 0.7 }}
        >
          <div className="flex gap-5 flex-wrap sm:flex-nowrap">
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                  classes.root
                )}
                id="emergencycontactname"
                name="emergencycontactname"
                label="Full Name"
                variant="outlined"
                margin="dense"
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <FormControl
                variant="outlined"
                margin="dense"
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2",
                  classes.root
                )}
              >
                <InputLabel id="relation-label" className="w-52">
                  Relation
                </InputLabel>
                <Select
                  labelId="relation-label"
                  id="relation"
                  name="relation"
                  label="Relation"
                  IconComponent={(props) => (
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{ fontSize: 40 }}
                    />
                  )}
                >
                  <GlobalStyles />
                  <MenuItem value="father">Father</MenuItem>
                  <MenuItem value="mother">Mother</MenuItem>
                  <MenuItem value="brother">Brother</MenuItem>
                  <MenuItem value="sister">Sister</MenuItem>
                  <MenuItem value="son">Son</MenuItem>
                  <MenuItem value="daughter">Daughter</MenuItem>
                  <MenuItem value="grandfather">Grandfather</MenuItem>
                  <MenuItem value="grandmother">Grandmother</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <FormControl
                variant="outlined"
                margin="dense"
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2",
                  classes.root
                )}
              >
                <InputLabel id="profestion-label" className="w-52">
                  Profestion
                </InputLabel>
                <Select
                  labelId="profestion-label"
                  id="profestion"
                  name="profestion"
                  label="Profestion"
                  IconComponent={(props) => (
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{ fontSize: 40 }}
                    />
                  )}
                >
                  <GlobalStyles />
                  <MenuItem value="bussinessman">Business Man</MenuItem>
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="engineer">Engineer</MenuItem>
                  <MenuItem value="teacher">Teacher</MenuItem>
                  <MenuItem value="lawyer">Lawyer</MenuItem>
                  <MenuItem value="artist">Artist</MenuItem>
                  <MenuItem value="architect">Architect</MenuItem>
                  <MenuItem value="chef">Chef</MenuItem>
                  <MenuItem value="nurse">Nurse</MenuItem>
                  <MenuItem value="scientist">Scientist</MenuItem>
                  <MenuItem value="accountant">Accountant</MenuItem>
                  <MenuItem value="pilot">Pilot</MenuItem>
                  <MenuItem value="police officer">Police Officer</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                  classes.root
                )}
                id="address"
                name="address"
                label="Address"
                type="text"
                variant="outlined"
                margin="dense"
              />
            </div>

            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                  classes.root
                )}
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className={classNames(
                  "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                  classes.root
                )}
                id="phone"
                name="phone"
                label="Phone Number"
                type="number"
                variant="outlined"
                margin="dense"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full flex justify-between md:absolute md:z-0 mt-8 md:bottom-36 md:right-10 md:w-7/12 lg:w-8/12 ">
        <button
          type="button"
          onClick={onPrev}
          className="bg-blue-100 px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            <TbPlayerTrackNextFilled className="rotate-180" />
            Back
          </div>
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-[#5336FD] text-white px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            Next
            <TbPlayerTrackNextFilled />
          </div>
        </button>
      </div>
      {isSuccessPopupOpen && (
        <PopupMessage
          className
          message="New Employee Added Successfully"
          onAddMore={handleAddMore}
          onGoToList={handleGoToList}
        />
      )}
    </div>
  );
}

export function WorkExperience({ onPrev }) {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [workExperiences, setWorkExperiences] = useState([
    { name: "Experience 1" },
  ]);
  const Navigate = useNavigate();
  // let autoCloseTimer;
  const classes = useStyles();

  const handleAddMore = () => {
    const newExperience = { name: `Experience ${workExperiences.length + 1}` };
    setWorkExperiences([...workExperiences, newExperience]);
  };

  const handleRemove = (index) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences.splice(index, 1);
    setWorkExperiences(updatedExperiences);
  };

  useEffect(() => {
    let autoCloseTimer;
    if (isSuccessPopupOpen) {
      autoCloseTimer = setTimeout(() => {
        setIsSuccessPopupOpen(false);
        Navigate("/pim/employeelist");
      }, 5000);
    }
    return () => clearTimeout(autoCloseTimer);
  }, [isSuccessPopupOpen, Navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccessPopupOpen(true);
  };

  const handleGoToList = () => {
    setIsSuccessPopupOpen(false);
    Navigate("/pim/employeelist");
  };

  const [elecome, setElecome] = React.useState(true);
  return (
    <div className="">
      <div className="">
        <div className="flex items-center justify-between">
          <h4 className="font-bold">Work Experiences</h4>
          <button
            type="button"
            onClick={handleAddMore}
            className="bg-[#5336FD] text-white px-2 py-1 rounded-md hover:scale-[1.020] flex items-center gap-1"
          >
            <IoAddCircle className="text-xl" />
            Add More
          </button>
        </div>
        <div className="mt-2 ">
          {workExperiences.map((workExp, index) => (
            <motion.div
              key={index}
              className="mb-5"
              animate={{ y: 0 }}
              initial={{ y: -20 }}
              transition={{ type: "spring", bounce: 0.7 }}
            >
              {index !== 0 && <hr className="mb-5" />}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h1>Experience {index + 1}</h1>
                  {index !== 0 && ( // Disable removal button for the first experience
                    <button
                      type="button"
                      onClick={() => {
                        handleRemove(index);
                        setElecome(!elecome);
                      }}
                      className="bg-sky-50 px-2 py-1 rounded-md text-xs ml-3 hover:bg-[#5336FD] hover:text-white flex items-center gap-1"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-3">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <TextField
                    className={classNames(
                      "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                      classes.root
                    )}
                    id="jobtitle"
                    name="jobtitle"
                    label="Job Title"
                    variant="outlined"
                    margin="dense"
                  />
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <TextField
                    className={classNames(
                      "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                      classes.root
                    )}
                    id="companyname"
                    name="companyname"
                    label="Company Name"
                    variant="outlined"
                    margin="dense"
                  />
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <TextField
                    className={classNames(
                      "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                      classes.root
                    )}
                    id="companyurl"
                    name="companyurl"
                    label="Company Website"
                    type="text"
                    variant="outlined"
                    margin="dense"
                  />
                </div>
              </div>
              <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <TextField
                    className={classNames(
                      "col-span-12 sm:col-span-6 xl:col-span-2 text-xs euclid",
                      classes.root
                    )}
                    id="location"
                    name="location"
                    label="Company Location"
                    type="text"
                    variant="outlined"
                    margin="dense"
                  />
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <FormControl
                    variant="outlined"
                    margin="dense"
                    className={classNames(
                      "col-span-12 sm:col-span-6 xl:col-span-2",
                      classes.root
                    )}
                  >
                    <InputLabel id="emptype-label" className="w-52">
                      Emplyement Type
                    </InputLabel>
                    <Select
                      labelId="emptype-label"
                      id="emplyementtype"
                      name="emplyementtype"
                      label="Emplyement Type"
                      IconComponent={(props) => (
                        <ArrowDropDownRoundedIcon
                          {...props}
                          sx={{ fontSize: 40 }}
                        />
                      )}
                    >
                      <GlobalStyles />
                      <MenuItem value="full-time">Full-time</MenuItem>
                      <MenuItem value="part-time">Part-time</MenuItem>
                      <MenuItem value="contract">Contract</MenuItem>
                      <MenuItem value="temporary">Temporary</MenuItem>
                      <MenuItem value="freelance">
                        Freelance or Independent Contractor
                      </MenuItem>
                      <MenuItem value="internship">Internship</MenuItem>
                      <MenuItem value="remote">
                        Remote or Telecommuting
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <FormControl
                    variant="outlined"
                    margin="dense"
                    className={classNames(
                      "col-span-12 sm:col-span-6 xl:col-span-2",
                      classes.root
                    )}
                  >
                    <InputLabel id="emptype-label" className="w-52">
                      Emplyement Type
                    </InputLabel>
                    <Select
                      labelId="emptype-label"
                      id="emplyementtype"
                      name="emplyementtype"
                      label="Emplyement Type"
                      IconComponent={(props) => (
                        <ArrowDropDownRoundedIcon
                          {...props}
                          sx={{ fontSize: 40 }}
                        />
                      )}
                    >
                      <GlobalStyles />
                      <MenuItem value="full-time">Full-time</MenuItem>
                      <MenuItem value="part-time">Part-time</MenuItem>
                      <MenuItem value="contract">Contract</MenuItem>
                      <MenuItem value="temporary">Temporary</MenuItem>
                      <MenuItem value="freelance">
                        Freelance or Independent Contractor
                      </MenuItem>
                      <MenuItem value="internship">Internship</MenuItem>
                      <MenuItem value="remote">
                        Remote or Telecommuting
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5 items-center">
                <div className="w-full lg:w-1/3 flex flex-col">
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    className="w-full"
                  >
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Start Date"
                        className={classNames(
                          "col-span-12 sm:col-span-6 xl:col-span-2",
                          classes.root
                        )}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col">
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    className="w-full"
                  >
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="End Date"
                        className={classNames(
                          "col-span-12 sm:col-span-6 xl:col-span-2",
                          classes.root
                        )}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                <div className="w-full lg:w-1/3 flex flex-row items-center">
                  {/* <FormControl
                    variant="outlined"
                    margin="dense"
                    className={classNames(
                      "col-span-12 sm:col-span-6 xl:col-span-2",
                      classes.root
                    )}
                  >
                    <InputLabel id="emptype-label" className="w-52">
                      Emplyement Type
                    </InputLabel>
                    <Select
                      labelId="emptype-label"
                      id="emplyementtype"
                      name="emplyementtype"
                      label="Emplyement Type"
                      IconComponent={(props) => (
                        <ArrowDropDownRoundedIcon
                          {...props}
                          sx={{ fontSize: 40 }}
                        />
                      )}
                    >
                      <GlobalStyles />
                      <MenuItem value="full-time">Full-time</MenuItem>
                      <MenuItem value="part-time">Part-time</MenuItem>
                      <MenuItem value="contract">Contract</MenuItem>
                      <MenuItem value="temporary">Temporary</MenuItem>
                      <MenuItem value="freelance">
                        Freelance or Independent Contractor
                      </MenuItem>
                      <MenuItem value="internship">Internship</MenuItem>
                      <MenuItem value="remote">
                        Remote or Telecommuting
                      </MenuItem>
                    </Select>
                  </FormControl> */}
                  <Checkbox
                    color="primary"
                    disabled={false}
                    // label="I currently work here"
                    size="md"
                    variant="soft"
                    className="col-span-12 sm:col-span-6 xl:col-span-2"
                  />
                  <h1 className="ml-2">I currently work here</h1>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
                <div className="w-full lg:w-2/3 flex flex-col">
                  {/* <TextField
                    className={classNames("", classes.root)}
                    id="location"
                    name="location"
                    label="Company Location"
                    type="text"
                    variant="outlined"
                    margin="dense"
                  /> */}
                  <textarea
                    className="bg-[#f0f9ff] rounded-md focus:border-[1px] mt-2 p-3 pb-0 "
                    placeholder="Description"
                  ></textarea>
                </div>

                <div className="w-full lg:w-1/3 flex flex-col md:-mr-2">
                  {/* <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    className="w-full"
                  >
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Date of Joining"
                        className={classNames(
                          "col-span-12 sm:col-span-6 xl:col-span-2",
                          classes.root
                        )}
                      />
                    </DemoContainer>
                  </LocalizationProvider> */}
                </div>

                {/* <div className="w-full lg:w-1/3 flex flex-col">
                  <TextField
                    className={classNames(
                      "col-span-12 sm:col-span-6 xl:col-span-2 text-xs",
                      classes.root
                    )}
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    type="number"
                    variant="outlined"
                    margin="dense"
                  />
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between  md:z-0 md:bottom-36 md:right-10  ">
        <button
          type="button"
          onClick={onPrev}
          className="bg-blue-100 px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            <TbPlayerTrackNextFilled className="rotate-180" />
            Back
          </div>
        </button>
        <button
          type="submit"
          value="Save Details"
          onClick={handleSubmit}
          className="bg-[#5336FD] text-white px-5 py-2 rounded-md cursor-pointer hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            <IoMdSave />
            Save
          </div>
        </button>
        {/* <button
          type="button"
          onClick={onNext}
          className="bg-[#5336FD] text-white px-4 py-2 rounded-md hover:scale-[1.020]"
        >
          <div className="flex items-center gap-2">
            Next
            <TbPlayerTrackNextFilled />
          </div>
        </button> */}
      </div>

      {isSuccessPopupOpen && (
        <PopupMessage
          className
          message="New Employee Added Successfully"
          onAddMore={handleAddMore}
          onGoToList={handleGoToList}
        />
      )}
    </div>
  );
}
