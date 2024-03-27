import React, { useState } from "react";
import clientsData from "./MasterClientsProjects.json";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputBase,
} from "@mui/material";
import { Card, CardContent, Grid, Box } from "@mui/material";
import clientAvatar from "../../assets/images/clientAvatar.png";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    "& .MuiTypography-root": {
      fontFamily: "euclid",
      fontSize: 14,
    },
    "& .MuiTableCell-root": {
      fontFamily: "euclid",
      fontSize: 14,
    },
    "& .MuiInputBase-input": {
      fontFamily: "euclid",
      fontSize: ".9rem",
    },
  },
  columnHeader: {
    fontWeight: "bold",
  },
  listViewContainer: {
    textAlign: "right",
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
  title: {
    fontWeight: "bold",
  },
  fullScreenGrid: {
    marginBottom: 80,
  },
});

function GenerateLink({ client, navigate }) {
  const handleClick = () => {
    navigate({
      pathname: "/projects/viewprojects",
      search: `?client=${encodeURIComponent(JSON.stringify(client))}`,
    });
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-md  group-hover:flex group-hover:items-start cursor-pointer"
    >
      <div className="hover:bg-sky-100 rounded-md hidden group-hover:flex p-3">
        <FaExternalLinkAlt />
      </div>
    </div>
  );
}

function GenerateLinkForList({ client, navigate }) {
  const handleClick = () => {
    navigate({
      pathname: "/projects/viewprojects",
      search: `?client=${encodeURIComponent(JSON.stringify(client))}`,
    });
  };

  return (
    <div onClick={handleClick} className="rounded-md   cursor-pointer">
      <div className="hover:bg-sky-100 rounded-md w-fit p-3">
        <FaExternalLinkAlt />
      </div>
    </div>
  );
}

export default function ClientCard({ clients }) {
  const classes = useStyles();
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(clientsData);
  const location = useLocation(); // useLocation hook to get current location
  const navigate = useNavigate(); // Define the navigate function

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredData(clientsData);
    } else {
      const filtered = clientsData.filter(
        (client) =>
          client.clientid.toString().includes(searchTerm.toLowerCase()) ||
          client.clientname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          client.businessname
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          client.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === "") {
      setFilteredData(clientsData);
    } else {
      handleSearch(); // Call the handleSearch function to filter the data as the user types
    }
  };

  return (
    <div className={classes.root}>
      <div
        style={{ marginBottom: 10 }}
        className="bg-white rounded-md p-2 flex justify-between items-center"
      >
        <div className="flex items-center">
          <div
            className={`${classes.searchContainer} bg-sky-50 mr-2  flex  h-full py-1 `}
          >
            <InputBase
              placeholder="Search by Client Name, Id "
              className={`${classes.searchInput} md:w-96`}
              value={searchTerm}
              onChange={handleInputChange}
              inputProps={{ style: { fontSize: 14 } }}
            />
          </div>
          <div className="bg-sky-50 rounded-md p-2.5 flex items-center gap-2">
            <Tooltip title="Add Client" placement="right" arrow>
              <Link to="/clients/addclient">
                <MdOutlineAddCircle fontSize={20} />
              </Link>
            </Tooltip>
          </div>
        </div>
        <div className="ml-2">
          <div
            onClick={toggleViewMode}
            className="mr-2 bg-sky-100 p-2 rounded-md cursor-pointer"
          >
            {viewMode === "grid" ? (
              <FaThList fontSize={17} color="black" />
            ) : (
              <BsFillGrid3X3GapFill fontSize={17} color="black" />
            )}
          </div>
        </div>
      </div>
      {viewMode === "grid" ? (
        <Grid container spacing={1.5} className={`${classes.fullScreenGrid} `}>
          {filteredData.map((client, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={`${client.clientid}-${index}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className={`${classes.card} `}>
                  <CardContent className="flex flex-col gap-4 hover:shadow-xl group ">
                    <div className="flex  justify-between group-hover:bg-sky-50 py-2 group-hover:px-2 duration-300 group-hover:rounded-md">
                      <div className="flex items-center gap-4">
                        <img src={clientAvatar} width={50} alt="Clientlogo" />
                        <div className={classes.pos}>
                          <h4 className="font-bold">{client.businessname}</h4>
                          <h4 className="text-xs">{client.clientname}</h4>
                        </div>
                      </div>
                      <GenerateLink client={client} navigate={navigate} />
                    </div>
                    <hr className="w-full h-[1px] bg-gray-300" />
                    <div className="flex flex-col gap-2 text-[.85rem]">
                      <div className="flex ">
                        <label className="w-20 font-semibold">Client ID </label>
                        <p>- {client.clientid}</p>
                      </div>
                      <div className="flex ">
                        <label className="w-20 font-semibold">Phone </label>
                        <p>- {client.phone}</p>
                      </div>
                      <div className="flex ">
                        <label className="w-20 font-semibold">Email </label>
                        <p>- {client.email}</p>
                      </div>
                      <div className="flex ">
                        <label className="w-20 font-semibold">GSTN </label>
                        <p>- {client.gstn}</p>
                      </div>
                      <div className="flex ">
                        <label className="w-20 font-semibold">Projects </label>
                        <p>- {client.projects.length}</p>
                      </div>
                      <div className="flex">
                        <label className="w-20 font-semibold">Project </label>
                        <p>
                          -
                          {client.projects.length > 0 &&
                            client.projects[0].projectname}
                        </p>
                      </div>
                      <div className="flex">
                        <label className="w-20 font-semibold">Status </label>
                        <p>
                          {" "}
                          {client.projects.length > 0 && (
                            <span
                              style={{
                                backgroundColor:
                                  client.projects[0].status === "0"
                                    ? "#f87171"
                                    : client.projects[0].status === "1"
                                    ? "#fcd34d"
                                    : "#22c55e",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 11,
                                padding: "3px 8px",
                                borderRadius: "5px",
                              }}
                            >
                              {client.projects[0].status === "0"
                                ? "Pending"
                                : client.projects[0].status === "1"
                                ? "In Progress"
                                : "Completed"}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box className={`${classes.listViewContainer} w-[96vw] md:w-auto`}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead className="bg-sky-50">
                <TableRow>
                  <TableCell className={classes.columnHeader}>
                    Client Name
                  </TableCell>
                  <TableCell className={classes.columnHeader}>
                    Client ID
                  </TableCell>
                  <TableCell className={classes.columnHeader}>
                    Business Name
                  </TableCell>
                  <TableCell className={classes.columnHeader}>Phone</TableCell>
                  <TableCell className={classes.columnHeader}>Email</TableCell>
                  <TableCell className={classes.columnHeader}>GSTN</TableCell>
                  <TableCell className={classes.columnHeader}>
                    Projects
                  </TableCell>
                  <TableCell className={classes.columnHeader}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((client, index) => (
                  <TableRow key={client.clientid} className="group">
                    <TableCell>{client.clientname}</TableCell>
                    <TableCell>{client.clientid}</TableCell>
                    <TableCell>{client.businessname}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.gstn}</TableCell>
                    <TableCell>{client.projects.length}</TableCell>
                    <Tooltip title="View Details" placement="top" arrow>
                      <TableCell>
                        <GenerateLinkForList
                          client={client}
                          navigate={navigate}
                          className="flex"
                        />
                      </TableCell>
                    </Tooltip>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  );
}
