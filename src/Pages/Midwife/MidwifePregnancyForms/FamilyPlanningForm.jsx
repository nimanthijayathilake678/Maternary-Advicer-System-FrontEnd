import { Box, Grid,FormControl,InputLabel, Select,MenuItem, TextField,Button } from '@mui/material'
import React from 'react'
import Header from '../../../Components/Header'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import { useState } from 'react';


const FamilyPlanningForm = () => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
      };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const chosenMethod = [
        { value: 'T', label: 'T'},
        { value: 'PL', label: 'PL'},
        { value: 'P', label: 'P'},
        { value: 'IP', label: 'IP'},
        { value: 'N', label: 'N'},
        { value: 'P', label: 'P'},
        { value: 'C', label: 'C'},
      ];

      
  return (
    <Box m={'20px'}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Family Planning" />
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


            <Grid sx={{ width: "50%" }}  border={1} borderColor="primary.main" borderRadius={3} mt={0} m={5} > 
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField']}>
                            <DateField label="Date of Counselling" required sx={{ width: "100%" }} />
                            </DemoContainer>
                        </LocalizationProvider>
                </Grid>

                <Grid item xs={4} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <FormControl  fullWidth>
                    <InputLabel>Chosen Method</InputLabel>
                        <Select
                        required
                        name="chosenMethod"
                        label="Chosen Method"
                        placeholder="Chosen Method"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                        >
                        {chosenMethod.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <TextField
                        required
                        name="reasonForNotUsing"
                        label="Reason for not using a method"
                        placeholder="Reason for not using a method"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                    />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField']}>
                            <DateField label="Date of givin Consent Form" required sx={{ width: "100%" }} />
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
  )
}

export default FamilyPlanningForm
