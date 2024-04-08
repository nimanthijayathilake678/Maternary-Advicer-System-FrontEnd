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
function BabyNewBornHelath() {
  const [babyData, setBabyData] = useState({
    babyNum: "",
    skinColor: "",
    temperature: 0,
    naturePecan: "",
    breastFeeding: "",
    fecesColor: "",
    examineDate: "",
  });

  const [babyList, setBabyList] = useState([]);

  const handleBabyAdd = () => {
    setBabyList([...babyList, babyData]);
    setBabyData({
      babyNum: "",
      skinColor: "",
      temperature: 0,
      naturePecan: "",
      breastFeeding: "",
      fecesColor: "",
      examineDate: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBabyData({ ...babyData, [name]: value });
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
          {/* Baby Details Section */}
          <Grid
            item
            xs={9}
            style={{ paddingTop: "100px", paddingRight: "200px" }}
          >
            {/* Header */}
            <div>
              <span className="text-xl text-[#2A777C] text-center font-bold">
                New Born Helath
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
              {/* Rest of the baby details section */}
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Baby Number"
                    name="babyNum"
                    label="Baby Number"
                    value={babyData.babyNum}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Skin Color"
                    name="skinColor"
                    label="Skin Color"
                    value={babyData.skinColor}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    type="number"
                    placeholder="Temperature"
                    name="temperature"
                    label="Temperature in Celcius"
                    value={babyData.temperature}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Nature Pecan"
                    name="naturePecan"
                    label="Nature Pecan"
                    value={babyData.naturePecan}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Breast Feeding"
                    name="breastFeeding"
                    label="Breast Feeding"
                    value={babyData.breastFeeding}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Feces Color"
                    name="fecesColor"
                    label="Feces Color"
                    value={babyData.fecesColor}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    type="date"
                    name="examineDate"
                    //label="Examine Date"
                    value={babyData.examineDate}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleBabyAdd}
                    style={{ marginTop: "1em" }}
                  >
                    Add Examine record
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* Display Baby Details */}
            <Box
              sx={{ width: "100%", marginTop: "2em", paddingBottom: "80px" }}
            >
              <div>
                <span className="text-xl text-[#2A777C] text-center font-bold">
                  New Born Helath Details
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
                      <TableCell>Skin Color</TableCell>
                      <TableCell>Temperature</TableCell>
                      <TableCell>Nature Pecan</TableCell>
                      <TableCell>Breast Feeding</TableCell>
                      <TableCell>Feces Color</TableCell>
                      <TableCell>Examine Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {babyList.map((baby, index) => (
                      <TableRow key={index}>
                        <TableCell>{baby.babyNum}</TableCell>
                        <TableCell>{baby.skinColor}</TableCell>
                        <TableCell>{baby.temperature}</TableCell>
                        <TableCell>{baby.naturePecan}</TableCell>
                        <TableCell>{baby.breastFeeding}</TableCell>
                        <TableCell>{baby.fecesColor}</TableCell>
                        <TableCell>{baby.examineDate}</TableCell>
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

export default BabyNewBornHelath;
