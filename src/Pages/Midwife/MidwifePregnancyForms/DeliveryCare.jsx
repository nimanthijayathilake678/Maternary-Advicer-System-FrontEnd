import React from 'react'
import { useState } from 'react';
import { Grid,Box,Radio,Button, TextField,RadioGroup,FormControl,FormLabel,FormControlLabel,InputLabel,MenuItem,radioin } from '@mui/material'
import Select from '@mui/material/Select';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import Header from '../../../Components/Header';

function RadioInputGroup({ label, options, disabled }) {
    return (
      <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
        <FormControl>
          <FormLabel id={`radio-group-label-${label}`}>{label}</FormLabel>
          <RadioGroup row aria-labelledby={`radio-group-label-${label}`} style={{color:"black"}} name={`row-radio-buttons-group-${label}`} 
           disabled={disabled}>
            {options.map((option, index) => (
              <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} disabled={disabled}/>
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    );
  }

const DeliveryCare = () => {

    const [inputValue, setInputValue] = useState('');
    // Event handler to update the input value
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const deliveryMode = [
        { value: 'VD', label: 'VD'},
        { value: 'Forceps', label: 'Forceps'},
        { value: 'Vacuum', label: 'Vacuum'},
        { value: 'LSCS', label: 'LSCS'},
        { value: 'Other', label: 'Other'},
      ];

      const result = [
        { value: 'Live Birth', label: 'Live Birth'},
        { value: 'Stillbirth', label: 'Stillbirth'},
        { value: 'Abortion', label: 'Abortion'},
      ];
      const radioGroupOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }, 
      ];

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
                <Grid item xs={6} >
                    <FormControl>
                        <FormLabel id="deliveryPlace">Delivery Place</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="deliveryPlace"
                            name="deliveryPlace"
                            style={{color:"black"}}
                        >
                            <FormControlLabel value="home" control={<Radio />} label="Home" />
                            <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                            
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <TextField
                        required
                        name="hospitalName"
                        label="Hospital Name"
                        placeholder="Hospital Name"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                    />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <TextField
                        required
                        name="doneBy"
                        label="Name of the Officer"
                        placeholder="Name of the Officer"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                    />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <TextField
                        required
                        name="poa"
                        label="POA"
                        placeholder="POA"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                    />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <TextField
                        required
                        name="dischargeBP"
                        label="Blood Pressure at the time of discharge"
                        placeholder="Blood Pressure at the time of discharge"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                    />
                </Grid>
                
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <FormControl  fullWidth>
                    <InputLabel>Mode of Delivery</InputLabel>
                        <Select
                        required
                        name="deliveryMode"
                        label="Mode of Delivery"
                        placeholder="Mode of Delivery"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                        >
                        {deliveryMode.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <FormControl  fullWidth>
                    <InputLabel>Result</InputLabel>
                        <Select
                        required
                        name="result"
                        label="Result"
                        placeholder="Result"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                        >
                        {result.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Episiotomy" options={radioGroupOptions}  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Tearing Eyelids" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Stayed Apara" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Prolonged Labour" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Post partum Bleeding" options={radioGroupOptions}  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Body Temperature normal for last 2days" options={radioGroupOptions}  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Epis/Tears/LSCS Infection" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Vitamin A Megadose given" options={radioGroupOptions}  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateField']}>
                        <DateField label="Vitamin A Megadose given Date" required sx={{ width: "100%" }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Rubella Immunization given" options={radioGroupOptions}  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateField']}>
                        <DateField label="Rubella Immunization given Date" required sx={{ width: "100%" }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Anti D antibidies given" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Diagosis Card given if indicated" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="CHDR completed and handed over" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Prescription given if needed" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Refered to the Field Public Health Midwife" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Post partum dander signals explained" options={radioGroupOptions}  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "0em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Breast Feeding Established" options={radioGroupOptions}  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <TextField
                        required
                        name="maternalComplications"
                        label="Any maternal complications"
                        placeholder="Any maternal complications"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                    />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
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

                <Grid item xs={6} sx={{ padding: "0.5em 1em 0em 1em !important" }}>
                    <TextField
                        required
                        name="reasonForNotUsing"
                        label="Reason for not using a method"
                        placeholder="Reason for not using a method"
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

export default DeliveryCare
