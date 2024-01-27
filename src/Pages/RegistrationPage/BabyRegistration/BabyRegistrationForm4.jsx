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

  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));
  //////////////////////////////////////////////////////////////////////////////////////////////////////

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
          height="60vh"
          flexDirection="column"
        >
          <Root>
            <div>
              <Divider textAlign="left">Examination Part 03</Divider>
            </div>
            <Grid container spacing={6} sx={{ width: "90%" }}>
              <Grid container xs={12}>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Premature baby</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BPremature"></FormLabel>
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
                        value="No"
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
                    <label style={{ marginBottom: "50px" }}>
                      Feeding challenges
                    </label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BFeddingChallenges"></FormLabel>
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
                        value="No"
                        control={<Radio />}
                        label="No"
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
                    <label>Low birth weight</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BLowBirthWeigth"></FormLabel>
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
                        value="No"
                        control={<Radio />}
                        label="No"
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
                    <label>Inherited diseases</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BInheritedDiseases"></FormLabel>
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
                        value="No"
                        control={<Radio />}
                        label="No"
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
                    <label>Mother unstability after birth</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BMotherUnstability"></FormLabel>
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
                        value="No"
                        control={<Radio />}
                        label="No"
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
                    <label>Development delays</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BDevelopmentDelays"></FormLabel>
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
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Root>
        </Box>
      </form>
    </div>
  );
}

export default BabyRegistrationForm1;
