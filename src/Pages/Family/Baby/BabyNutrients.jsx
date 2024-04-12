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
import { Formik, Form, Field, ErrorMessage } from "formik";
import DefaultButton from "../../../Components/Button/DefaultButton.jsx";
import { babyImmunizationSchema } from "../../../Pages/Validations/validation.js";
import BabyNutrientsService, {
  babynutrients,
} from "../../../Services/BabyNutrientsService.js";
import { useParams } from "react-router-dom";

function BabyNutrients() {
  const [nutrientData, setNutrientData] = useState({
    babynum: "",
    nutrientDate: "",
    nutrientBatchNo: "",
    ageForNutrientDate: 0,
    nutrientName: "",
  });

  const [nutrientList, setNutrientList] = useState([]);

  const handleNutrientAdd = () => {
    setNutrientList([...nutrientList, nutrientData]);
    setNutrientData({
      babynum: "",
      nutrientDate: "",
      nutrientBatchNo: "",
      ageForNutrientDate: 0,
      nutrientName: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNutrientData({ ...nutrientData, [name]: value });
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
          {/* Nutrient Details Section */}
          <Grid
            item
            xs={9}
            style={{ paddingTop: "100px", paddingRight: "200px" }}
          >
            {/* Header */}
            <div>
              <span className="text-xl text-[#2A777C] text-center font-bold">
                Baby Nutrients
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
              {/* Rest of the nutrient details section */}
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Baby Number"
                    name="babynum"
                    label="Baby Number"
                    value={nutrientData.babynum}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    type="date"
                    name="nutrientDate"
                    //label="Nutrient Date"
                    value={nutrientData.nutrientDate}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Nutrient Batch Number"
                    name="nutrientBatchNo"
                    label="Nutrient Batch Number"
                    value={nutrientData.nutrientBatchNo}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    type="number"
                    placeholder="Age for Nutrient Date"
                    name="ageForNutrientDate"
                    label="Age for Nutrient Date"
                    value={nutrientData.ageForNutrientDate}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Nutrient Name"
                    name="nutrientName"
                    label="Nutrient Name"
                    value={nutrientData.nutrientName}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleNutrientAdd}
                    style={{ marginTop: "1em" }}
                  >
                    Add Nutrient
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* Display Nutrient Details */}
            <Box
              sx={{ width: "100%", marginTop: "2em", paddingBottom: "80px" }}
            >
              <div>
                <span className="text-xl text-[#2A777C] text-center font-bold">
                  Baby Nutrients Details
                </span>
              </div>
              <TableContainer
                component={Paper}
                style={{ paddingBottom: "80px" }}
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
                      <TableCell>Nutrient Date</TableCell>
                      <TableCell>Nutrient Batch Number</TableCell>
                      <TableCell>Age for Nutrient Date</TableCell>
                      <TableCell>Nutrient Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {nutrientList.map((nutrient, index) => (
                      <TableRow key={index}>
                        <TableCell>{nutrient.babynum}</TableCell>
                        <TableCell>{nutrient.nutrientDate}</TableCell>
                        <TableCell>{nutrient.nutrientBatchNo}</TableCell>
                        <TableCell>{nutrient.ageForNutrientDate}</TableCell>
                        <TableCell>{nutrient.nutrientName}</TableCell>
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

export default BabyNutrients;
