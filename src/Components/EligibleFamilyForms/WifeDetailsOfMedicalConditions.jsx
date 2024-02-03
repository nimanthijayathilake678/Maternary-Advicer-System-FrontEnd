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

function WifeDetailsOfMedicalConditions() {
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
            <Grid item={6} sx={{ color: "#2A777C" }}>
              <span>
                Have you ever had or do you have any of the following medical
                conditions?
              </span>
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Blood Deficiency(Anemia)"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Heart Diseases-Congenital"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Heart Diseases-Rheumatic Heart Diseases"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Diabetes Mellitus"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel control={<Checkbox />} label="Hypertension" />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Hypercholesterolemia"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel control={<Checkbox />} label="Asthma" />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Thyroid diseases(Goiter)"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Untrated decayed teeth"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Conditions such as tooth decay and bleeding from gums"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="Mental Illnesses"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              {""}
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <span>Diseases receiving long term treatment :</span>
              <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Rheumatic fever"
                />
              </Grid>
              <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Epilepsy" />
              </Grid>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <span>Diseases receiving long term treatment :</span>
              <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Food" />
              </Grid>
              <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Drugs" />
              </Grid>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControl>
                <FormLabel>Are you taking long-term medications ?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControl>
                <FormLabel>Other Surgeries</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControl>
                <FormLabel>Have you gotten rubella vaccine ?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControl>
                <FormLabel>Do you taking folic acid tablet daily ?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControl>
                <FormLabel>
                  Was your marrage based on blood relation ?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid sx={{ color: "#2A777C" }}>
              <span>
                Getting rubella before pregnancy and building immunity against
                rubella can prevent the baby from getting Congenital Rubella
                Syndrome. This should be taken at least three months before
                conception.
              </span>
              <span>
                It is essential for a woman who is hoping to conceive a child to
                take one folic acid pill every day for about six months. This
                prevents possible disorders related to the child’s brain and
                nervous system.
              </span>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default WifeDetailsOfMedicalConditions;
