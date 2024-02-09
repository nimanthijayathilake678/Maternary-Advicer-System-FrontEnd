import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function BabyRegistrationForm1() {
  const [signupData, setSignupData] = useState({
    babyRegNum: "",
    mohDivision: "",
    midwifeDivisionName: "",
    babyName: "",
    pregRegNum: "",
    babyBirthDay: "",
    babyRegDate: "",
    motherName: "",
    motherAge: "",
    motherAddress: "",
  });

  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateForm(signupData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Perform signup logic here with signupData
    console.log("Signup data:", signupData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear validation errors when the user starts typing
    setErrors({});

    setSignupData({ ...signupData, [name]: value });
  };

  const validateForm = (data) => {
    let errors = {};

    // Perform your validations here
    if (!data.babyRegNum) {
      errors.babyRegNum = "Baby Registration Number is required";
    }

    // Add validations for other fields...

    return errors;
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //onSubmit={handleSubmit}
  return (
    <div>
      <form>
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
          height="80vh"
          flexDirection="column"
        >
          <Grid container spacing={6} sx={{ width: "90%" }}>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Baby Registration Number"
                id="b_reg_num"
                name="BabyRegNum"
                label="Baby Registration Number"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Division of Health Medical Officer"
                name="MohDivision"
                label="Division of Health Medical Officer"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Division of Family Health Service Officer"
                name="MidwifeDivisionName"
                label="Division of Family Health Service Officer"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Mother Pregnancy Number"
                name="PregRegNum"
                label="Mother Pregnancy Number"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Name of the Baby"
                name="BabyName"
                label="Name of the Baby"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Birthday of Baby"
                name="BabyBirthDay"
                label="Birthday of Baby"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Date of Registration"
                name="BabyRegDate"
                label="Date of Registration"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Name of the Mother"
                name="MotherName"
                label="Name of the Mother"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Age of Mother"
                name="MotherAge"
                label="Age of Mother"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Mother Address"
                name="MotherAddress"
                label="Mother Address"
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default BabyRegistrationForm1;
