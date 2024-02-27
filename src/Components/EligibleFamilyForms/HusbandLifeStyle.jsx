import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

function HusbandLifeStyle() {
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
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="auto"
          flexDirection="column"
        >
          <Grid container spacing={6} sx={{ width: "90%" }}>
            <Grid
              item
              xs={12}
              sx={{
                fontStyle: "italic",
                fontSize: "0.7rem",
                fontWeight: "bold",
                padding: "4em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                Risky habits such as alcohol, drugs, smoking,violent behavior,
                casual sex and bad habits cause family happiness, harmony and
                health as well as the economy to suffer. It is our
                responsibility to guide you to get rid of above habits as well
                as to encourage you both to engage in activities that improve
                mental health such as physical exercise and hobbies.
              </span>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <span>Do you use the following ?</span>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{ marginLeft: "5px" }}>
                <span>1. Cigarettes , Betel leaves , Tobacco</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{ marginLeft: "5px" }}>
                <span>2. Liquor</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{ marginLeft: "5px" }}>
                <span>3. Drugs </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Even if you don’t smoke, are you passively exposed to other
                  people’s smoke at home or at work ? (Do you often hang out
                  with people who smoke ? )
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Is there an atmosphere at home that is not physically or
                  mentally abusive to you ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you partice daily religious rituals ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you make time for regular exercise ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you make time for hobbies ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default HusbandLifeStyle;
