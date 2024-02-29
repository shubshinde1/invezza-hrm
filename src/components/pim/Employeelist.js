import React from "react";
import { BrowserRouter as useRouteMatch } from "react-router-dom";
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

const columns = [
  { id: "fname", label: "First Name", minWidth: 120 },
  { id: "lname", label: "Last Name", minWidth: 120 },
  { id: "empid", label: "Employee ID", minWidth: 120 },
  { id: "designation", label: "Designation", minWidth: 170 },
  { id: "jdate", label: "Joining Date", minWidth: 150 },
  { id: "tl", label: "Team Lead", minWidth: 120 },
  { id: "manager", label: "Manager", minWidth: 120 },
];

function createData(fname, lname, empid, designation, jdate, tl, manager) {
  return { fname, lname, empid, designation, jdate, tl, manager };
}

const rows = [
  createData(
    "John",
    "Doe",
    "EMP001",
    "Software Engineer",
    "01/01/2022",
    "Sarah",
    "Mike"
  ),
  createData(
    "Jane",
    "Smith",
    "EMP002",
    "Project Manager",
    "05/15/2021",
    "Alice",
    "Tom"
  ),
  // Creating data for 18 more employees
  createData(
    "Alice",
    "Johnson",
    "EMP003",
    "Data Analyst",
    "03/20/2023",
    "Bob",
    "Emily"
  ),
  createData(
    "Michael",
    "Brown",
    "EMP004",
    "Software Developer",
    "11/10/2021",
    "Chris",
    "Anna"
  ),
  createData(
    "Emma",
    "Garcia",
    "EMP005",
    "Business Analyst",
    "07/08/2022",
    "David",
    "Lily"
  ),
  createData(
    "William",
    "Martinez",
    "EMP006",
    "Quality Assurance",
    "09/25/2023",
    "Sophia",
    "Jason"
  ),
  createData(
    "Olivia",
    "Anderson",
    "EMP007",
    "UI/UX Designer",
    "04/05/2021",
    "Eric",
    "Natalie"
  ),
  createData(
    "James",
    "Wilson",
    "EMP008",
    "System Administrator",
    "02/14/2022",
    "Rachel",
    "Kevin"
  ),
  createData(
    "Ella",
    "Taylor",
    "EMP009",
    "Network Engineer",
    "06/30/2023",
    "Andrew",
    "Jessica"
  ),
  createData(
    "Noah",
    "Thomas",
    "EMP010",
    "Database Administrator",
    "08/17/2021",
    "Melissa",
    "Mark"
  ),
  createData(
    "Isabella",
    "Hernandez",
    "EMP011",
    "Cybersecurity Analyst",
    "10/29/2022",
    "Peter",
    "Oliver"
  ),
  createData(
    "Liam",
    "Lopez",
    "EMP012",
    "DevOps Engineer",
    "12/12/2023",
    "Victoria",
    "Benjamin"
  ),
  createData(
    "Sophia",
    "Scott",
    "EMP013",
    "Software Tester",
    "03/18/2021",
    "Steven",
    "Evelyn"
  ),
  createData(
    "Mason",
    "Green",
    "EMP014",
    "Product Owner",
    "07/22/2022",
    "Hannah",
    "Daniel"
  ),
  createData(
    "Ava",
    "Adams",
    "EMP015",
    "Scrum Master",
    "11/05/2023",
    "Nicholas",
    "Chloe"
  ),
  createData(
    "Harper",
    "Baker",
    "EMP016",
    "Technical Writer",
    "05/14/2021",
    "Samantha",
    "Justin"
  ),
  createData(
    "Evelyn",
    "Rivera",
    "EMP017",
    "Business Intelligence Analyst",
    "01/29/2022",
    "Gabriel",
    "Lucas"
  ),
  createData(
    "Alexander",
    "Reed",
    "EMP018",
    "Frontend Developer",
    "09/10/2023",
    "Madison",
    "Jackson"
  ),
  createData(
    "Charlotte",
    "Perez",
    "EMP019",
    "Backend Developer",
    "06/07/2021",
    "Avery",
    "Ethan"
  ),
  createData(
    "Ryan",
    "Roberts",
    "EMP020",
    "Full Stack Developer",
    "04/02/2022",
    "Mia",
    "Logan"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const match = useRouteMatch("/pim/addemployee");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      {match && <Menutabs />}{" "}
      <Paper
        sx={{ overflow: "hidden" }}
        className="md:w-[100%] w-[calc(100vw-0.8rem)]"
      >
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.empid}>
                    {columns.map((column) => (
                      <TableCell key={column.id} align="left">
                        {row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ paddingRight: '5px' }}
        />
      </Paper>
    </div>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import {
//   DataGrid,
//   GridToolbar,
//   GridToolbarQuickFilter,
// } from "@mui/x-data-grid";
// import { BrowserRouter as useRouteMatch } from "react-router-dom";
// import Menutabs from "./Menutabs";
// import EmployeeData from "./EmployeeData";

// const VISIBLE_FIELDS = [
//   "FirstName",
//   "LastName",
//   "ID",
//   "Designation",
//   "JoiningDate",
//   "TeamLeader",
//   "Manager",
// ];

// export default function Employeelist() {
//   const match = useRouteMatch("/pim/addemployee");

//   const columns = React.useMemo(
//     () =>
//       VISIBLE_FIELDS.map((field) => ({
//         field,
//         headerName: field
//           .replace(/([a-z])([A-Z])/g, "$1 $2")
//           .replace(/\b\w/g, (char) => char.toUpperCase()), 
//         width: 150,
//       })),
//     []
//   );

//   return (
//     <div>
//       {match && <Menutabs />}
//       <Box sx={{ height: 530, width: 1, }}>
//         <DataGrid
//           rows={EmployeeData}
//           columns={columns}
//           disableColumnFilter
//           disableColumnSelector
//           disableDensitySelector
//           slots={{ toolbar: GridToolbar }}
//           slotProps={{
//             toolbar: {
//               showQuickFilter: true,
//             },
//           }}
//           className="bg-white"
//         />
//       </Box>
//     </div>
//   );
// }
