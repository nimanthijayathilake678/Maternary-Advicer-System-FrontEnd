import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function BabyRegistrationForm2() {
  const [signupData, setSignupData] = useState({
    birthGivenHospital: "",
    weightAtBirth: "",
    wayOfBirth: "",
    headSizeAtBirth: "",
    lengthAtBirth: "",
    specialNotes: "",
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
    // Example validation for non-empty fields
    Object.entries(data).forEach(([key, value]) => {
      if (!value.trim()) {
        errors[key] = `${key} is required`;
      }
    });

    return errors;
  };

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
          //justifyContent="center"
          //alignItems="center"
          height="100%"
          flexDirection="column"
        >
          <Grid container spacing={4} sx={{ width: "100%" }}>
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Birth Given Hospital"
                name="birthGivenHospital"
                label="Birth Given Hospital"
                sx={{ width: "100%" }}
                value={signupData.birthGivenHospital}
                onChange={handleChange}
                error={!!errors.birthGivenHospital}
                helperText={errors.birthGivenHospital}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Weight at birth"
                name="weightAtBirth"
                label="Weight at birth"
                sx={{ width: "100%" }}
                value={signupData.weightAtBirth}
                onChange={handleChange}
                error={!!errors.weightAtBirth}
                helperText={errors.weightAtBirth}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Way of Birth"
                name="wayOfBirth"
                label="Way of Birth"
                sx={{ width: "100%" }}
                value={signupData.wayOfBirth}
                onChange={handleChange}
                error={!!errors.wayOfBirth}
                helperText={errors.wayOfBirth}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Head Size at Birth"
                name="headSizeAtBirth"
                label="Head Size at Birth"
                sx={{ width: "100%" }}
                value={signupData.headSizeAtBirth}
                onChange={handleChange}
                error={!!errors.headSizeAtBirth}
                helperText={errors.headSizeAtBirth}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Length at birth"
                name="lengthAtBirth"
                label="Length at birth"
                sx={{ width: "100%" }}
                value={signupData.lengthAtBirth}
                onChange={handleChange}
                error={!!errors.lengthAtBirth}
                helperText={errors.lengthAtBirth}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                placeholder="Special Notes"
                name="specialNotes"
                label="Special Notes"
                sx={{ width: "100%" }}
                value={signupData.specialNotes}
                onChange={handleChange}
                error={!!errors.specialNotes}
                helperText={errors.specialNotes}
              />
            </Grid>
          </Grid>

          <Divider sx={{ width: "100%", margin: "20px 0" }}>
            Breast feeding
          </Divider>

          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <FormLabel>Strated at 1st hour</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormLabel>Connection</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormLabel>Established</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default BabyRegistrationForm2;
