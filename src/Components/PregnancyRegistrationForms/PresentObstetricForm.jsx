import React from 'react'
import { useState } from 'react';
import { Grid,TextField,Box, Typography } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";

const PresentObstetricForm = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

  return (
    <form >
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
      //height="80vh"
      flexDirection="column"
    >
    <Grid container spacing={2} sx={{ width: "90%" }} border={1} borderColor="primary.main" borderRadius={3} m={2}> 
        <Grid item xs={12} >
            <Typography>Gravidity</Typography>
            </Grid>
        <Grid item xs={4} sx={{ padding: "1em 1em 1em 1em !important" }}>
            <TextField
                required
                name="gravidityG"
                label="G"
                placeholder="G"
                onChange={handleInputChange}
                sx={{ width: "100%" }}
            />
        </Grid>

        <Grid item xs={4} sx={{ padding: "1em 1em 1em 1em !important" }}>
            <TextField
                required
                name="gravidityP"
                label="P"
                placeholder="P"
                onChange={handleInputChange}
                sx={{ width: "100%" }}
            />
        </Grid>

        <Grid item xs={4} sx={{ padding: "1em 1em 1em 1em !important" }}>
            <TextField
                required
                name="gravidityC"
                label="C"
                placeholder="C"
                onChange={handleInputChange}
                sx={{ width: "100%" }}
            />
        </Grid>

        <Grid item xs={6} sx={{ padding: "1em 1em 1em 1em !important" }}>
            <TextField
                required
                name="youngestChildAge"
                label="Age of youngest child"
                placeholder="Age of youngest child"
                onChange={handleInputChange}
                sx={{ width: "100%" }}
            />
        </Grid>

        <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Last Regular Menstrual Period (LRMP)" required sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Expected Delivery Date (EDD)(Date of 40 weeks completion)"  required sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Date of quickening " required sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="POA at registration" required sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            

        
        
       
       
    </Grid>
</Box>
</form>
  )
}

export default PresentObstetricForm
