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
import { MdOutlineAddCircle } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";

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
      width: 80,
      // display: "flex",
      // alignItems: "center",
      // justifyItems: "center",
      text: "center",
      borderRadius: 7,
      border: 0,
      // height: "fit-content",
      padding: 5,
      fontSize: 11,
      fontWeight: "bold",
      marginTop: 12,
      marginBottom: 10,
      // color: "white",
    },
    "& .pending": {
      backgroundColor: "#fee2e2",
      color: "#f87171",
    },
    "& .inProgress": {
      backgroundColor: "#fef3c7",
      color: "#fbbf24",
    },
    "& .completed": {
      backgroundColor: "#bbf7d0",
      color: "#22c55e",
    },
  },
  searchContainer: {
    borderRadius: 7,
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    fontFamily: "euclid",
    marginLeft: 7,
    padding: 2,
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
      <div className="bg-white rounded-md  px-2 py-1 flex  items-center justify-between sticky top-0">
        <div className="flex items-center">
          <div
            className={`${classes.searchContainer} bg-sky-50 mr-2  flex  h-full py-1 `}
          >
            <InputBase
              placeholder="Search by Client Name, Id "
              className={`${classes.searchInput} md:w-96`}
              value={searchQuery}
              onChange={handleSearchChange}
              inputProps={{ style: { fontSize: 14 } }}
            />
          </div>
          <Link
            to="/projects/addproject"
            className="bg-sky-50 rounded-md p-2.5 flex items-center gap-2"
          >
            <Tooltip title="Add Project" placement="top" arrow>
              <div>
                <MdOutlineAddCircle fontSize={20} />
              </div>
            </Tooltip>
          </Link>
        </div>
        <div className="">
          <TablePagination
            rowsPerPageOptions={[10, 25, { label: "All", value: -1 }]}
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
          style={{ maxHeight: "100%" }}
          className="scrollbar-hide mt-2 h-[85vh] md:h-[79vh]"
        >
          <Table>
            <TableHead className="sticky top-0">
              <TableRow className={classNames("bg-sky-50 ", classes.root)}>
                <TableCell>Project Id</TableCell>
                <TableCell>Project Name</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell>Business Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Deadline</TableCell>
                <TableCell>Assigned To</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={`${classNames(classes.bodyroot)}`}>
              {(rowsPerPage > 0
                ? filteredData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredData
              ).map((client) =>
                client.projects.map((project) => (
                  <TableRow key={project.projectid} className="">
                    <TableCell>{project.projectid}</TableCell>
                    <TableCell>{project.projectname}</TableCell>
                    <TableCell>{client.clientname}</TableCell>
                    <TableCell>{client.businessname}</TableCell>
                    <Tooltip
                      title={"Work " + getStatusLabel(project.status)}
                      placement="top"
                      arrow
                    >
                      <TableCell
                        className={`statusCell cursor-pointer ${getStatusColor(
                          project.status
                        )} `}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {getStatusLabel(project.status)}
                      </TableCell>
                    </Tooltip>
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
