import {React, useState} from 'react'
import { Grid,Box,TextField,Checkbox,FormControlLabel ,Autocomplete,Chip, Radio, RadioGroup, FormLabel,FormControl,MenuItem, InputLabel} from '@mui/material'
import Select from '@mui/material/Select';

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

const PregMedicalConditionForm = () => {
    const surgeries = ['Appendectomy', 'Tonsillectomy and Adenoidectomy', 'Orthodontic Procedures','Ovarian Cyst Removal','Gynecological Surgeries','Plastic and Reconstructive Surgeries','Orthopedic Surgeries','Dental Surgeries','Other'];

    const [inputValue, setInputValue] = useState('');

    const radioGroupOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }, 
      ];

      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

      const usedMethod = [
        { value: 'T', label: 'T'},
        { value: 'PL', label: 'PL'},
        { value: 'P', label: 'P'},
        { value: 'IP', label: 'IP'},
        { value: 'N', label: 'N'},
        { value: 'P', label: 'P'},
        { value: 'C', label: 'C'},
      ];

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
              
                <FormControlLabel control={<Checkbox />} label="Diabetes" style={{color:"black"}} />
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Malaria"  style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Cardiac disease" style={{color:"black"}} />
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Renal disease" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Hypertension" style={{color:"black"}} />
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Hepatic disease" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Psychiatric illness" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Epilepsy" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Malignancies" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Haematological diseases" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Tuberculosis" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Thyroid diseases" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Bronchial asthma" style={{color:"black"}}/>
                </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormControlLabel control={<Checkbox />} label="Previous DVT" style={{color:"black"}}/>
            
            </Grid>
            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <Autocomplete
                    multiple
                    sx={{ width: "50%" }}
                    options={surgeries}
                    renderInput={(params) => <TextField {...params} label="Surgeries other than LSCS " />}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                        <Chip key={index} label={option} {...getTagProps({ index })} />
                        ))
                    }
                    />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="Consanguinity" options={radioGroupOptions} sx={{ width: "100%" }} />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="Rubella immunization" options={radioGroupOptions} sx={{ width: "100%" }} />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="Pre-pregnancy screening  done" options={radioGroupOptions} sx={{ width: "100%" }} />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="Preconceptional folic acid" options={radioGroupOptions} sx={{ width: "100%" }} />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="History of subfertility" options={radioGroupOptions} sx={{ width: "100%" }} />
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <RadioInputGroup label="Planned pregnancy or not" options={radioGroupOptions} sx={{ width: "100%" }} />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <FormControl  fullWidth>
                    <InputLabel>Family planning method last used</InputLabel>
                        <Select
                        required
                        name="usedMethod"
                        label="Family planning method last used"
                        placeholder="Family planning method last used"
                        onChange={handleInputChange}
                        sx={{ width: "100%" }}
                        >
                        {usedMethod.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </Select>
                    </FormControl>
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

export default PregMedicalConditionForm
