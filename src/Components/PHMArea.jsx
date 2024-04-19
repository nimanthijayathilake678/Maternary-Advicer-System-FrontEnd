import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function PHMArea() {
  

  return (
    <Autocomplete
      id="phm-area-select-demo"
      options={phmArea}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="PHM Area"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const phmArea = [
  {label: 'Central Clinic'},
  {label: 'Kadaweediya'},
  {label: 'Kotuwegoda'},
  {label: 'Madiha'},
  {label: 'Paramulla'},
  {label: 'Uyanwaththa'},
  {label: 'Disamulanawaththa'},
  {label: 'Walgama'},
];
