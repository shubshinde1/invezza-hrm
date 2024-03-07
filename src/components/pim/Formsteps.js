import React from "react";
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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MantineProvider, Avatar } from "@mantine/core";
import { BiReset } from "react-icons/bi";
import { FaUpload } from "react-icons/fa6";

export function PersonalInformation({ onNext }) {
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
  // Personal Information Form Component
  return (
    <div className="">
      <div>
        <h4 className="font-bold">Personal Information</h4>
        <div className="flex items-center md:items-center mt-4 gap-4">
          <div>
            <MantineProvider>
              <Avatar
                className="w-28 md:w-20 bg-sky-50 p-2 rounded-md"
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
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="fname"
                name="fname"
                label="First Name"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="lname"
                name="lname"
                label="Last Name"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="empid"
                name="empid"
                label="Employee Id"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
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
                    // defaultValue={dayjs()}
                    // views={["day", "month", "year"]}
                    label="Date of Birth"
                    sx={{
                      "& .MuiInputLabel-root": {
                        fontSize: 14,
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#f0f9ff",
                        border: "0 none",
                        borderRadius: 2,
                        height: 50,
                        width: "100%",
                        overflow: "hidden",
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "transparent",
                        },
                      "& ::placeholder": {
                        fontSize: 12,
                      },
                      display: "block", // Ensure DatePicker occupies full width
                      width: "100%", // Ensure DatePicker occupies full width
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col">
              <FormControl
                variant="outlined"
                margin="dense"
                className="col-span-12 sm:col-span-6 xl:col-span-2"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
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
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{ fontSize: 40 }}
                    />
                  )}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <FormControl
                variant="outlined"
                margin="dense"
                className="col-span-12 sm:col-span-6 xl:col-span-2"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
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
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{ fontSize: 40 }}
                    />
                  )}
                >
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                  <MenuItem value="divorced">Divorced</MenuItem>
                  <MenuItem value="widowed">Widowed</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end md:absolute md:z-0 md:bottom-36 md:right-10">
        <button
          type="button"
          onClick={onNext}
          className="bg-[#5336FD] text-white px-5 py-2 mt-8 rounded-md hover:scale-[1.020]"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export function EmploymentInformation({ onNext, onPrev }) {
  // Employment Information Form Component
  return (
    <div className="">
      <h4 className="font-bold">Employment Information</h4>
      <div className="mt-2">
        <div className="flex gap-5 flex-wrap sm:flex-nowrap">
          <div className="w-full lg:w-1/3 flex flex-col">
            <LocalizationProvider dateAdapter={AdapterDayjs} className="w-full">
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  // defaultValue={dayjs()}
                  // views={["day", "month", "year"]}
                  label="Date of Joining"
                  sx={{
                    "& .MuiInputLabel-root": {
                      fontSize: 14,
                    },
                    "& .MuiInputBase-root": {
                      backgroundColor: "#f0f9ff",
                      border: "0 none",
                      borderRadius: 2,
                      height: 50,
                      width: "100%",
                      overflow: "hidden",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "transparent",
                      },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "transparent",
                      },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "transparent",
                      },
                    "& ::placeholder": {
                      fontSize: 12,
                    },
                    display: "block", // Ensure DatePicker occupies full width
                    width: "100%", // Ensure DatePicker occupies full width
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col">
            <FormControl
              variant="outlined"
              margin="dense"
              className="col-span-12 sm:col-span-6 xl:col-span-2"
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: 14,
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "#f0f9ff",
                  border: "0 none",
                  borderRadius: 2,
                  height: 50,
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
              }}
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
              className="col-span-12 sm:col-span-6 xl:col-span-2"
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: 14,
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "#f0f9ff",
                  border: "0 none",
                  borderRadius: 2,
                  height: 50,
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
              }}
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
              className="col-span-12 sm:col-span-6 xl:col-span-2"
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: 14,
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "#f0f9ff",
                  border: "0 none",
                  borderRadius: 2,
                  height: 50,
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
              }}
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
              className="col-span-12 sm:col-span-6 xl:col-span-2"
              sx={{
                "& .MuiInputLabel-root": {
                  fontSize: 14,
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "#f0f9ff",
                  border: "0 none",
                  borderRadius: 2,
                  height: 50,
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
              }}
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
      </div>
      <div className="w-full flex justify-between md:absolute md:z-0 md:bottom-36 md:right-10 md:w-8/12 ">
        <button
          type="button"
          onClick={onPrev}
          className="bg-[#5336FD] text-white px-5 py-2 rounded-md  hover:scale-[1.020]"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-[#5336FD] text-white px-5 py-2 rounded-md md:ml-5 hover:scale-[1.020]"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export function ContactInformation({ onPrev, onNext }) {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const Navigate = useNavigate();
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
        <div className="mt-2">
          <div className="flex gap-5 flex-wrap sm:flex-nowrap">
            <div className="w-full lg:w-1/3 flex flex-col">
              <FormControl
                variant="outlined"
                margin="dense"
                className="col-span-12 sm:col-span-6 xl:col-span-2"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
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
                className="col-span-12 sm:col-span-6 xl:col-span-2"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
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
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="address"
                name="address"
                label="Address"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>
          </div>
          <div className="flex gap-5 flex-wrap sm:flex-nowrap mt-5">
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="zip"
                name="zip"
                label="Zip Code"
                type="number"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>

            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="phone"
                name="phone"
                label="Phone Number"
                type="number"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between md:absolute md:z-0 md:bottom-36 md:right-10 md:w-8/12 ">
        <button
          type="button"
          onClick={onPrev}
          className="bg-[#5336FD] text-white px-5 py-2 rounded-md  hover:scale-[1.020]"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-[#5336FD] text-white px-5 py-2 rounded-md md:ml-5 hover:scale-[1.020]"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export function EmergencyContacts({ onPrev }) {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const Navigate = useNavigate();
  let autoCloseTimer;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccessPopupOpen(true);
  };
  return (
    <div>
      <div className="">
        <h4 className="font-bold">Emergency Contacts</h4>
        <div className="mt-2">
          <div className="flex gap-5 flex-wrap sm:flex-nowrap">
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="emergencycontactname"
                name="emergencycontactname"
                label="Full Name"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <FormControl
                variant="outlined"
                margin="dense"
                className="col-span-12 sm:col-span-6 xl:col-span-2"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
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
                className="col-span-12 sm:col-span-6 xl:col-span-2"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
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
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="address"
                name="address"
                label="Address"
                type="text"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>

            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <TextField
                className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
                id="phone"
                name="phone"
                label="Phone Number"
                type="number"
                variant="outlined"
                margin="dense"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: 14,
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "#f0f9ff",
                    border: "0 none",
                    borderRadius: 2,
                    height: 50,
                  },
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "transparent",
                    },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between md:absolute md:z-0 md:bottom-36 md:right-10 md:w-8/12 ">
        <button
          type="button"
          onClick={onPrev}
          className="bg-[#5336FD] text-white px-5 py-2 mt-8 rounded-md  hover:scale-[1.020]"
        >
          Previous
        </button>
        <button
          type="submit"
          value="Save Details"
          onClick={handleSubmit}
          className="bg-[#5336FD] text-white px-5 py-2 mt-8 rounded-md cursor-pointer hover:scale-[1.020]"
        >
          Save Details
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
