import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import SideBar from "../../../Components/SideBar";
import DisplaySidebar from "../../../Components/DisplaySidebar";

function BabyWeight() {
  const [babyData, setBabyData] = useState({
    BabyNum: "",
    ExamineDate: "",
    BabyAgeToDateOfExamine: "",
    BabyWeight: "",
  });

  const [babyList, setBabyList] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBabyData({ ...babyData, [name]: value });
  };

  const validateBabyWeightForm = (data) => {
    let errors = {};

    if (!data.BabyNum) {
      errors.BabyNum = "Baby Number is required";
    }

    if (!data.ExamineDate) {
      errors.ExamineDate = "Examine Date is required";
    }

    if (!data.BabyAgeToDateOfExamine) {
      errors.BabyAgeToDateOfExamine = "Baby Age To Date Of Examine is required";
    }

    if (!data.BabyWeight) {
      errors.BabyWeight = "Baby Weight is required";
    } else if (isNaN(data.BabyWeight) || data.BabyWeight <= 0) {
      errors.BabyWeight = "Baby Weight must be a valid positive number";
    }

    return errors;
  };

  const handleBabyAdd = () => {
    const babyErrors = validateBabyWeightForm(babyData);
    if (Object.keys(babyErrors).length > 0) {
      setErrors(babyErrors);
      return;
    }

    setBabyList([...babyList, babyData]);
    setBabyData({
      BabyNum: "",
      ExamineDate: "",
      BabyAgeToDateOfExamine: "",
      BabyWeight: "",
    });
    setErrors({});
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
          {/* Baby Weight Section */}
          <Grid
            item
            xs={9}
            style={{ paddingTop: "100px", paddingRight: "200px" }}
          >
            {/* Header */}
            <div>
              <span className="text-xl text-[#2A777C] text-center font-bold">
                Add Baby Weight
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
              {/* Rest of the baby weight section */}
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Baby Number"
                    name="BabyNum"
                    label="Baby Number"
                    value={babyData.BabyNum}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.BabyNum}
                    helperText={errors.BabyNum}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    type="date"
                    placeholder="Examine Date"
                    name="ExamineDate"
                    //label="Examine Date"
                    value={babyData.ExamineDate}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.ExamineDate}
                    helperText={errors.ExamineDate}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Baby Age To Date Of Examine In (M)"
                    name="BabyAgeToDateOfExamine"
                    label="Baby Age To Date Of Examine in Months"
                    value={babyData.BabyAgeToDateOfExamine}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.BabyAgeToDateOfExamine}
                    helperText={errors.BabyAgeToDateOfExamine}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Baby Weight(Kg)"
                    name="BabyWeight"
                    label="Baby Weight (Kg)"
                    value={babyData.BabyWeight}
                    onChange={handleChange}
                    fullWidth
                    error={!!errors.BabyWeight}
                    helperText={errors.BabyWeight}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleBabyAdd}
                    style={{ marginTop: "1em" }}
                  >
                    Add Baby Weight
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* Display Baby Weight Details */}
            <Box
              sx={{
                width: "100%",
                marginTop: "2em",
                paddingBottom: "80px",
                paddingTop: "100px",
              }}
            >
              <div>
                <span className="text-xl text-[#2A777C] text-center font-bold">
                  Baby Weight Details
                </span>
              </div>
              <LineChart
                width={800}
                height={600}
                data={babyList}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ExamineDate" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="BabyWeight"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default BabyWeight;
