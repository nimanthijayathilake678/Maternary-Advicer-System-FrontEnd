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
            <Grid
              item
              xs={12}
              sx={{
                fontStyle: "italic",
                fontSize: "0.7rem",
                fontWeight: "bold",
                padding: "2em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                Have you ever had or do you have any of the following medical
                conditions?
              </span>
            </Grid>
            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Blood Deficiency(Anemia)"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Heart Diseases-Congenital"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Heart Diseases-Rheumatic Heart Diseases"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Diabetes Mellitus"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hypertension"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hypercholesterolemia"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Asthma"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Thyroid diseases(Goiter)"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Untrated decayed teeth"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Conditions such as tooth decay and bleeding from gums"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Mental Illnesses"
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <span>Diseases receiving long term treatment :</span>
              <Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    marginLeft: "5px",
                    padding: "1em 1em 0em 1em !important",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Rheumatic fever"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    marginLeft: "5px",
                    padding: "1em 1em 0em 1em !important",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Epilepsy"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <span>Diseases receiving long term treatment :</span>
              <Grid
                item
                xs={6}
                sx={{
                  marginLeft: "5px",
                  padding: "1em 1em 0em 1em !important",
                }}
              >
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Food"
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginLeft: "5px",
                  padding: "1em 1em 0em 1em !important",
                }}
              >
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Drugs"
                />
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Are you taking long-term medications ?</span>
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
                <span>Other Surgeries </span>
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
                <span> Have you gotten rubella vaccine ?</span>
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
                <span> Do you taking folic acid tablet daily ?</span>
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
                <span> Was your marrage based on blood relation ?</span>
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
              item
              xs={12}
              sx={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "0.7rem",
                padding: "1em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                Getting rubella before pregnancy and building immunity against
                rubella can prevent the baby from getting Congenital Rubella
                Syndrome. This should be taken at least three months before
                conception.
              </span>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                fontStyle: "italic",
                fontSize: "0.7rem",
                fontWeight: "bold",
                padding: "1em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
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
