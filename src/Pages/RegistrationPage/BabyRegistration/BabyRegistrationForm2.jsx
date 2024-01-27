import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

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
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

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
          height="100vh"
          flexDirection="column"
        >
          <Grid container spacing={6} sx={{ width: "90%" }}>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
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
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
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
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
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
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
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
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
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
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
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

            <Root>
              <div style={{ marginTop: "20px" }}>
                <Divider textAlign="left">Examinations</Divider>
              </div>

              <Grid container xs={12}>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Apgar Score</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="apgarscore"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="1min"
                        control={<Radio />}
                        label="1min"
                      />
                      <FormControlLabel
                        value="5min"
                        control={<Radio />}
                        label="5min"
                      />
                      <FormControlLabel
                        value="10min"
                        control={<Radio />}
                        label="10min"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    padding: "1em 2em 0em 10em !important",
                  }}
                >
                  <div>
                    <label style={{ marginBottom: "50px" }}>Vitamin K</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="vitamin K given"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Given"
                        control={<Radio />}
                        label="Given"
                      />
                      <FormControlLabel
                        value="NotGiven"
                        control={<Radio />}
                        label="NotGiven"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Apgar Score</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="apgarscore"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="1min"
                        control={<Radio />}
                        label="1min"
                      />
                      <FormControlLabel
                        value="5min"
                        control={<Radio />}
                        label="5min"
                      />
                      <FormControlLabel
                        value="10min"
                        control={<Radio />}
                        label="10min"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Root>

            <Root>
              <div style={{ marginTop: "20px" }}>
                <Divider textAlign="left">Breast feeding</Divider>
              </div>

              <Grid container xs={12}>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Strated at 1st hour</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="apgarscore"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="No"
                      />
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    padding: "1em 2em 0em 10em !important",
                  }}
                >
                  <div>
                    <label style={{ marginBottom: "50px" }}>Connection</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="Connection"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Established</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="established"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Root>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default BabyRegistrationForm2;
