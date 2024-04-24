import React from 'react'
import { useState } from 'react';
import { Grid, Box, Button, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateField } from "@mui/x-date-pickers/DateField";
import Header from '../../../Components/Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PostpartumFieldCare = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const codeNo = [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'C', label: 'C' },
        { value: 'D', label: 'D' },
        { value: 'E', label: 'E' },
        { value: 'F', label: 'F' },
        { value: 'G', label: 'G' },
        { value: 'H', label: 'H' },
        { value: 'I', label: 'I' },
        { value: 'J', label: 'J' },
        { value: 'K', label: 'K' },
    ];

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Delivery and Postnatal Care" />
            </Box>
            <Formik
                initialValues={{
                    homeVisitDate: '',
                    micronutrientsDate: '',
                    socialZScore: '',
                    hospitalName: '',
                }}
                validationSchema={Yup.object({
                    homeVisitDate: Yup.date().required('Date of home visit by Midwife is required'),
                    micronutrientsDate: Yup.date().required('Date of issuing Micronutrients is required'),
                    socialZScore: Yup.string().required('Social Z Score is required'),
                    hospitalName: Yup.string().required('Identified post partum morbidities is required'),
                })}
                
                onSubmit={(values, { setSubmitting, setErrors }) => {
                  // Perform your validation here
                  const errors = {};
                  if (!values.homeVisitDate) {
                      errors.homeVisitDate = 'Date of home visit by Midwife is required';
                  }
                  if (!values.micronutrientsDate) {
                      errors.micronutrientsDate = 'Date of issuing Micronutrients is required';
                  }
                  if (!values.socialZScore) {
                      errors.socialZScore = 'Social Z Score is required';
                  }
                  if (!values.hospitalName) {
                      errors.hospitalName = 'Identified post partum morbidities is required';
                  }
              
                  // Check if there are any validation errors
                  if (Object.keys(errors).length > 0) {
                      setErrors(errors); // Set validation errors
                      setSubmitting(false); // Set submitting state to false
                  } else {
                      // If no validation errors, proceed with form submission
                      console.log(values); // You can replace this with your actual form submission logic
                      setSubmitting(false); // Set submitting state to false
                  }
              }}
              
            >
                <Form>
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
                        flexDirection="column"
                    >
                        <Grid container spacing={2} sx={{ width: "90%" }} border={1} borderColor="primary.main" borderRadius={3} m={2}>

                            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateField']}>
                                        <DateField name="homeVisitDate" label="Date of home visit by Midwife" required sx={{ width: "100%" }} />
                                    </DemoContainer>
                                    <ErrorMessage name="homeVisitDate" component="div" />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateField']}>
                                        <DateField name="micronutrientsDate" label="Date of issuing Micronutrients" required sx={{ width: "100%" }} />
                                    </DemoContainer>
                                    <ErrorMessage name="micronutrientsDate" component="div" />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                                <FormControl fullWidth>
                                    <InputLabel>Social Z Score</InputLabel>
                                    <Field
                                        as={Select}
                                        name="socialZScore"
                                        placeholder="Social Z Score"
                                        onChange={handleInputChange}
                                        sx={{ width: "100%" }}
                                    >
                                        {codeNo.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="socialZScore" component="div" />
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
                                <Field
                                    as={TextField}
                                    required
                                    name="hospitalName"
                                    label="Identified post partum morbidities "
                                    placeholder="Identified post partum morbidities "
                                    sx={{ width: "100%" }}
                                />
                                <ErrorMessage name="hospitalName" component="div" />
                            </Grid>

                            <Grid container justifyContent="flex-end" item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }} >
                                <Button type="submit" variant="contained" color="primary" sx={{ mb: '20px' }}>
                                    Submit
                                </Button>
                            </Grid>

                        </Grid>
                    </Box>
                </Form>
            </Formik>
        </Box>
    )
}

export default PostpartumFieldCare;
