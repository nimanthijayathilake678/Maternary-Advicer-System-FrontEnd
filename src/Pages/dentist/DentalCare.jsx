// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import './dentalCare.css';
// import 'dayjs/plugin/weekOfYear';
// import 'dayjs/plugin/customParseFormat';
// import 'dayjs/plugin/localizedFormat';
// import 'dayjs/plugin/isBetween';
// import Figure from 'react-bootstrap/Figure';
// import image1 from './image/image1.png'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';





// export default function DentalCare() {
//  const [value, setValue] = React.useState(dayjs('2022-04-17'));
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '24ch' },'@media (max-width: 768px)': {
//           width: '100%', 
//         },
//       }}
//       noValidate
//       autoComplete="off"
//     >


//     <div className='grid-container '>
//     <div className='grid-item'>
//       <div className='header'>Dental Care</div>
//       <div className='grid-form'>
//         <div className='grid-element'>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DemoContainer components={['DatePicker', 'DatePicker']}>
//             <DatePicker
//               label="Referred Date"
//               value={value}
//               onChange={(newValue) => setValue(newValue)}
//             />
//           </DemoContainer>
//         </LocalizationProvider>
//         </div>

//         <div className='grid-element'>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DemoContainer components={['DatePicker', 'DatePicker']}>
//             <DatePicker
//               label="Date Of Examination"
//               value={value}
//               onChange={(newValue) => setValue(newValue)}
//             />
//           </DemoContainer>
//         </LocalizationProvider>
//         </div> 

//         <div className='grid-element'>
//         <TextField
//           id="outlined-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//         />
//         </div> 

//         <div className='grid-element'>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DemoContainer components={['DatePicker', 'DatePicker']}>
//             <DatePicker
//               label="Controlled picker"
//               value={value}
//               onChange={(newValue) => setValue(newValue)}
//             />
//           </DemoContainer>
//         </LocalizationProvider>
//         </div>

//         <div className='grid-element'>
//         <TextField
//           id="outlined-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//         />
//         </div> 
//       </div>
//     </div>
//     <div  className='grid-item2'>
    //  <Figure>
    //   <Figure.Image
    //     src={image1}
    //   />
    // </Figure>
//     </div>
      
//     </div>
//     </Box>
//   )
// }


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

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor:'RGB(48, 102, 184)',
  '&:hover': {
    backgroundColor: purple[700],
  },

}));



export default function SimpleContainer() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  return (
    
    <div style={{backgroundColor:'white'}}>
      <Container maxWidth="lg" >
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
          <div className='header' style={{color:'black',fontSize:'50px'}}>Dental Care</div>
            <Box
                component="form"
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
                        onChange={(newValue) => setValue(newValue)}
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
                        onChange={(newValue) => setValue(newValue)}
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
                  />
                </div>
                <div className='element'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                      <DatePicker
                        label="Examination Of Dentist"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                  />
                </div>
                
                <div className='button'>
                  <Stack spacing={2} direction="row">
                    <ColorButton variant="contained">Submit</ColorButton>
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

