import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function BloodDropDown() {
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
          label="Blood Type and Rhesus Factor "
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
  {label: 'A+'},
  {label: 'A-'},
  {label: 'B+'},
  {label: 'B-'},
  {label: 'O+'},
  {label: 'O-'},
  {label: 'AB+'},
  {label: 'AB-'},
  
];
