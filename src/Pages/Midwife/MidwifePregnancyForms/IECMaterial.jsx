import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box,Grid , Button } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import Header from '../../../Components/Header';

export default function IECMaterial() {
  return (
    <Box>
        <Box m="20px">
                    {/* HEADER */}
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="Information, Education and Communication Materials"/>
                    </Box>
              </Box>

              <Grid  justifyContent="center" alignItems="center" sx={{ width: "50%" }} border={1} borderColor="primary.main" borderRadius={3} mt={0} m={5} >
                <Grid item xs={10} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Pre Preganacy Record Book" />
                    <FormControlLabel control={<Checkbox />} label="Breastfeeding Book" />
                    <FormControlLabel control={<Checkbox />} label="Early Childhood Development Books" />
                    <FormControlLabel control={<Checkbox />} label="Paper on Family Planning Methods" />

                </FormGroup>
                </Grid>
                
                <Grid item xs={10} sx={{ padding: "1em 1em 0em 1em !important" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateField']}>
                        <DateField label="Date of issuing Kick Count Chart" required sx={{ width: "100%" }} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

                <Grid container justifyContent="flex-end" item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }} >
                    <Button variant="contained" color="primary" sx={{ mb: '20px' }}>
                        Submit
                    </Button>
                </Grid>

              </Grid>

    </Box>




    
  );
}