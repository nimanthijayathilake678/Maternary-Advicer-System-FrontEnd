import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid, FormControl,FormControlLabel, FormLabel, Radio, RadioGroup, Typography, InputLabel,Select, MenuItem } from "@mui/material"; 
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import Slider from "@mui/material/Slider";
import Header from "../../../Components/Header";

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

  function valuetext(value) {
    return `${value}`;
  }
  
const ClinicCareInformationForm = () => {
  // const [userRole, setUserRole] = useState("MOH doctor"); 

  const [formData, setFormData] = useState({
    // Initialize form data here
    POA: "", sugar:"",albumin:"",FundalHeight: "",FoetalLie: "", iron:"",folate:"",calcium:"",vitminC:"",Weight:"",
  });

  const radioGroupOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }, 
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const PresentingPart = [
    { value: 'head', label: 'Head'},
    { value: 'breech', label: 'Breech'},
    { value: 'other', label: 'Other'},
  ];


  return (
    <Box>
        {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Clinic Care Information" />
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

        <Grid container spacing={2}   sx={{ width: "90%" }}>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateField']}>
                    <DateField label="Visit Date" required sx={{ width: "100%" }} />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <TextField
                required
                name="POA"
                label="POA"
                placeholder="POA"
                value={formData.POA}
                onChange={handleInputChange}
                // disabled={userRole !== "midwife"}
                sx={{ width: "100%" }}
                />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <TextField
                required
                name="Weight"
                label="Weight"
                placeholder="Weight"
                value={formData.Weight}
                onChange={handleInputChange}
                // disabled={userRole !== "midwife"}
                sx={{ width: "100%" }}
                />
            </Grid>
        
            <Grid container spacing={1} item xs={12} mt={1} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <Typography ml={1}>Urine</Typography>
                    <Grid item xs={3} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <TextField
                        required
                        placeholder="Sugar"
                        name="sugar"
                        label="Sugar"
                        value={formData.sugar}
                        onChange={handleInputChange}
                        // disabled={userRole !== "midwife"}
                        sx={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item xs={3} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <TextField
                        required
                        placeholder="Albumin"
                        name="albumin"
                        label="Albumin"
                        value={formData.albumin}
                        onChange={handleInputChange}
                        // disabled={userRole !== "midwife"}
                        sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <Typography  mb={5}>Blood Pressure</Typography>
                    <Slider
      
                        aria-label="Temperature"
                        getAriaValueText={valuetext}
                        valueLabelDisplay="on"
                        //shiftStep={30}
                        step={10}
                        marks
                        min={50}
                        max={160}
                        required 
                        // disabled={userRole !== "MOH doctor"}
                        sx={{width:"75%", ml:"10px"}}
                    />
                </Grid>

                

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <Typography ml={1}>Oedema</Typography>
                    <RadioInputGroup label="Ankle" options={radioGroupOptions}  required />
                    <RadioInputGroup label="Facial" options={radioGroupOptions}  required />
                </Grid>  

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <RadioInputGroup label="Pallor" options={radioGroupOptions} required  />
                </Grid> 

                

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <TextField
                        required
                        placeholder="Fundal Height"
                        name="FundalHeight"
                        label="Fundal Height"
                        value={formData.FundalHeight}
                        onChange={handleInputChange}
                        // disabled={userRole !== "MOH doctor"}
                        sx={{ width: "100%" }}
                        />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <FormControl  fullWidth>
                        <InputLabel>Foetal Lie</InputLabel>
                        <Select
                            required
                            name="FoetalLie"
                            label="Foetal Lie"                            
                            onChange={handleInputChange}
                            // disabled={userRole !== "MOH doctor"}
                            sx={{ width: "100%" }}
                        >
                            {PresentingPart.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    
                </Grid>

                <Grid item xs={6} mt={1} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <FormControl  fullWidth>
                        <InputLabel>Presenting Part</InputLabel>
                        <Select
                            required
                            label="Presenting Part"
                            name="PresentingPart"
                            onChange={handleInputChange}
                            // disabled={userRole !== "MOH doctor"}
                            sx={{ width: "100%" }}
                        >
                        {PresentingPart.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="FM" options={radioGroupOptions}  />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="FHS" options={radioGroupOptions}  />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <TextField
                        required
                        placeholder="Iron"
                        name="iron"
                        label="Iron"
                        value={formData.iron}
                        onChange={handleInputChange}
                        // disabled={userRole !== "midwife"}
                        sx={{ width: "100%" }}
                        />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <TextField
                        required
                        placeholder="Folate"
                        name="folate"
                        label="Folate"
                        value={formData.folate}
                        onChange={handleInputChange}
                        // disabled={userRole !== "midwife"}
                        sx={{ width: "100%" }}
                        />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <TextField
                        required
                        placeholder="Calcium"
                        name="calcium"
                        label="Calcium"
                        value={formData.calcium}
                        onChange={handleInputChange}
                        // disabled={userRole !== "midwife"}
                        sx={{ width: "100%" }}
                        />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                        <TextField
                        required
                        placeholder="Vitamin C"
                        name="vitminC"
                        label="Vitmin C"
                        value={formData.vitminC}
                        onChange={handleInputChange}
                        // disabled={userRole !== "midwife"}
                        sx={{ width: "100%" }}
                        />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <TextField
                    required
                    placeholder="Examined Officer ID"
                    name="ExaminedOfficerID"
                    label="Examined Officer ID"
                    sx={{ width: "100%" }}
                    />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <TextField
                    required
                    placeholder="Examined Officer Designation"
                    name="ExaminedOfficerDesignation"
                    value="MOH Doctor"
                    label="Examined Officer Designation"
                    sx={{ width: "100%" }}
                    />
                </Grid>

                <Grid item xs={12}  sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <Button variant="contained" color="primary" sx={{mb:'20px'}}>
                    Submit
                    </Button>
                </Grid>

        </Grid>
        </Box>
            
    </form>
    </Box> 
  );
};

export default ClinicCareInformationForm;
