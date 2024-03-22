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
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList, FaSearch } from "react-icons/fa";
import clientAvatar from "../../assets/images/clientAvatar.png";
import { motion } from "framer-motion";

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

export default function ClientCard({ clients }) {
  const classes = useStyles();
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(clientsData);

  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredData(clientsData);
    } else {
      const filtered = clientsData.filter(
        (client) =>
          client.clientid.toString().includes(searchTerm) || // Convert clientid to string before applying includes
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
        <div
          className={`${classes.searchContainer} bg-sky-50 mr-2  flex justify-between h-full py-1 `}
        >
          <InputBase
            placeholder="Search by client name, id "
            className={`${classes.searchInput} `}
            value={searchTerm}
            onChange={handleInputChange}
            inputProps={{ style: { fontSize: 14 } }}
          />
          <div
            className="hover:bg-sky-100 w-fit mr-1 p-2 rounded-md flex  items-center cursor-pointer"
            // onClick={handleSearch} // Remove the onClick event
          >
            <FaSearch fontSize={17} />
          </div>
        </div>
        {/* <hr className="w-0.5 h-5 bg-gray-500 rounded-full" /> */}
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
        <Grid container spacing={1} className={`${classes.fullScreenGrid} `}>
          {filteredData.map((client) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={client.clientid}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className={`${classes.card}`}>
                  <CardContent className="flex flex-col gap-4 hover:shadow-xl group ">
                    <div className="flex items-center gap-4 group-hover:bg-sky-50 py-2 group-hover:px-2 duration-300 group-hover:rounded-md">
                      <img src={clientAvatar} width={50} />
                      <div className={classes.pos}>
                        <h4 className="font-bold">{client.businessname}</h4>
                        <h4 className="text-xs">{client.clientname}</h4>
                      </div>
                    </div>
                    <hr className="w-full h-[1px] bg-gray-300" />
                    {/* <h1
                    className={`${classes.title} w-fit bg-sky-100 py-1 px-2 rounded-md text-xs`}
                  >
                    Client ID: {client.clientid}
                  </h1> */}
                    <div className="flex flex-col gap-2 text-[.85rem]">
                      <div className="flex ">
                        <label className="w-20">Client ID -</label>
                        <p>{client.clientid}</p>
                      </div>
                      <div className="flex ">
                        <label className="w-20">Phone -</label>
                        <p>{client.phone}</p>
                      </div>
                      <div className="flex ">
                        <label className="w-20">Email -</label>
                        <p>{client.email}</p>
                      </div>
                      <div className="flex ">
                        <label className="w-20">GSTN -</label>
                        <p>{client.gstn}</p>
                      </div>
                      <div className="flex ">
                        <label className="w-20">Projects -</label>
                        <p>{client.projects.length}</p>
                      </div>
                      <div className="flex">
                        <label className="w-20">Project -</label>
                        <p>
                          {client.projects.length > 0 &&
                            client.projects[0].projectname}
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
        <Box className={classes.listViewContainer}>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((client) => (
                  <TableRow key={client.clientid}>
                    <TableCell>{client.clientname}</TableCell>
                    <TableCell>{client.clientid}</TableCell>
                    <TableCell>{client.businessname}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.gstn}</TableCell>
                    <TableCell>{client.projects.length}</TableCell>
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
