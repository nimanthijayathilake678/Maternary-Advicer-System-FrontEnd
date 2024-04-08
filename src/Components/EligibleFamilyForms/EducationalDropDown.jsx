import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function EducationalDropDown() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          
          {option.label} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Educational Level"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const countries = [
  {label: 'No Education'},
  {label: 'Until 0-5 years'},
  {label: 'Until 6-11 years'},
  {label: 'Over 11 years'},
  {label: 'Until 6-11 years'},
  {label: 'Higher Education (Graduate or Diploma)'},
  
];
