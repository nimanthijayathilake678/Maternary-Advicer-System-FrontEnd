import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EducationalDropDown from "./EducationalDropDown";

function OtherPersonalInformation() {
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

  //onSubmit={handleSubmit}
  return (
    <div>
      <form>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {},
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="20vh"
          width="100%"
          flexDirection="column"
        >
          <Grid container spacing={6} sx={{ width: "100%" }}>
            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Date of Married"
                id="b_reg_num"
                name="BabyRegNum"
                label="Date of Married"
                type="date"
                sx={{ width: "100%" }}
              />
            </Grid>{" "}
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default OtherPersonalInformation;
