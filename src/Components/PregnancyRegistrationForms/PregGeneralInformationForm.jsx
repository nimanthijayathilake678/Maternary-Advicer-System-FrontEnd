import React from 'react'
import { TextField, Grid, Box } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

const PregGeneralInformationForm = () => {
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
        <Grid container spacing={2} sx={{ width: "60%" }} border={1} borderColor="primary.main" borderRadius={3} m={2}> 
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Pregnancy Registration No"
                name="PregRegNo"
                label="Pregnancy Registration No"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Pregnancy Registration Location"
                name="PregRegLocation"
                label="Pregnancy Registration Location"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Pregnancy Registration Date" required sx={{ width: "50%" }}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Eligible Registration No"
                name="EligibleRegNo"
                label="Eligible Registration No"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "0.5em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Eligible Family Registration Date" required sx={{ width: "100%" }}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Grama Niladari Division"
                name="GramaNiladariDiv"
                label="Grama Niladari Division"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="MOH Area"
                name="mohArea"
                label="MOH Area"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="PHM Area"
                name="phmArea"
                label="PHM Area"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Eligible Registration No"
                name="EligibleRegNo"
                label="Eligible Registration No"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Name of the Hospital Clinic"
                name="hospitalClinicName"
                label="Name of the Hospital Clinic"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Name of the Consultant Obstetrician"
                name="consultantNamr"
                label="Name of the Consultant Obstetrician"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Name of the Field Clinic"
                name="fieldClinicName"
                label="Name of the Field Clinic"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Mother's Name"
                name="motherName"
                label="Mother's Name"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Father's Name"
                name="fatherName"
                label="Father's Name"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Telephone No"
                name="telephoneNo"
                label="Telephone No"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Address"
                name="address"
                label="Address"
                sx={{ width: "100%" }}
              />
            </Grid>


        </Grid>


    </Box>
    </form>
  )
}

export default PregGeneralInformationForm
