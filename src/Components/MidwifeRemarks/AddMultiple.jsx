import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function AddMultiple(props) {
  const [inputValue, setInputValue] = React.useState('');
  const [selectedValues, setSelectedValues] = React.useState([]);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setSelectedValues([...selectedValues, { title: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <Autocomplete
      multiple
      id="multiple-limit-tags"
      options={[]} // Empty options array since we're allowing free input
      value={selectedValues}
      onChange={(event, newValue) => {
        setSelectedValues(newValue);
      }}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      freeSolo // Enable free input
      renderInput={(params) => (
        <TextField
          type={props.dataType}
          {...params}
          label={props.labelName}
          placeholder={props.labelName}
          onKeyDown={handleKeyDown} // Listen for Enter key to add new value
        />
      )}
      sx={{ width: '500px' }}
    />
  );
}
