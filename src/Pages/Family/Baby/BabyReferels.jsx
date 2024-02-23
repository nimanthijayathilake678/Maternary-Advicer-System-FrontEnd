import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/SideBar";

function BabyReferels() {
  const [vaccineData, setVaccineData] = useState({
    babynum: "",
    B_Immunization_Name: "",
    B_Referel_Reason: "",
    B_Referel_Place: "",
  });

  const [errors, setErrors] = useState({});
  const [vaccineList, setVaccineList] = useState([
    {
      babynum: "001",
      B_Immunization_Name: "DTaP",
      B_Referel_Reason: "Routine checkup",
      B_Referel_Place: "Local clinic",
    },
    {
      babynum: "002",
      B_Immunization_Name: "HepB",
      B_Referel_Reason: "Allergic reaction",
      B_Referel_Place: "Hospital",
    },
    // Add more dummy data as needed
  ]);

  const handleVaccineAdd = () => {
    // Validation logic can be added here if required

    // Add vaccine to list
    setVaccineList([...vaccineList, vaccineData]);
    // Reset vaccineData after adding
    setVaccineData({
      babynum: "",
      B_Immunization_Name: "",
      B_Referel_Reason: "",
      B_Referel_Place: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVaccineData({ ...vaccineData, [name]: value });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        flexDirection="column"
      >
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={3} display={"flex"}>
            <SideBar />
          </Grid>
          {/* Vaccine Details Section */}
          <Grid
            item
            xs={9}
            style={{ paddingTop: "100px", paddingRight: "200px" }}
          >
            {/* Header */}
            <div>
              <span className="text-xl text-[#2A777C] text-center font-bold">
                Baby Referrals
              </span>
            </div>
            <Box
              sx={{
                width: "100%",
                border: "1px solid #ccc",
                padding: "1em",
                paddingRight: "80px",
                display: "flex",
              }}
            >
              {/* Rest of the referral details section */}
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Baby Number"
                    name="babynum"
                    label="Baby Number"
                    value={vaccineData.babynum}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Immunization Name"
                    name="B_Immunization_Name"
                    label="Immunization Name"
                    value={vaccineData.B_Immunization_Name}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Referral Reason"
                    name="B_Referel_Reason"
                    label="Referral Reason"
                    value={vaccineData.B_Referel_Reason}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Referral Place"
                    name="B_Referel_Place"
                    label="Referral Place"
                    value={vaccineData.B_Referel_Place}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleVaccineAdd}
                    style={{ marginTop: "1em" }}
                  >
                    Add Referral
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* Display Referral Details */}
            <Box
              sx={{ width: "100%", marginTop: "2em", paddingBottom: "80px" }}
            >
              <div>
                <span className="text-xl text-[#2A777C] text-center font-bold">
                  Baby Referrals Details
                </span>
              </div>
              <TableContainer
                component={Paper}
                style={{ paddingBottom: "60px" }}
              >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead
                    style={{
                      backgroundColor: "#00A9BB",
                      color: "white",
                    }}
                  >
                    <TableRow>
                      <TableCell>Baby Number</TableCell>
                      <TableCell>Immunization Name</TableCell>
                      <TableCell>Referral Reason</TableCell>
                      <TableCell>Referral Place</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vaccineList.map((referral, index) => (
                      <TableRow key={index}>
                        <TableCell>{referral.babynum}</TableCell>
                        <TableCell>{referral.B_Immunization_Name}</TableCell>
                        <TableCell>{referral.B_Referel_Reason}</TableCell>
                        <TableCell>{referral.B_Referel_Place}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default BabyReferels;
