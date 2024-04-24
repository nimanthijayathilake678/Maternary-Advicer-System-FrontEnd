import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, InputLabel, Select, MenuItem, Divider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import Header from "../../../Components/Header";


function valuetext(value) {
  return `${value}`;
}

const ScreeningForm = () => {
  const [selectedValue, setSelectedValue] = useState('option1'); 
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the selected radio button value
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsReferralEditable(event.target.value === 'r');
  };

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  
  const [isReferralEditable, setIsReferralEditable] = useState(true); 

  

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Syphilis and HIV Screening Form" />
      </Box>
      <form onSubmit={handleSubmit}>
        <Box component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          //height="80vh"
          flexDirection="column"
        >

          <Grid  sx={{ width: "50%" }} border={1} borderColor="primary.main" borderRadius={3} mt={0} m={5} > 

            <Typography ml='20px' mt={3} variant="h6" color="#2a777c" fontWeight={"bold"}>Syphilis Screening Details</Typography>
            <Grid item xs={8} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                name="BloosSamplingPOA"
                label="POA at Blood Sampling"
                placeholder="POA at Blood Sampling"
                onChange={handleInputChange}
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Date of Blood sampling" required sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Date of Result Received" required sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} ml={4}>
                <FormControl>
                    <FormLabel id="syphilisResult">Result</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="syphilisResult"
                        name="row-radio-buttons-group"
                        style={{color:"black"}}
                    >
                        <FormControlLabel value="nr" control={<Radio />} label="NR" />
                        <FormControlLabel value="r" control={<Radio />} label="R" />
                        
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="If (R) Date of Referral" required={selectedValue === 'r'} 
                    disabled={!isReferralEditable}  sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Divider sx={{boxShadow: '0px 3px 5px rgba(0, 0, 0,0.1)', m:'20px'}} />
            <Typography ml='20px' variant="h6" color="#2a777c" fontWeight={"bold"}>HIV Screening Details</Typography>

           
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Date of Result Informed To Mother" required sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            



            <Grid container justifyContent="flex-end" item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }} >
              <Button variant="contained" color="primary" sx={{ mb: '20px' }}>
                Submit
              </Button>
            </Grid>

          </Grid>
        </Box>

      </form>
    </Box>
  );
};

export default ScreeningForm;
