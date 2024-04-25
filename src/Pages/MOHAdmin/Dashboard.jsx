import React, { useEffect, useState } from "react";
import "../../css/MOHAdmin/MOHDashboard.css";
import { Box, Grid, IconButton } from "@mui/material";
import Header from "../../Components/Header";
import { Search } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import medicare from "../../Assest/Lottie/medicare.json";
import DBMS from "../../Assest/Lottie/DBMS.json";
import midwifeReg from "../../Assest/Lottie/midwieReg.json";
import notification from "../../Assest/Lottie/notification.json";
import reports from "../../Assest/Lottie/reports.json";
import Lottie from "lottie-react";
import Calendar from "../../Components/Calendar";
import Nav from "../../Components/Nav";
import InputBase from "@mui/material/InputBase";
import clinicDateViewer from "../../Components/ClinicDateViewer";
import axios from "axios";
import { getClinicDates } from "../../Services/ClinicSchedule";
import SuccessAlert from "../../Components/SuccessMsg";
import admin from "../../Assest/Lottie/adminPanel.json";
import { FaTrashAlt } from "react-icons/fa";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SideBar from "../../Components/SideBar";
import { Typography } from "@mui/material";
import DisplaySidebar from "../../Components/DisplaySidebar";







function MOHDashboard() {

  const VISIBLE_FIELDS = [
    
      
    "area",
    "description",
    "starttime",
    "date"
];
  const dummyClinicDates = [
    {
      id: 1,
      area: "Mathara",
      description: "General checkup",
      date: "2024-04-25",
      starttime: "09:00 AM",
    },
    {
      id: 2,
      area: "Colombo",
      description: "Vaccination",
      date: "2024-04-26",
      starttime: "10:30 AM",
    },
    {
      id: 3,
      area: "Galle",
      description: "Dental checkup",
      date: "2024-04-27",
      starttime: "02:00 PM",
    },
    // Add more dummy data as needed
  ];

  //const [clinicDates, setclinicDates] = useState(dummyClinicDates);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  //const [search, setSearch] = useState("");

  

  const [customDataset, setCustomDataset] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClinicDates();
        // Check if the response is a redirection (status code 3xx)
        if (response.status >= 300 && response.status < 400) {
          // Get the new location from the "Location" header
          const newLocation = response.headers.location;
          // Make another request to the new location
          const newDataResponse = await axios.get(newLocation);
          // Process the new data response
          const newData = newDataResponse.data;
          // Update state or do other actions with the new data
          setCustomDataset(newData);
        } else {
          // If it's not a redirection, process the response as usual
          const data = response.data.map((row, index) => ({
            id: index + 1,
            ...row,
          }));
          setCustomDataset(data);
        }
      } catch (error) {
        console.log("Error getting data:", error);
      }
    };
    fetchData();
  }, []);
 

  return (
    <div style={{display:"flex"}}>
      <DisplaySidebar />
      <Box ml="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Hello" subtitle="Welcome to your dashboard" />

          {/* SEARCH BOX */}
          <Box
            display="flex"
            bgcolor={"#e4e5e2"}
            borderRadius={"3px"}
            marginRight={"20px"}
          >
            
          </Box>
        </Box>
        <div>
          <div className="main-cards">
            <NavLink to="/moh/register" className="card">
              <div className="card-inner">
                <h3>User Register</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={DBMS} />
                </div>
              </div>
            </NavLink>

            <NavLink to="/moh/view" className="card">
              <div className="card-inner">
                <h3>View Users</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={midwifeReg} />
                </div>
              </div>
            </NavLink>

            <NavLink to="/moh/clinic" className="card">
              <div className="card-inner">
                <h3>Clinic Schedule</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={medicare} />
                </div>
              </div>
            </NavLink>
            
          </div>
          <div className="dashbottom">
            <div className="calender">
              <Calendar />
            </div>

          
            <div style={{ flex: 1, overflowX: "hidden" }}>
          <div style={{ height: "20vh", width: "85%", marginLeft:"50px"}}>
            <Typography
              variant="h5"
              style={{
                marginBottom: "10px",
                color: "#2A777C",
                paddingBottom: "60px",
                paddingLeft: "10px",
                paddingTop: "40px",
              }}
            >
              Clinic Dates
            </Typography>

            <DataGrid
              autoHeight
              rows={customDataset}
              columns={VISIBLE_FIELDS.map((field) => ({
                field,
                headerName: field,
                width: 130, // Adjust width as needed
              }))}
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        </div>





            <div>
              <Lottie animationData={admin} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default MOHDashboard;
