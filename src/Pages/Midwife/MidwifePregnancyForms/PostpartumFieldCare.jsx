import React from 'react'
import { useState } from 'react';
import { Grid,Box,Radio,Button, TextField,RadioGroup,FormControl,FormLabel,FormControlLabel,InputLabel,MenuItem,radioin } from '@mui/material'
import Select from '@mui/material/Select';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import Header from '../../../Components/Header';


const PostpartumFieldCare = () => {

    const [inputValue, setInputValue] = useState('');
    // Event handler to update the input value
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const codeNo = [
        { value: 'A', label: 'A'},
        { value: 'B', label: 'B'},
        { value: 'C', label: 'C'},
        { value: 'D', label: 'D'},
        { value: 'E', label: 'E'},
        { value: 'F', label: 'F'},
        { value: 'G', label: 'G'},
        { value: 'H', label: 'H'},
        { value: 'I', label: 'I'},
        { value: 'J', label: 'J'},
        { value: 'K', label: 'K'},
      ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Delivery and Postnatal Care" />
      </Box>
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
            
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateField']}>
                        <DateField label="Date of home vist by Midwife" required sx={{ width: "100%" }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateField']}>
                        <DateField label="Date of issuing Micronutrients" required sx={{ width: "100%" }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <FormControl  fullWidth>
                    <InputLabel>Social Z Score</InputLabel>
                        <Select
                            required
                            label="Social Z Score"
                            placeholder="Social Z Score"

                            name="socialZScore"
                            onChange={handleInputChange}
                            // disabled={userRole !== "MOH doctor"}
                            sx={{ width: "100%" }}
                        >
                        {codeNo.map((option) => (
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
                        name="hospitalName"
                        label="Identified post partum morbidities "
                        placeholder="Identified post partum morbidities "
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                    />
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

export default PostpartumFieldCare
