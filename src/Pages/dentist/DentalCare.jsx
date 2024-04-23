

import * as React from 'react';
import Container from '@mui/material/Container';
import { blue } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
 import './dentalCare.css';
// import 'dayjs/plugin/weekOfYear';
// import 'dayjs/plugin/customParseFormat';
// import 'dayjs/plugin/localizedFormat';
// import 'dayjs/plugin/isBetween';
import dayjs from 'dayjs';
import image1 from './image/image1.png';
import Figure from 'react-bootstrap/Figure';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { useState } from 'react';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor:'RGB(48, 102, 184)',
  '&:hover': {
    backgroundColor: purple[700],
  },

}));



export default function SimpleContainer() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const [state,setState] =useState({
    Referred:"",
    DataOfExamination:"",
    Treatment:"",
    ExaminationOfDentist:"",
    DentistMore:""
  });

  const handleReferred = (event)=>{
    const Referred1 = dayjs(event).format('YYYY-MM-DD');
    setState({
      ...state,
      Referred : Referred1
    })
  }

  const handleDataOfExamination = (event)=>{
    const DataOfExamination1 = dayjs(event).format('YYYY-MM-DD');
    setState({
      ...state,
      DataOfExamination: DataOfExamination1
    })
  }

  const handleTreatment = (event)=>{
    setState({
      ...state,
      Treatment : event.target.value
    })
    
  }

  const handleExaminationOfDentist = (event)=>{
    const ExaminationOfDentist1 = dayjs(event).format('YYYY-MM-DD');
    setState({
      ...state,
      ExaminationOfDentist : ExaminationOfDentist1
    })
  }

  const handleDentistMore = (event)=>{
    setState({
      ...state,
      DentistMore : event.target.value 
    })
  }

  const submitFunc = (event) =>{
    event.preventDefault();
    console.log(state)
  }


  return (
    
    <div style={{backgroundColor:'white'}}>
      <Container maxWidth="lg" >
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
          <div className='header' style={{fontSize:'50px'}}>Dental Care</div>
            <Box
                component="form"
                onSubmit={submitFunc}
                sx={{
                  '& .MuiTextField-root': { m: 2, width: '80%' },
                  border: '2px solid #222121', // Box border style
                  borderRadius: '20px', // Optional: Border radius
                   padding: '9px', // Optional: Padding
                   justifyContent:'center',

                }}
                noValidate
                autoComplete="off"
                >
                <div className='element'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                      <DatePicker
                        label="Referred Date"
                        value={value}
                        onChange={handleReferred}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div className='element'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                      <DatePicker
                        label="Data Of Examination"
                        value={value}
                        onChange={handleDataOfExamination}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div >
                  <TextField
                    id="outlined-multiline-static"
                    label="Treatment"
                    multiline
                    rows={4}
                    defaultValue=""
                    onChange={handleTreatment}
                  />
                </div>
                <div className='element'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                      <DatePicker
                        label="Examination Of Dentist"
                        value={value}
                        onChange={handleExaminationOfDentist}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    onChange={handleDentistMore}
                  />
                </div>
                
                <div className='button'>
                  <Stack spacing={2} direction="row">
                    <ColorButton variant="contained" type="submit" >Submit</ColorButton>
                  </Stack>
                </div>
            </Box>
          </Grid>
          <Grid item xs={8} style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Figure>
                <Figure.Image
                  src={image1}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </Figure>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

