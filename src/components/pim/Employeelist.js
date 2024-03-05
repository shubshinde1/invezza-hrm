import React from "react";
import { Link } from "react-router-dom";
import Menutabs from "./Menutabs";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Bolt } from "@mui/icons-material";
import { MdOutlinePreview } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FaFilterCircleXmark } from "react-icons/fa6";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const columns = [
  { id: "empid", label: "Employee ID", minWidth: 120 },
  { id: "ename", label: "Employee Name", minWidth: 120 },
  { id: "designation", label: "Designation", minWidth: 120 },
  { id: "jdate", label: "Joining Date", minWidth: 120 },
  { id: "status", label: "Status", minWidth: 120 },
  { id: "actions", label: "Actions", minWidth: 80 },
];

function createData(empid, ename, designation, jdate, status) {
  return { empid, ename, designation, jdate, status };
}

const rows = [
  createData("EMP001", "John Doe", "Software Engineer", "01/01/2022", "Active"),
  createData(
    "EMP002",
    "Jane Smith",
    "Project Manager",
    "05/15/2021",
    "Inactive"
  ),
  createData(
    "EMP003",
    "Alice Johnson",
    "Data Analyst",
    "03/20/2023",
    "Inactive"
  ),
  createData(
    "EMP004",
    "Michael Brown",
    "Software Developer",
    "11/10/2021",
    "Active"
  ),
  createData(
    "EMP005",
    "Emma Garcia",
    "Business Analyst",
    "07/08/2022",
    "Active"
  ),
  createData(
    "EMP006",
    "William Martinez",
    "Quality Assurance",
    "09/25/2023",
    "Active"
  ),
  createData(
    "EMP007",
    "Olivia Anderson",
    "UI/UX Designer",
    "04/05/2021",
    "Inactive"
  ),
  createData(
    "EMP008",
    "James Wilson",
    "System Administrator",
    "02/14/2022",
    "Active"
  ),
  createData(
    "EMP009",
    "Ella Taylor",
    "Network Engineer",
    "06/30/2023",
    "Active"
  ),
  createData(
    "EMP010",
    "Noah Thomas",
    "Database Administrator",
    "08/17/2021",
    "Inactive"
  ),
  createData(
    "EMP011",
    "Isabella Hernandez",
    "Cybersecurity Analyst",
    "10/29/2022",
    "Inactive"
  ),
  createData(
    "EMP012",
    "Liam Lopez",
    "DevOps Engineer",
    "12/12/2023",
    "Inactive"
  ),
  createData(
    "EMP013",
    "Sophia Scott",
    "Software Tester",
    "03/18/2021",
    "Inactive"
  ),
  createData("EMP014", "Mason Green", "Product Owner", "07/22/2022", "Active"),
  createData("EMP015", "Ava Adams", "Scrum Master", "11/05/2023", "Inactive"),
  createData(
    "EMP016",
    "Harper Baker",
    "Technical Writer",
    "05/14/2021",
    "Active"
  ),
  createData(
    "EMP017",
    "Evelyn Rivera",
    "Business Intelligence Analyst",
    "01/29/2022",
    "Active"
  ),
  createData(
    "EMP018",
    "Alexander Reed",
    "Frontend Developer",
    "09/10/2023",
    "Active"
  ),
  createData(
    "EMP019",
    "Charlotte Perez",
    "Backend Developer",
    "06/07/2021",
    "Inactive"
  ),
  createData(
    "EMP020",
    "Ryan Roberts",
    "Full Stack Developer",
    "04/02/2022",
    "Active"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filters, setFilters] = React.useState({
    empid: "",
    ename: "",
    status: "",
    designation: "",
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
      empid: "",
      ename: "",
      status: "",
      designation: "",
    });
  };

  const designations = Array.from(new Set(rows.map((row) => row.designation)));
  const statuses = Array.from(new Set(rows.map((row) => row.status)));

  const filteredRows = React.useMemo(() => {
    return rows.filter((row) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true; // If filter value is empty, return true
        if (key === "designation") {
          // For designation, check if the row value contains the filter value
          return row[key].toLowerCase().includes(value.toLowerCase());
        } else if (key === "status") {
          // For status, check if the row value matches the filter value
          return row[key].toLowerCase() === value.toLowerCase();
        } else {
          // For other fields, check if the row value starts with the filter value
          return row[key].toLowerCase().startsWith(value.toLowerCase());
        }
      });
    });
  }, [filters]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Menutabs />
      <Paper
        sx={{ overflow: "hidden" }}
        className="md:w-[100%] w-[calc(100vw-0.8rem)] h-[90%] top-24"
      >
        <div className="m-2 gap-2 flex-col items-center grid grid-cols-12 ">
          <TextField
            className="col-span-12 sm:col-span-6 xl:col-span-2 text-xs"
            id="empid"
            name="empid"
            label="Employee ID"
            value={filters.empid}
            onChange={handleChangeFilter}
            variant="outlined"
            margin="dense"
            sx={{
              "& .MuiInputLabel-root": {
                fontSize: 14,
              },
              "& .MuiInputBase-root": {
                backgroundColor: "#EBE9F6",
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
          <TextField
            className="col-span-12 sm:col-span-6 xl:col-span-2 py-1"
            id="ename"
            name="ename"
            label="Employee Name"
            value={filters.ename}
            onChange={handleChangeFilter}
            variant="outlined"
            margin="dense"
            sx={{
              "& .MuiInputLabel-root": {
                fontSize: 14,
              },
              "& .MuiInputBase-root": {
                backgroundColor: "#EBE9F6",
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
          <FormControl
            variant="outlined"
            margin="dense"
            className="col-span-12 sm:col-span-6 xl:col-span-2 "
            sx={{
              "& .MuiInputLabel-root": {
                fontSize: 14,
              },
              "& .MuiInputBase-root": {
                backgroundColor: "#EBE9F6",
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
            <InputLabel id="status-label" className="w-52 ">
              Status
            </InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              value={filters.status}
              onChange={handleChangeFilter}
              label="Status"
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
              <MenuItem value="">All</MenuItem>
              {statuses.map((statuse) => (
                <MenuItem key={statuse} value={statuse.toLowerCase()}>
                  {statuse}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            variant="outlined"
            margin="dense"
            className="col-span-12 sm:col-span-6 xl:col-span-2"
            sx={{
              "& .MuiInputLabel-root": {
                fontSize: 14,
              },
              "& .MuiInputBase-root": {
                backgroundColor: "#EBE9F6",
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
            <InputLabel id="designation-label" className="w-52">
              Designation
            </InputLabel>
            <Select
              labelId="designation-label"
              id="designation"
              name="designation"
              value={filters.designation}
              onChange={handleChangeFilter}
              label="Designation"
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
              <MenuItem value="">All</MenuItem>
              {designations.map((designation) => (
                <MenuItem
                  key={designation}
                  value={designation.toLowerCase()}
                  className="bg-[#EBE9F6] "
                >
                  {designation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="col-span-12 md:col-span-4 flex items-center justify-between ">
            <button
              className="bg-[#EBE9F6] md:mt-1 px-4 rounded-md w-fit"
              onClick={handleClearFilters}
            >
              <FaFilterCircleXmark
                variant="outlined"
                className="h-11 cursor-pointer text-xl"
              />
            </button>
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
            <TableHead className="">
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="left"
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#EBE9F6",
                      fontWeight: Bolt,
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
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.empid}>
                    {columns.map((column) => (
                      <TableCell key={column.id} align="left">
                        {column.id !== "actions" ? (
                          row[column.id]
                        ) : (
                          <div className="flex items-center gap-2">
                            <div className="hover:bg-[#dbd6fc] rounded-md p-2">
                              <Link to={`/edit/${row.empid}`}>
                                <FaEdit className="text-xl" />
                              </Link>
                            </div>
                            {" | "}
                            <div className="hover:bg-[#dbd6fc] rounded-md p-2">
                              <Link to={`/view/${row.empid}`}>
                                <MdOutlinePreview className="text-xl" />
                              </Link>
                            </div>
                          </div>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
