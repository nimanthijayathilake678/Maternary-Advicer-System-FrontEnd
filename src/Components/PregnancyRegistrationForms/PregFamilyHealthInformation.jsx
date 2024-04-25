import React from 'react'
import { useState } from 'react';
import { Grid, Box, Checkbox, TextField, FormControlLabel } from '@mui/material'

const PregFamilyHealthInformation = () => {

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
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Diabetes Mellitus" style={{color:"black"}}/>
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Hypertension" style={{color:"black"}} />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Haematological diseases" style={{color:"black"}}/>
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Twin / multiple pregnancies" style={{color:"black"}}/>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 1em 1em !important" }}>
                    <TextField
                        required
                        name="other"
                        label="Other (Specify)"
                        placeholder="Other (Specify)"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                    />
                </Grid>

        </Grid>
        </Box>
        </form>
  )
}

export default PregFamilyHealthInformation;
