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
          height="150vh"
          flexDirection="column"
        >
          <Grid container spacing={6} sx={{ width: "90%" }}>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Baby Age"
                name="BabyAge"
                label="BabyAge"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Date of Examination"
                name="DateOfExamination"
                label="Date of Examination"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Baby Blood Group"
                name="BabyBloodGroup"
                label="Baby Blood Group"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Baby Growth"
                name="BabyGrowth"
                label="Baby Growth"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Root>
              <div style={{ marginTop: "20px" }}>
                <Divider textAlign="left">Examination Part 01</Divider>
              </div>

              <Grid container xs={12}>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Fermoral Pulse</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BFemoralPulse"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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
                <Grid
                  item
                  xs={6}
                  sx={{
                    padding: "1em 2em 0em 10em !important",
                  }}
                >
                  <div>
                    <label style={{ marginBottom: "50px" }}>
                      Respiratory Rate
                    </label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BRespiratoryRate"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Grunting</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BGrunting"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Intercostal /Subcostal recession</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BCostal"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Tone</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BTone"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>OFC</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BOfc"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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
            </Root>
            <Root>
              <div style={{ marginTop: "20px" }}>
                <Divider textAlign="left">Examination Part 02</Divider>
              </div>

              <Grid container xs={12}>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Pheriperies pink and worm</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BPeriperusPinkWorm"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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
                <Grid
                  item
                  xs={6}
                  sx={{
                    padding: "1em 2em 0em 10em !important",
                  }}
                >
                  <div>
                    <label style={{ marginBottom: "50px" }}>Hydration</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BHydration"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Response to handling</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BResponceHandling"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Capillery refilling time</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BCRtime"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Pulse Rate</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BPulseRate"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 2em 0em 10em !important" }}
                >
                  <div>
                    <label>Heart Murmers</label>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 0em 1em !important" }}
                >
                  <FormControl>
                    <FormLabel id="BHeartMurmurs"></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
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
            </Root>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default BabyRegistrationForm1;
