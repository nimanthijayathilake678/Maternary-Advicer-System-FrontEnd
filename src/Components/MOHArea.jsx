import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function MOHArea() {

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: '100%' }}
      options={mohArea}
      autoHighlight
      getOptionLabel={(option) => option.label}
      // value={selectedValue}
      // onChange={handleOnChange} // Using the separate function for onChange
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.label} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="MOH Area "
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const mohArea = [
  {label: 'Central Clinic'},
  {label: 'Kadaweediya'},
  {label: 'Kotuwegoda'},
  {label: 'Madiha'},
  {label: 'Paramulla'},
  {label: 'Uyanwaththa'},
  {label: 'Disamulanawaththa'},
  {label: 'Walgama'},
];
