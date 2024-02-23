import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DefaultButton from "../../../../../Components/Button/DefaultButton";
import SideBar from "../../../../../Components/SideBar";

function BabyRegistrationForm1() {
  const [signupData, setSignupData] = useState({
    couple_id: "",
    pregnancy_id: "",
    b_Name: "",
    b_Reg_Num: "",
    b_Reg_Date: "",
    b_MOH_Division: "",
    b_FSHO_Division: "",
    b_Mother_Age: "",
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

    if (!data.couple_id) {
      errors.couple_id = "Couple ID is required";
    }

    if (!data.pregnancy_id) {
      errors.pregnancy_id = "Pregnancy ID is required";
    }

    if (!data.b_Name) {
      errors.b_Name = "Name of the Baby is required";
    }

    if (!data.b_Reg_Num) {
      errors.b_Reg_Num = "Baby Registration Number is required";
    }

    if (!data.b_Reg_Date) {
      errors.b_Reg_Date = "Date of Registration is required";
    }

    if (!data.b_MOH_Division) {
      errors.b_MOH_Division = "Division of Health Medical Officer is required";
    }

    if (!data.b_FSHO_Division) {
      errors.b_FSHO_Division =
        "Division of Family Health Service Officer is required";
    }

    if (!data.b_Mother_Age) {
      errors.b_Mother_Age = "Age of Mother is required";
    } else if (data.b_Mother_Age < 0 || data.b_Mother_Age > 150) {
      errors.b_Mother_Age = "Mother's age must be between 0 and 150";
    }

    return errors;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "25%", display: "flex", maxWidth: "200px" }}>
        {/* Add sidebar content here */}
        <SideBar />
      </Box>

      {/* Form */}
      <Box sx={{ width: "75%", paddingBottom: "100px" }}>
        <Box
          sx={{
            paddingTop: "100px",
            maxWidth: "900px",
            margin: "auto",
            display: "flex",
          }}
        >
          <div>
            <span className="text-xl text-[#2A777C] text-center font-bold">
              Register New Born
            </span>
          </div>
        </Box>

        <Box
          sx={{
            padding: "50px",
            maxWidth: "900px",
            border: "1px solid #ccc",
            margin: "auto",
            display: "flex",
            marginBottom: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                placeholder="Couple ID"
                name="couple_id"
                label="Couple ID"
                value={signupData.couple_id}
                onChange={handleChange}
                error={!!errors.couple_id}
                helperText={errors.couple_id}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                placeholder="Pregnancy ID"
                name="pregnancy_id"
                label="Pregnancy ID"
                value={signupData.pregnancy_id}
                onChange={handleChange}
                error={!!errors.pregnancy_id}
                helperText={errors.pregnancy_id}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                placeholder="Name of the Baby"
                name="b_Name"
                label="Name of the Baby"
                value={signupData.b_Name}
                onChange={handleChange}
                error={!!errors.b_Name}
                helperText={errors.b_Name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                placeholder="Baby Registration Number"
                name="b_Reg_Num"
                label="Baby Registration Number"
                value={signupData.b_Reg_Num}
                onChange={handleChange}
                error={!!errors.b_Reg_Num}
                helperText={errors.b_Reg_Num}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="date"
                placeholder="Date of Registration"
                name="b_Reg_Date"
                //label="Date of Registration"
                value={signupData.b_Reg_Date}
                onChange={handleChange}
                error={!!errors.b_Reg_Date}
                helperText={errors.b_Reg_Date}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                placeholder="Division of Health Medical Officer"
                name="b_MOH_Division"
                label="Division of Health Medical Officer"
                value={signupData.b_MOH_Division}
                onChange={handleChange}
                error={!!errors.b_MOH_Division}
                helperText={errors.b_MOH_Division}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                placeholder="Division of Family Health Service Officer"
                name="b_FSHO_Division"
                label="Division of Family Health Service Officer"
                value={signupData.b_FSHO_Division}
                onChange={handleChange}
                error={!!errors.b_FSHO_Division}
                helperText={errors.b_FSHO_Division}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="number"
                placeholder="Age of Mother"
                name="b_Mother_Age"
                label="Age of Mother"
                value={signupData.b_Mother_Age}
                onChange={handleChange}
                error={!!errors.b_Mother_Age}
                helperText={errors.b_Mother_Age}
              />
            </Grid>
            <Grid item xs={12}>
              {/* Button for form submission */}
              <DefaultButton
                height="40px"
                width="150px"
                title="Register"
                onClick={handleSignup}
                style={{ marginTop: "20px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default BabyRegistrationForm1;
