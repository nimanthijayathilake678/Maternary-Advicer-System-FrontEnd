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

function WifeSexualAndReproductiveHealth() {
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
                padding: "4em 4em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                There may be some difficulities arising during a woman’s monthly
                period and in the sexual relationship of both of you. Successful
                intercourse is essential for maximum sexual satisfaction. Also
                mention here the information about the family organization
                methods used by both of you
              </span>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Are your monthly periods regular ?</span>
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

            <Grid item xs={4} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Number of days"
                id="b_reg_num"
                name="BabyRegNum"
                label="Number of days"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you bleed heavily when you have your period ? </span>
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
                <span> Do you have vaginal bleeding between periods ?</span>
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
                  Suffering from severe abdominal pain during periods ?
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
                  Is there an unusual colored or foul-smelling discharge from
                  the vagina ?
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

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <span>Do you have a history of the following conditions ?</span>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>
                  {" "}
                  1. Abortion
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
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>
                  {" "}
                  2. Stillbirths
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
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>
                  {" "}
                3. Infant mortality
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
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>
                  {" "}
                  4. Tubal Pregnancy (Ectopic)
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
                  Do you have itching in or around your  genitals ?
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
                  Have you had any surgery on your reproductive organs ?
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

            <Grid item xs={4} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="If so, what is it ?"
                id="b_reg_num"
                name="BabyRegNum"
                label="If so, what is it ?"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Do you think you both have a problem with sex ?
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
                  Are you satisfied with the sexual relationship ?
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
                  Do you do breast self-examination once a month ?
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



          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default WifeSexualAndReproductiveHealth;
