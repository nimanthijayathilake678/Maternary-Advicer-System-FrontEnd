import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SideBar from "../../Components/SideBar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DisplaySidebar from "../../Components/DisplaySidebar";
import axios from "axios";

const VISIBLE_FIELDS = [
       
        "pregnancyRegNo",
        "eligibilityRegNo",
        "poa" ,
        "urine",
        "oedema",
        "bloodPressure",
        "fundalHeight",
        "foetalLie",
        "presentation",
        "fm",
        "fhs",
        "ebw",
        "crl",
        "gestSac",
        "bpd",
        "hc",
        "ac",
        "fl",
        "liqour",
        "placenta",
        "averagePOA",
        "anyother",
        "nextVisitDate",
        "doctorId",
        "designation",
];

export default function PatientHistory() {
  const [customDataset, setCustomDataset] = useState([]);
  
/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/hospitalClinicCare",
          {
            validateStatus: () => {
              return true;
            },
          }
        );
        const data = response.data.map((row, index) => ({
          id: index + 1, // Generate unique id for each row
          ...row,
        }));
        setCustomDataset(data);
      } catch (error) {
        console.log("Error getting data:", error);
      }
    };

    fetchData();
  }, []);
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/hospitalClinicCare"
        );
  
        if (response.status === 302) {
          const data = response.data.map((row, index) => ({
            id: index + 1, // Generate unique id for each row
            ...row,
          }));
          setCustomDataset(data);
        } else {
          console.error("Failed to fetch data. Status code:", response.status);
        }
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };
  
    fetchData();
  }, []);

  
  

  return (
    <Box sx={{ display: "flex" }}>
      <div style={{ display: "flex", height: "100vh", overflowX: "hidden" }}>
        <DisplaySidebar />
        <div style={{ flex: 1, overflowX: "hidden" }}>
          <div style={{ height: "100vh", width: "100%" }}>
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
              Patients History
            </Typography>

            <DataGrid
              autoHeight
              rows={customDataset}
              columns={VISIBLE_FIELDS.map((field) => ({
                field,
                headerName: field,
                width: 150, // Adjust width as needed
              }))}
             components={{ Toolbar: GridToolbar }}   
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
