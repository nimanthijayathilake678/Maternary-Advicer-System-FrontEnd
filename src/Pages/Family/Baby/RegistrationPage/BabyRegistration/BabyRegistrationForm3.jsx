import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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

function BabyRegistrationForm1() {
  const [signupData, setSignupData] = useState({
    femoralPulse: "",
    respiratoryRate: "",
    grunting: "",
    intercostalSubcostalRecession: "",
    tone: "",
    OFC: "",
    peripheriesPinkWorm: "",
    hydration: "",
    responseToHandling: "",
    capillaryRefillingTime: "",
    pulseRate: "",
    heartMurmurs: "",
  });

  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(signupData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Signup data:", signupData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({});
    setSignupData({ ...signupData, [name]: value });
  };

  const validateForm = (data) => {
    let errors = {};
    // Validation logic...
    return errors;
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
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
          <Grid container spacing={4} sx={{ width: "90%" }} paddingTop={"50px"}>
            <Grid item xs={12}>
              <Divider textAlign="left">Examination Part 01</Divider>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Femoral Pulse</FormLabel>
                <RadioGroup
                  row
                  name="femoralPulse"
                  value={signupData.femoralPulse}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Respiratory Rate</FormLabel>
                <RadioGroup
                  row
                  name="respiratoryRate"
                  value={signupData.respiratoryRate}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Grunting</FormLabel>
                <RadioGroup
                  row
                  name="grunting"
                  value={signupData.grunting}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Intercostal/Subcostal Recession</FormLabel>
                <RadioGroup
                  row
                  name="intercostalSubcostalRecession"
                  value={signupData.intercostalSubcostalRecession}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Tone</FormLabel>
                <RadioGroup
                  row
                  name="tone"
                  value={signupData.tone}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>OFC</FormLabel>
                <RadioGroup
                  row
                  name="OFC"
                  value={signupData.OFC}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider textAlign="left">Examination Part 02</Divider>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Pheriperies Pink and Worm</FormLabel>
                <RadioGroup
                  row
                  name="peripheriesPinkWorm"
                  value={signupData.peripheriesPinkWorm}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Hydration</FormLabel>
                <RadioGroup
                  row
                  name="hydration"
                  value={signupData.hydration}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Response to Handling</FormLabel>
                <RadioGroup
                  row
                  name="responseToHandling"
                  value={signupData.responseToHandling}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Capillary Refilling Time</FormLabel>
                <RadioGroup
                  row
                  name="capillaryRefillingTime"
                  value={signupData.capillaryRefillingTime}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Pulse Rate</FormLabel>
                <RadioGroup
                  row
                  name="pulseRate"
                  value={signupData.pulseRate}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel>Heart Murmurs</FormLabel>
                <RadioGroup
                  row
                  name="heartMurmurs"
                  value={signupData.heartMurmurs}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                  />
                  <FormControlLabel
                    value="Abnormal"
                    control={<Radio />}
                    label="Abnormal"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default BabyRegistrationForm1;
