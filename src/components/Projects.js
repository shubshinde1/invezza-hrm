import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  InputBase,
} from "@mui/material";
import { styled } from "@mui/system";
import data from "./client/MasterClientsProjects.json";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

const SearchInput = styled(InputBase)({
  borderRadius: "7px",
  padding: "6px 8px",
  marginRight: "16px",
  fontFamily: "Euclid",
  "& input": {
    fontSize: ".9rem",
  },
});

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-root": {
      fontFamily: "euclid",
      fontWeight: "bold",
    },
  },
  bodyroot: {
    "& .MuiTableCell-root": {
      fontFamily: "euclid",
    },
    "& .statusCell": {
      display: "flex",
      // alignItems: "center",
      justifyItems: "center",
      text: "center",
      borderRadius: 7,
      height: "fit-content",
      padding: 5,
      fontSize: 12,
      fontWeight: "bold",
      marginTop: 11,
      marginBottom: 11,
      color: "white",
    },
    "& .pending": {
      backgroundColor: "#f87171",
    },
    "& .inProgress": {
      backgroundColor: "#fcd34d",
    },
    "& .completed": {
      backgroundColor: "#22c55e",
    },
  },
});

export default function Projects() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(0); // Reset page when search query changes
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 0:
        return "Pending";
      case 1:
        return "In Progress";
      case 2:
        return "Completed";
      default:
        return "";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 0:
        return "pending";
      case 1:
        return "inProgress";
      case 2:
        return "completed";
      default:
        return "";
    }
  };

  const filteredData = data.filter((client) =>
    client.projects.some((project) =>
      Object.values(project).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  );

  return (
    <div className="w-[96vw] md:w-auto">
      <div className="bg-white rounded-md  px-2 py-1 flex  items-center justify-between">
        <div className="">
          <SearchInput
            placeholder="Search by Project name, id"
            value={searchQuery}
            onChange={handleSearchChange}
            className=" bg-sky-50 md:w-96"
          />
        </div>
        <div className="">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TableContainer
          component={Paper}
          style={{ maxHeight: "80vh" }}
          className="scrollbar-hide mb-20 mt-2"
        >
          <Table>
            <TableHead>
              <TableRow
                className={classNames("bg-sky-50 sticky top-0", classes.root)}
              >
                <TableCell>Project Id</TableCell>
                <TableCell>Project Name</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>Business Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Received Date</TableCell>
                <TableCell>Deadline</TableCell>
                <TableCell>Assigned To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classNames(classes.bodyroot)}>
              {(rowsPerPage > 0
                ? filteredData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredData
              ).map((client) =>
                client.projects.map((project) => (
                  <TableRow key={project.projectid}>
                    <TableCell>{project.projectid}</TableCell>
                    <TableCell>{project.projectname}</TableCell>
                    <TableCell>{client.clientname}</TableCell>
                    <TableCell>{client.businessname}</TableCell>
                    <TableCell
                      className={`statusCell ${getStatusColor(
                        project.status
                      )} `}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {getStatusLabel(project.status)}
                    </TableCell>
                    <TableCell>{project.receiveddate}</TableCell>
                    <TableCell>{project.deadline}</TableCell>
                    <TableCell>{project.associate}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </div>
  );
}
