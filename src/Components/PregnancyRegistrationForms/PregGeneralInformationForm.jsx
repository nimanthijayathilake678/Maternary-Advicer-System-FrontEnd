import React, { useState, useRef } from 'react';
import { TextField, Grid, Box } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useAuth from '../../Hooks/useAuth';


const PregGeneralInformationForm = () => {
  const initialValues={
    P_Reg_Num:"",
    P_Reg_Location:"",
    P_Reg_Date:"",
    couple_id:"",
    C_Reg_Date:"",
    P_Grama_Division:"",
    P_MOH_Division:"",
    P_PHM_Division:"",
    P_Hospital_Clinic_Name:"",
    P_Consultant_Name:"",
    P_Field_Clinic_Name:"",
    P_Mother_Name:"",
    P_Father_Name:"",
    P_Telephone:"",
    P_Address:"",
  };

  const inputRef = useRef(null);
  const [user,setUser] = useState("");
  const auth = useAuth();
  const state = false;

  const [errors, setErrors] = useState({});

  


    const validationSchema = Yup.object({
      P_Reg_Num: Yup.string().required('Pregnancy Registration No is required'),
      P_Reg_Location: Yup.string().required('Pregnancy Registration Location is required'),
      P_Reg_Date: Yup.date().required('Pregnancy Registration Date is required'),
      couple_id: Yup.string().required('Eligible Registration No is required'),
      C_Reg_Date: Yup.date().required('Eligible Family Registration Date is required'),
      P_Grama_Division: Yup.string().required('Grama Niladari Division is required'),
      P_MOH_Division: Yup.string().required('MOH Area is required'),
      P_PHM_Division: Yup.string().required('PHM Area is required'),
      P_Hospital_Clinic_Name: Yup.string().required('Name of the Hospital Clinic is required'),
      P_Consultant_Name: Yup.string().required('Name of the Consultant Obstetrician is required'),
      P_Field_Clinic_Name: Yup.string().required('Name of the Field Clinic is required'),
      P_Mother_Name: Yup.string().required("Mother's Name is required"),
      P_Father_Name: Yup.string().required("Father's Name is required"),
      P_Telephone: Yup.string().required('Telephone No is required'),
      P_Address: Yup.string().required('Address is required'),
    });
  
    const handleSubmit = (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    };
  
    
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
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
        <Grid container spacing={2} sx={{ width: "60%" }} border={1} borderColor="primary.main" borderRadius={3} m={2}> 
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Pregnancy Registration No"
                name="P_Reg_Num"
                label="Pregnancy Registration No"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Pregnancy Registration Location"
                name="P_Reg_Location"
                label="Pregnancy Registration Location"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Pregnancy Registration Date" name='P_Reg_Date'required sx={{ width: "50%" }}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Eligible Registration No"
                name="couple_id"
                label="Eligible Registration No"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "0.5em 1em 0em 1em !important" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField']}>
                  <DateField label="Eligible Family Registration Date" name='C_Reg_Date' required sx={{ width: "100%" }}/>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Grama Niladari Division"
                name=" P_Grama_Division"
                label="Grama Niladari Division"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="MOH Area"
                name="P_MOH_Division"
                label="MOH Area"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="PHM Area"
                name="P_PHM_Division"
                label="PHM Area"
                sx={{ width: "100%" }}
              />
            </Grid>


            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Name of the Hospital Clinic"
                name="P_Hospital_Clinic_Name"
                label="Name of the Hospital Clinic"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Name of the Consultant Obstetrician"
                name="P_Consultant_Name"
                label="Name of the Consultant Obstetrician"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Name of the Field Clinic"
                name="P_Field_Clinic_Name"
                label="Name of the Field Clinic"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Mother's Name"
                name="P_Mother_Name"
                label="Mother's Name"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Father's Name"
                name="P_Father_Name"
                label="Father's Name"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Telephone No"
                name="P_Telephone"
                label="Telephone No"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Address"
                name="P_Address"
                label="Address"
                sx={{ width: "100%" }}
              />
            </Grid>


        </Grid>


    </Box>
    </form>
    )}
    </Formik>
  )
}

export default PregGeneralInformationForm
