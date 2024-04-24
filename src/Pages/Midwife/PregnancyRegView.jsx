import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Header from "../../Components/Header";

export default function PregnancyRegView() {
  
  const [pBasicInfo, setpBasicInfo] = useState({
    P_Reg_Num: "",
    P_Reg_Location: "MOH X",
    P_Reg_Date: "2023-10-02",
    couple_id: "67890",
    C_Reg_Date: "2022-12-08",
    P_Grama_Division: "Division Z",
    P_MOH_Division: "Division X",
    P_PHM_Division: "Division Y",
    P_Hospital_Clinic_Name: "ABC Hospital",
    P_Consultant_Name: "A.H. Silva",
    P_Field_Clinic_Name: "Pregnancy Clinic ",
    P_Mother_Name: "K. Perera",
    P_Father_Name: "V. Perera",
    P_Telephone: "011-1245637",
    P_Address: "No.12, Flower Rd, Colombo",
  })

  const[pPersonalInfoF, setpPersonalInfoF]=useState({
    pregnancy_id:"",
    couple_id:"",
    Gender:"",
    P_Age:"",
    P_Marriage_Age:"",
    P_Occupation:"",
    P_Distance_To_Workspace:"",
}
  )

  const[pPersonalInfoM, setpPersonalInfoM]=useState({
    pregnancy_id:"",
    couple_id:"",
    Gender:"",
    P_Age:"",
    P_Marriage_Age:"",
    P_Occupation:"",
    P_Distance_To_Workspace:"",
}
  )
  

  useEffect(() => {
 
    fetchPregRegInfo();
  }, []); // Empty dependency array to run only once on component mount

  const fetchPregRegInfo = () => {
    
    const mockResponse = {
      pBasicInfo:{
        P_Reg_Num: "12345",
        P_Reg_Location: "Matara",
        P_Reg_Date: "2023-10-02",
        couple_id: "27203",
        C_Reg_Date: "2022-12-08",
        P_Grama_Division: "Wellamadama",
        P_MOH_Division: "Matara",
        P_PHM_Division: "Kotuwegoda",
        P_Hospital_Clinic_Name: "Pregnancy Health Clinic",
        P_Consultant_Name: "A.H. Silva",
        P_Field_Clinic_Name: "Pregnancy Field Clinic ",
        P_Mother_Name: "Asani Fernando",
        P_Father_Name: "Kamal Fernando",
        P_Telephone: "011-1245637",
        P_Address: "67/1,Wallamadama,Matara",
      },
      pPersonalInfoF:{
        Gender:"Female",
        P_Age:"28",
        P_Marriage_Age:"26",
        P_Occupation:"Teacher",
        P_Distance_To_Workspace:"2km",
      },
      pPersonalInfoM:{
        Gender:"Male",
        P_Age:"30",
        P_Marriage_Age:"28",
        P_Occupation:"Civil Engineer",
        P_Distance_To_Workspace:"5km",
      },
      

    };

    // Update state with the retrieved data
    setpBasicInfo(mockResponse.pBasicInfo);
    
    setpPersonalInfoF(mockResponse.pPersonalInfoF);
    setpPersonalInfoM(mockResponse.pPersonalInfoM);

  };

  // Define getFieldName function
  function getFieldName(key) {
    switch (key) {
      case "P_Reg_Num":
        return "Registration Number";
      case "P_Reg_Location":
        return"Registration Location";
      case "P_Reg_Date":
        return "Registration Date";
      case "couple_id":
          return "Couple ID";
      case "C_Reg_Date":
        return "Couple Registration Date";
      case "P_Grama_Division":
        return "Grama Niladari Division";
      case "P_MOH_Division":
        return "MOH Division";
      case "P_PHM_Division":
        return "PHM Division";
      case "P_Hospital_Clinic_Name":
        return "Hospital Clinic Name";
      case "P_Consultant_Name":
        return "Consultant Name";
      case "P_Field_Clinic_Name":
        return "Field Clinic Name";
      case "P_Mother_Name":
        return "Mother Name";
      case "P_Father_Name":
        return "Father Name";
      case "P_Telephone":
        return "Telephone";
      case "P_Address":
        return "Address";
      case "Gender":
        return "Gender";
      case "P_Age":
        return "Age at pregnancy";
      case "P_Marriage_Age":
        return "Marriage Age";
      case "P_Occupation":
        return "Occupation";
      case "P_Distance_To_Workspace":
        return "Distance To Workspace"
      default:
        return key;
    }
  }

  return (
    <Grid container spacing={3}>
      <Box ml={5} mt={5}>
        <Header title="Pregnancy Registration Information"/>
      </Box>
      {/* Main content */}
      <Grid item xs={9} paddingRight={"300px"} paddingTop={"200px"}>
        <div style={{ paddingLeft: "20px", paddingTop: "80px" }}>
          <div>
          <Typography variant='h6' color="#2a777c">Pregnancy Basic Information</Typography>

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
                {Object.keys(pBasicInfo).map((key) => (
                  <TableRow key={key}>
                    <TableCell>{getFieldName(key)}</TableCell>
                    <TableCell>{pBasicInfo[key]}</TableCell>
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
            <Typography variant='h6' color="#2a777c">Pregnancy Personal Information</Typography>

          </div>
          <TableContainer component={Paper}>
            <Table aria-label="p personal info table">
              <TableHead>
                <TableRow>
                  <TableCell>Field</TableCell>
                  <TableCell>Wife</TableCell>
                  <TableCell>Husband</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(pPersonalInfoF,pPersonalInfoM).map((key) => (
                  <TableRow key={key}>
                    <TableCell>{getFieldName(key)}</TableCell>
                    <TableCell>{pPersonalInfoF[key]}</TableCell>
                    <TableCell>{pPersonalInfoM[key]}</TableCell>

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
