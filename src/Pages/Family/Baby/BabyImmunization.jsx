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
import DisplaySidebar from "../../../Components/DisplaySidebar";

function BabyImmunization() {
  const [vaccineData, setVaccineData] = useState({
    vaccineName: "",
    ageForVaccine: "",
    vaccineDate: "",
    batchNo: "",
    adverseEffects: "",
  });

  const [errors, setErrors] = useState({});
  const [vaccineList, setVaccineList] = useState([
    {
      vaccineName: "DTaP",
      ageForVaccine: "2 months",
      vaccineDate: "2022-01-15",
      batchNo: "12345",
      adverseEffects: "None",
    },
    {
      vaccineName: "HepB",
      ageForVaccine: "Birth",
      vaccineDate: "2022-02-10",
      batchNo: "67890",
      adverseEffects: "Fever",
    },
    {
      vaccineName: "Polio",
      ageForVaccine: "2 months",
      vaccineDate: "2022-03-05",
      batchNo: "54321",
      adverseEffects: "Mild discomfort",
    },
    {
      vaccineName: "MMR",
      ageForVaccine: "12 months",
      vaccineDate: "2022-04-20",
      batchNo: "98765",
      adverseEffects: "Rash",
    },
  ]);

  const handleVaccineAdd = () => {
    // Validate vaccine data
    const vaccineErrors = validateVaccineForm(vaccineData);
    if (Object.keys(vaccineErrors).length > 0) {
      setErrors(vaccineErrors);
      return;
    }

    // Add vaccine to list
    setVaccineList([...vaccineList, vaccineData]);
    setVaccineData({
      vaccineName: "",
      ageForVaccine: "",
      vaccineDate: "",
      batchNo: "",
      adverseEffects: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVaccineData({ ...vaccineData, [name]: value });
  };

  const validateVaccineForm = (data) => {
    let errors = {};

    if (!data.vaccineName) {
      errors.vaccineName = "Vaccine Name is required";
    }

    if (!data.ageForVaccine) {
      errors.ageForVaccine = "Age for Vaccine is required";
    }

    if (!data.vaccineDate) {
      errors.vaccineDate = "Vaccine Date is required";
    }

    if (!data.batchNo) {
      errors.batchNo = "Batch No. is required";
    }

    return errors;
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
            <DisplaySidebar />
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
                Add Baby Vaccination
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
              {/* Rest of the vaccine details section */}
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Vaccine Name"
                    name="vaccineName"
                    label="Vaccine Name"
                    value={vaccineData.vaccineName}
                    onChange={handleChange}
                    error={!!errors.vaccineName}
                    helperText={errors.vaccineName}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Age for Vaccine"
                    name="ageForVaccine"
                    label="Age for Vaccine"
                    value={vaccineData.ageForVaccine}
                    onChange={handleChange}
                    error={!!errors.ageForVaccine}
                    helperText={errors.ageForVaccine}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    type="date"
                    placeholder="Vaccine Date"
                    name="vaccineDate"
                    //label="Vaccine Date"
                    value={vaccineData.vaccineDate}
                    onChange={handleChange}
                    error={!!errors.vaccineDate}
                    helperText={errors.vaccineDate}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Batch No."
                    name="batchNo"
                    label="Batch No."
                    value={vaccineData.batchNo}
                    onChange={handleChange}
                    error={!!errors.batchNo}
                    helperText={errors.batchNo}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    placeholder="Adverse Effects"
                    name="adverseEffects"
                    label="Adverse Effects"
                    value={vaccineData.adverseEffects}
                    onChange={handleChange}
                    error={!!errors.adverseEffects}
                    helperText={errors.adverseEffects}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleVaccineAdd}
                    style={{ marginTop: "1em" }}
                  >
                    Add Vaccine
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* Display Vaccine Details */}
            <Box
              sx={{ width: "100%", marginTop: "2em", paddingBottom: "80px" }}
            >
              <div>
                <span className="text-xl text-[#2A777C] text-center font-bold">
                  Baby Vaccination Details
                </span>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead
                    style={{
                      backgroundColor: "#00A9BB",
                      color: "white",
                    }}
                  >
                    <TableRow>
                      <TableCell>Vaccine Name</TableCell>
                      <TableCell>Age for Vaccine</TableCell>
                      <TableCell>Vaccine Date</TableCell>
                      <TableCell>Batch No.</TableCell>
                      <TableCell>Adverse Effects</TableCell>
                      <TableCell>Vaccine Referrals</TableCell>{" "}
                      {/* New Column */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vaccineList.map((vaccine, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {vaccine.vaccineName}
                        </TableCell>
                        <TableCell>{vaccine.ageForVaccine}</TableCell>
                        <TableCell>{vaccine.vaccineDate}</TableCell>
                        <TableCell>{vaccine.batchNo}</TableCell>
                        <TableCell>{vaccine.adverseEffects}</TableCell>
                        <TableCell>
                          {/* Button for Vaccine Referrals */}
                          <Link to="/family/babyDashboard/immunization/referels">
                            <Button variant="contained" color="primary">
                              Add Referels
                            </Button>
                          </Link>
                        </TableCell>
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

export default BabyImmunization;
