import React from "react";
import { useState } from "react";

import TextField from "@mui/material/TextField";
//import Button from "@mui/material/Button";
//import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Radio, FormControlLabel, RadioGroup, FormControl,FormLabel, Typography, InputLabel,Select,MenuItem, Button } from "@mui/material";
import Header from "../../../Components/Header";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';


function RadioInputGroup({ label, options }) {

  return (
    <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
      <FormControl>
        <FormLabel id={`radio-group-label-${label}`}>{label}</FormLabel>
        <RadioGroup row aria-labelledby={`radio-group-label-${label}`} style={{color:"black"}} name={`row-radio-buttons-group-${label}`}>
          {options.map((option, index) => (
            <FormControlLabel key={index} value={option.value} control={<Radio />} label={option.label} />
          ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}


const FieldClinicInformationForm = () => {
  const [formData, setFormData] = useState({
    Pregnancy_id: "",
    Couple_id: "",
    P_Visit_Date: "",
    P_Poa: "",
    P_Anemia: "",
    P_Fundal_Height: "",
    P_PresentingPart: "",
    P_FM: "",
    P_FHS: "",
    P_Oedema: "",
    P_Sugar: "",
    P_Albumin: "",
    P_Nutritional_Requirements: "",
    P_EDD_Informed: "",
    P_DangerousSituation_Informed: "",
    P_Conditions_ToAvoid: "",
    P_Importance_Of_Mindful: "",
    P_Personal_Safety: "",
    P_Onset_Informed: "",
    P_Hospital_Things: "",
    P_BabyCare: "",
    P_Risk_Characteristics: "",
    P_Exclusive_Breastfeeding: "",
    P_Breastfeeding_Posture: "",
    P_Confirm_Milk_Availability: "",
    P_Postpartum_RiskFactor: "",
    P_FamilyPlanning_Idea: "",
    P_FamilyPlanning_Methods: "",
    P_Date_To_Visit_Clinic: ""
  });
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/fieldClinics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");
          // Reset form fields or show success message
        } else {
          console.error("Form submission failed");
          // Handle error
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const radioGroupOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }, 
  ];

  const P_PresentingPart = [
    { value: 'head', label: 'Head'},
    { value: 'breech', label: 'Breech'},
    { value: 'other', label: 'Other'},
  ];

  return (
    <div>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Field Clinic Information" />
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
          <Grid container spacing={2}   sx={{ width: "90%" }}>
            
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Pregnancy_id"
                name="Pregnancy_id"
                label="Pregnancy_id"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Couple_id"
                name="Couple_id"
                label="Couple_id"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="P_Visit Date" required sx={{ width: "100%" }}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="POA"
                name="P_POA"
                label="POA"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup 
                  label="Anemia" 
                  options={radioGroupOptions} 
                  selectedValue={formData.anemia}
                  onChange={handleRadioChange}
                  name="P_Anemia"
                />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                  required
                  placeholder="Fundal Height"
                  name="P_Fundal_Height"
                  label="Fundal Height"
                  sx={{ width: "100%" }}
              />
            </Grid>
          

            <Grid item xs={6} mt={1} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <FormControl  fullWidth>
                <InputLabel>Presenting Part</InputLabel>
                <Select
                  label="Presenting Part"
                  name="P_PresentingPart"
                  value={formData.P_PresentingPart}
                  onChange={handleChange}
                >
                  {P_PresentingPart.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup 
                  required 
                  label="FM" 
                  options={radioGroupOptions}
                  selectedValue={formData.P_FM}
                  onChange={handleRadioChange}
                  name="P_FM"
                 />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup 
                  required 
                  label="FHS" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_FHS}
                  onChange={handleRadioChange}
                  name="P_FHS"
                />
            </Grid>
           
            <Grid  item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <RadioInputGroup 
                  required 
                  label="Oedema" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Oedema}
                  onChange={handleRadioChange}
                  name="P_Oedema"
              />
            </Grid>

            <Grid container spacing={2} item xs={6} mt={1} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <Typography color="black">Urine</Typography>
              <Grid item xs={3} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <TextField
                  required
                  placeholder="Sugar"
                  name="P_Sugar"
                  label="Sugar"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={3} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <TextField
                  required
                  placeholder="Albumin"
                  name="P_Albumin"
                  label="Albumin"
                  sx={{ width: "100%" }}
                />
              </Grid>
            </Grid>

            

            {/* <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="Albumin" options={radioGroupOptions} />
            </Grid> */}

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <Typography variant="h6" color="#2a777c" mt={5}>Prenatal Health Tips</Typography>
            </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Nutritional Requirements/ On Myth" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Nutritional_Requirements}
                  onChange={handleRadioChange}
                  name="P_Nutritional_Requirements"
                  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Was informed about the expected delivery time?" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_EDD_Informed}
                  onChange={handleRadioChange}
                  name="P_EDD_Informed"
                  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="If there were any dangerous situations, were the relatives informed about it?" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_DangerousSituation_Informed}
                  onChange={handleRadioChange}
                  name="P_DangerousSituation_Informed"
                  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Conditions to avoid during pregnancy  /  Risk factors" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Conditions_ToAvoid}
                  onChange={handleRadioChange}
                  name="P_Conditions_ToAvoid"
                  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="The importance of being mindful of fetal movements" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Importance_Of_Mindful}
                  onChange={handleRadioChange}
                  name="P_Importance_Of_Mindful"
                  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Personal Safety" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Personal_Safety}
                  onChange={handleRadioChange}
                  name="P_Personal_Safety"
                  />
                </Grid>

                <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <Typography variant="h6" color="#2a777c" mt={5}>Child Birth Tips</Typography>
                </Grid>  

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Informing the mother about the onset of labour" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Onset_Informed}
                  onChange={handleRadioChange}
                  name="P_Onset_Informed"
                  />
                </Grid>

                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="What to take with you to the hospital" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Hospital_Things}
                  onChange={handleRadioChange}
                  name="P_Hospital_Things"
                  />
                </Grid> 

                <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <Typography variant="h6" color="#2a777c"   mt={5}>Postpartum Tips</Typography>
                </Grid>  
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup label="Baby Care" options={radioGroupOptions}
                  selectedValue={formData.P_BabyCare}
                  onChange={handleRadioChange}
                  name="P_BabyCare" 
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Risk characteristics of the new born" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Risk_Characteristics}
                  onChange={handleRadioChange}
                  name="P_Risk_Characteristics:"
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Exclusive breastfeeding" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Exclusive_Breastfeeding}
                  onChange={handleRadioChange}
                  name="P_Exclusive_Breastfeeding"
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Relation to correct breastfeeding posture" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Breastfeeding_Posture}
                  onChange={handleRadioChange}
                  name="P_Breastfeeding_Posture"
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Knowing without doubt if there is milk" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Confirm_Milk_Availability}
                  onChange={handleRadioChange}
                  name="P_Confirm_Milk_Availability"
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Postpartum risk factor" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_Postpartum_RiskFactor}
                  onChange={handleRadioChange}
                  name="P_Postpartum_RiskFactor"
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="The need for family planning" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_FamilyPlanning_Idea}
                  onChange={handleRadioChange}
                  name="P_FamilyPlanning_Idea"
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                  <RadioInputGroup 
                  label="Awareness about family planning methods" 
                  options={radioGroupOptions} 
                  selectedValue={formData.P_FamilyPlanning_Methods}
                  onChange={handleRadioChange}
                  name="P_FamilyPlanning_Methods"
                  />
                </Grid>
                <Grid container spacing={2}   sx={{ width: "90%" }}>
                  <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateField']}>
                        <DateField label="Date to visit Clinic" required sx={{ width: "100%" }} name="P_Date_To_Visit_Clinic"/>
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid> 
                </Grid>

                <Grid item xs={12}  sx={{ padding: "1em 1em 0em 1em !important" }}>
                <Button variant="contained" color="primary" sx={{mb:'20px'}}>
                  Submit
                </Button>
              </Grid>

          </Grid>
        </Box>
      </form>
    </div>
  )
}

export default FieldClinicInformationForm;
