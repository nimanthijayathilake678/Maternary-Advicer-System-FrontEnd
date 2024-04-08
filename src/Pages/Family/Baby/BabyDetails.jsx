import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SideBar from "../../../Components/SideBar";
import { Typography } from "@mui/material";
import DisplaySidebar from "../../../Components/DisplaySidebar";

export default function BabyDetails() {
  const [babyDetails, setBabyDetails] = useState({
    B_Reg_Num: "12345",
    B_Reg_Date: "2024-02-25",
    B_MOH_Division: "Division A",
    B_FSHO_Division: "Division X",
    couple_id: "67890",
    pregnancy_id: "ABCDE",
    B_Name: "Baby Name",
    B_Mother_Age: 28,
  });

  const [additionalBabyDetails, setAdditionalBabyDetails] = useState({
    B_Age: 0,
    B_Blood_Group: "",
    B_Exam_Date: "",
    B_Growth: "",
    B_Worm: "No present",
    B_Hydration: false,
    B_Capillery_Filling: false,
    B_Pulse_Rate: false,
    B_HeartMurmers: false,
    B_FemoralPulse: false,
    B_RespiratoryRate: false,
    B_Grunting: false,
    B_IntercostalRecession: false,
    B_Tone: false,
    B_OFC: false,
    B_Frontenelle: false,
    B_Eyes: false,
    B_Scalp: false,
    B_Mouth: false,
    B_Palate: false,
    B_Ears: false,
    B_Abdomen: false,
  });

  useEffect(() => {
    // Fetch data from the backend using the baby registration number (B_Reg_Num)
    // Make an API request to retrieve the data
    fetchBabyDetails();
  }, []); // Empty dependency array to run only once on component mount

  const fetchBabyDetails = () => {
    // Mock API call, replace this with your actual API call
    // Here, you would make a request to your backend endpoint to retrieve baby details based on B_Reg_Num
    // Example endpoint: `/api/baby-details/${babyDetails.B_Reg_Num}`
    // Make sure your backend returns data in a format similar to babyDetails and additionalBabyDetails
    // Example response:
    // {
    //   babyDetails: {...},
    //   additionalBabyDetails: {...}
    // }
    const mockResponse = {
      babyDetails: {
        B_Reg_Num: "12345",
        B_Reg_Date: "2024-02-25",
        B_MOH_Division: "Division A",
        B_FSHO_Division: "Division X",
        couple_id: "67890",
        pregnancy_id: "ABCDE",
        B_Name: "Baby Name",
        B_Mother_Age: 28,
      },
      additionalBabyDetails: {
        B_Age: 1,
        B_Blood_Group: "A+",
        B_Exam_Date: "2024-03-01",
      },
    };

    // Update state with the retrieved data
    setBabyDetails(mockResponse.babyDetails);
    setAdditionalBabyDetails(mockResponse.additionalBabyDetails);
  };

  // Define getFieldName function
  function getFieldName(key) {
    switch (key) {
      case "B_Reg_Num":
        return "Registration Number";
      case "B_Reg_Date":
        return "Registration Date";
      case "B_MOH_Division":
        return "MOH Division";
      case "B_FSHO_Division":
        return "FSHO Division";
      case "couple_id":
        return "Couple ID";
      case "pregnancy_id":
        return "Pregnancy ID";
      case "B_Name":
        return "Baby Name";
      case "B_Mother_Age":
        return "Mother's Age";
      default:
        return key;
    }
  }

  return (
    <Grid container spacing={3}>
      {/* Sidebar */}
      <Grid item xs={3} display={"flex"}>
        <DisplaySidebar />
      </Grid>

      {/* Main content */}
      <Grid item xs={9} paddingRight={"300px"} paddingTop={"200px"}>
        <div style={{ paddingLeft: "20px", paddingTop: "80px" }}>
          <div>
            <span className="text-xl text-[#2A777C] text-center font-bold">
              Baby Basic Details
            </span>
          </div>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Field</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(babyDetails).map((key) => (
                  <TableRow key={key}>
                    <TableCell>{getFieldName(key)}</TableCell>
                    <TableCell>{babyDetails[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Additional Baby Details */}
        <div
          style={{
            paddingTop: "100px",
            paddingLeft: "20px",
            paddingBottom: "40px",
          }}
        >
          <div>
            <span className="text-xl text-[#2A777C] text-center font-bold">
              Baby Health Details
            </span>
          </div>
          <TableContainer component={Paper}>
            <Table aria-label="additional baby details table">
              <TableHead>
                <TableRow>
                  <TableCell>Field</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(additionalBabyDetails).map((key) => (
                  <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{additionalBabyDetails[key]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
    </Grid>
  );
}
