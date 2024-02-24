import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Box,
  Divider,
} from "@mui/material";

function BabyRegistrationForm1() {
  const [babyData, setBabyData] = useState({
    premature: "",
    feedingChallenges: "",
    lowBirthWeight: "",
    inheritedDiseases: "",
    motherUnstability: "",
    developmentDelays: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Baby Data:", babyData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBabyData({ ...babyData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Box
          component="form"
          sx={{
            "& .MuiFormControl-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
          flexDirection="column"
        >
          <Grid container spacing={2} sx={{ width: "90%" }}>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Premature baby</FormLabel>
                <RadioGroup
                  row
                  name="premature"
                  value={babyData.premature}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Feeding challenges</FormLabel>
                <RadioGroup
                  row
                  name="feedingChallenges"
                  value={babyData.feedingChallenges}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Low birth weight</FormLabel>
                <RadioGroup
                  row
                  name="lowBirthWeight"
                  value={babyData.lowBirthWeight}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Inherited diseases</FormLabel>
                <RadioGroup
                  row
                  name="inheritedDiseases"
                  value={babyData.inheritedDiseases}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Mother unstability after birth
                </FormLabel>
                <RadioGroup
                  row
                  name="motherUnstability"
                  value={babyData.motherUnstability}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Development delays</FormLabel>
                <RadioGroup
                  row
                  name="developmentDelays"
                  value={babyData.developmentDelays}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
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
