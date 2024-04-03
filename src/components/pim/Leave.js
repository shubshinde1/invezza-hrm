import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { makeStyles } from "@mui/styles";
import { createGlobalStyle } from "styled-components";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import empdata from "./leaveData.json";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { FaCalculator } from "react-icons/fa6";
import { MdSick } from "react-icons/md";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdFestival } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

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
    display: "block",
    width: "100%",
  },
});

const GlobalStyles = createGlobalStyle`
.MuiPaper-root{
  border-radius:10px;
} 
.MuiList-root {
  height: auto;
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
    padding-left: 15px;
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

const data = empdata;

const columns = [
  { id: "leavetype", label: "Leave Type", minWidth: 10 },
  { id: "reason", label: "Reason", minWidth: 100 },
  { id: "from", label: "From", minWidth: 100 },
  { id: "to", label: "To", minWidth: 100 },
  { id: "noofleaves", label: "No Of Leaves", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "approvedby", label: "Approved By", minWidth: 100 },
];

export default function Leave() {
  const classes = useStyles();
  const { empid } = useParams();

  const [totalSickLeave, setTotalSickLeave] = useState(0);
  const [remainingSickLeave, setRemainingSickLeave] = useState(0);
  const [elapsedSickLeave, setElapsedSickLeave] = useState(0);

  const [totalPrivilegeLeave, setTotalPrivilegeLeave] = useState(0);
  const [remainingPrivilegeLeave, setRemainingPrivilegeLeave] = useState(0);
  const [elapsedPrivilegeLeave, setElapsedPrivilegeLeave] = useState(0);

  const [totalCasualLeave, setTotalCasualLeave] = useState(0);
  const [remainingCasualLeave, setRemainingCasualLeave] = useState(0);
  const [elapsedCasualLeave, setElapsedCasualLeave] = useState(0);

  const [totalHoliday, setTotalHoliday] = useState(0);
  const [remainingHoliday, setRemainingHoliday] = useState(0);
  const [elapsedHoliday, setElapsedHoliday] = useState(0);

  const [totalAllLeaves, setTotalAllLeaves] = useState(0);
  const [totalAllLeavesRemaining, setTotalAllLeavesRemaining] = useState(0);
  const [totalAllLeavesElapsed, setTotalAllLeavesElapsed] = useState(0);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filters, setFilters] = React.useState({
    from: "",
    to: "",
    reason: "",
    noofleaves: "",
  });

  const handleChangeFilter = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      from: "",
      to: "",
    });
  };

  const filteredRows = React.useMemo(() => {
    return data.filter((row) => {
      return (
        row.empid === empid &&
        Object.entries(filters).every(([key, value]) => {
          if (!value || !row[key]) return true;
          if (key === "from") {
            return row[key].toLowerCase().includes(value.toLowerCase());
          } else if (key === "to") {
            return row[key].toLowerCase() === value.toLowerCase();
          } else {
            return row[key].toLowerCase().startsWith(value.toLowerCase());
          }
        })
      );
    });
  }, [data, empid, filters]);

  const totalLeavesOfMonth = filteredRows.reduce((total, row) => {
    const leaveKeys = Object.keys(row.attendance);
    const totalLeavesForEmployee = leaveKeys.reduce((acc, key) => {
      return acc + row.attendance[key].noofleaves;
    }, 0);
    return total + totalLeavesForEmployee;
  }, 0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    let sickLeave = 0;
    let privilegeLeave = 0;
    let casualLeave = 0;
    let holiday = 0;

    filteredRows.forEach((row) => {
      sickLeave += row.leavedata.sickleave.total;
      privilegeLeave += row.leavedata.privilegeleave.total;
      casualLeave += row.leavedata.casualleave.total;
      holiday += row.leavedata.holiday.total;
    });

    setTotalSickLeave(sickLeave);
    setTotalPrivilegeLeave(privilegeLeave);
    setTotalCasualLeave(casualLeave);
    setTotalHoliday(holiday);

    let remainingSick = 0;
    let elapsedSick = 0;
    let remainingPrivilege = 0;
    let elapsedPrivilege = 0;
    let remainingCasual = 0;
    let elapsedCasual = 0;
    let remainingHoliday = 0;
    let elapsedHoliday = 0;

    filteredRows.forEach((row) => {
      remainingSick += row.leavedata.sickleave.remaining;
      elapsedSick += row.leavedata.sickleave.elapsed;
      remainingPrivilege += row.leavedata.privilegeleave.remaining;
      elapsedPrivilege += row.leavedata.privilegeleave.elapsed;
      remainingCasual += row.leavedata.casualleave.remaining;
      elapsedCasual += row.leavedata.casualleave.elapsed;
      remainingHoliday += row.leavedata.holiday.remaining;
      elapsedHoliday += row.leavedata.holiday.elapsed;
    });

    setRemainingSickLeave(remainingSick);
    setElapsedSickLeave(elapsedSick);
    setRemainingPrivilegeLeave(remainingPrivilege);
    setElapsedPrivilegeLeave(elapsedPrivilege);
    setRemainingCasualLeave(remainingCasual);
    setElapsedCasualLeave(elapsedCasual);
    setRemainingHoliday(remainingHoliday);
    setElapsedHoliday(elapsedHoliday);

    setTotalAllLeaves(sickLeave + privilegeLeave + casualLeave + holiday);
    setTotalAllLeavesRemaining(
      remainingSick + remainingPrivilege + remainingCasual + remainingHoliday
    );
    setTotalAllLeavesElapsed(
      elapsedSick + elapsedPrivilege + elapsedCasual + elapsedHoliday
    );
  }, [filteredRows]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          sx={{ overflow: "hidden" }}
          className="md:w-[100%] w-[calc(100vw-0.8rem)] h-[90%] top-24"
        >
          <div className="p-2 grid grid-cols-11 sm:grid-cols-12 lg:grid-cols-10 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="col-span-12 sm:col-span-6 lg:col-span-2 border-2 rounded-md p-2 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="bg-sky-100 rounded-md p-2">
                  <FaCalculator fontSize={20} className="text-sky-600" />
                </div>
                <h2 className="font-bold">Total Leaves</h2>
              </div>
              <h2 className="flex items-end justify-end">
                <span className="text-4xl font-bold cursor-pointer">
                  <Tooltip title="Available" placement="top" arrow>
                    {totalAllLeavesRemaining}
                  </Tooltip>
                </span>
                /
                <span className="cursor-pointer">
                  <Tooltip title="Total" placement="top" arrow>
                    {totalAllLeaves}
                  </Tooltip>
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="col-span-12 sm:col-span-6 lg:col-span-2 border-2 rounded-md p-2 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="bg-green-100 rounded-md p-2">
                  <BiSolidHappyHeartEyes
                    fontSize={20}
                    className="text-green-500"
                  />
                </div>
                <h2 className="font-bold">Casual Leave</h2>
              </div>
              <h2 className="flex items-end justify-end">
                <span className="text-4xl font-bold cursor-pointer">
                  <Tooltip title="Available" placement="top" arrow>
                    {remainingCasualLeave}
                  </Tooltip>
                </span>
                /
                <span className="cursor-pointer">
                  <Tooltip title="Total" placement="top" arrow>
                    {totalCasualLeave}
                  </Tooltip>
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-12 sm:col-span-6 lg:col-span-2 border-2 rounded-md p-2 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="bg-orange-100 rounded-md p-2">
                  <MdSick fontSize={20} className="text-orange-500" />
                </div>
                <h2 className="font-bold">Sick Leave</h2>
              </div>
              <h2 className="flex items-end justify-end">
                <span className="text-4xl font-bold cursor-pointer">
                  <Tooltip title="Available" placement="top" arrow>
                    {remainingSickLeave}
                  </Tooltip>
                </span>
                /
                <span className="cursor-pointer">
                  <Tooltip title="Total" placement="top" arrow>
                    {totalSickLeave}
                  </Tooltip>
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 sm:col-span-6 lg:col-span-2 border-2 rounded-md p-2 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="bg-red-100 rounded-md p-2">
                  <FaHandHoldingHeart fontSize={20} className="text-red-500" />
                </div>
                <h2 className="font-bold">Privilege Leave</h2>
              </div>
              <h2 className="flex items-end justify-end">
                <span className="text-4xl font-bold cursor-pointer">
                  <Tooltip title="Available" placement="top" arrow>
                    {remainingPrivilegeLeave}
                  </Tooltip>
                </span>
                /
                <span className="cursor-pointer">
                  <Tooltip title="Total" placement="top" arrow>
                    {totalPrivilegeLeave}
                  </Tooltip>
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="col-span-12 sm:col-span-6 lg:col-span-2 border-2 rounded-md p-2 flex flex-col gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="bg-yellow-100 rounded-md p-2">
                  <MdFestival fontSize={20} className="text-yellow-500" />
                </div>
                <h2 className="font-bold">Holiday</h2>
              </div>
              <h2 className="flex items-end justify-end">
                <span className="text-4xl font-bold cursor-pointer">
                  <Tooltip title="Available" placement="top" arrow>
                    {remainingHoliday}
                  </Tooltip>
                </span>
                /
                <span className="cursor-pointer">
                  <Tooltip title="Total" placement="top" arrow>
                    {totalHoliday}
                  </Tooltip>
                </span>
              </h2>
            </motion.div>
          </div>
          <div className="m-2 gap-2  items-center justify-between grid grid-cols-12 ">
            <FormControl
              variant="outlined"
              margin="dense"
              className={classNames(
                "col-span-12 sm:col-span-4 xl:col-span-2",
                classes.root
              )}
            >
              <InputLabel id="leave-label" className="w-52 ">
                All Leaves
              </InputLabel>
              <Select
                labelId="leave-label"
                id="leave"
                name="All Leaves"
                value={filters.status}
                onChange={handleChangeFilter}
                label="All Leaves"
                IconComponent={(props) => (
                  <span>
                    <ArrowDropDownRoundedIcon
                      {...props}
                      sx={{
                        fontSize: 40,
                        // backgroundColor: "#CBCBCB",
                        borderRadius: 2,
                      }}
                    />
                  </span>
                )}
              >
                <GlobalStyles />
                <MenuItem value="">All</MenuItem>
                <MenuItem value="currentmonth">Current Month</MenuItem>
                <MenuItem value="last3months">Last 3 Months</MenuItem>
                <MenuItem value="last6months">Last 6 Months</MenuItem>
                <MenuItem value="last1year">Last 1 Year</MenuItem>
              </Select>
            </FormControl>

            <div className="col-span-12 sm:col-span-8 xl:col-span-10 flex items-center lg:justify-end">
              {/* <button
                className="bg-sky-50 md:mt-1 px-4 rounded-md w-fit"
                onClick={handleClearFilters}
              >
                <FaFilterCircleXmark
                  variant="outlined"
                  className="h-11 cursor-pointer text-xl"
                />
              </button> */}
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                style={{ paddingRight: "5px" }}
                className="scrollbar-hide"
              />
            </div>
          </div>
          <TableContainer
            sx={{ maxHeight: 530 }}
            className="m-2 pr-4 scrollbar-hide"
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="left"
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#f0f9ff",
                        fontWeight: "bold",
                        fontFamily: "Euclid",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const attendanceKeys = Object.keys(row.attendance);
                    return attendanceKeys.map((key) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align="left"
                            style={{
                              fontFamily: "Euclid",
                            }}
                          >
                            {column.id !== "status" ? (
                              row.attendance[key][column.id]
                            ) : (
                              <>
                                {row.attendance[key][column.id] === 0 && (
                                  <span className="text-red-600 euclid text-xs font-bold bg-red-200 py-1 px-2 rounded-md">
                                    Declined
                                  </span>
                                )}
                                {row.attendance[key][column.id] === 1 && (
                                  <span className="text-green-600 euclid text-xs font-bold bg-green-200 py-1 px-2 rounded-md">
                                    Approved
                                  </span>
                                )}
                                {row.attendance[key][column.id] === 2 && (
                                  <span className="text-orange-600 euclid text-xs font-bold bg-orange-200 py-1 px-2 rounded-md">
                                    Pending
                                  </span>
                                )}
                              </>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ));
                  })}
              </TableBody>
            </Table>
            <div className="px-4 py-4 font-bold w-full bg-sky-50 flex flex-row justify-between sm:justify-start">
              <h2 className=" sm:w-1/2 ">Total Leaves in Last</h2>
              <h5 className="sm:ml-16 md:ml-16 lg:ml-20">
                {totalLeavesOfMonth}
              </h5>
            </div>
          </TableContainer>
        </Paper>
      </motion.div>
    </div>
  );
}
