/*
import "../../css/MOHAdmin/Register.css";
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const occupations = ['VOG Doctor', 'MOH Doctor', 'Dentist', 'MidWife'];
const areas = ['Hittatiya Central', 'Hittatiya East', 'Kadeweediya', 'Kotuwegoda', 'Meddawatta', 'Pamburana','Polhena','Thotamuna','Thudawa','Uyanwatta','Walgama Meda','Walgama North','Walgama South','Walpola 1','Walpola 2','Welegoda','Welegoda East','Weliweriya','Weragampita'];

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    nicNo: '',
    birthday: '',
    contactNo: '',
    email: '',
    sex: 'male',
    marriedStatus: 'single',
    occupation: '',
    area: '',
    username: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission/validation here
    console.log(formData);
  };

  return (
    <div className="form">
    <Container maxWidth="sm">
      <div className="font">
      <Typography variant="h4" align="center" gutterBottom>
        Registration Form
      </Typography></div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="NIC No."
          name="nicNo"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          value={formData.nicNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Birthday"
          name="birthday"
          type="date"
          value={formData.birthday}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Contact No."
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          inputProps={{
            pattern: '\\d{10}',
            title: 'Please enter 10 digits',
          }}
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Sex</FormLabel>
          <RadioGroup name="sex" value={formData.sex} onChange={handleChange} row>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
          <div>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Married Status</FormLabel>
          <RadioGroup name="marriedStatus" value={formData.marriedStatus} onChange={handleChange} row>
            <FormControlLabel value="single" control={<Radio />} label="Single" />
            <FormControlLabel value="married" control={<Radio />} label="Married" />
            <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
          </RadioGroup>
        </FormControl>
        </div>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="occupation">Occupation</InputLabel>
          <Select
            label="Occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          >
            <MenuItem value="">Select Occupation</MenuItem>
            {occupations.map((occupation) => (
              <MenuItem key={occupation} value={occupation}>
                {occupation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="area">Area</InputLabel>
          <Select
            label="Area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
          >
            <MenuItem value="">Select Area</MenuItem>
            {areas.map((area) => (
              <MenuItem key={area} value={area}>
                {area}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          minLength="8"
          required
        />

        <TextField
          label="Password"
          name="password"
          type={formData.showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          title="Must contain at least one uppercase letter, one lowercase letter, and one number. Minimum 8 characters."
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {formData.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type={formData.showConfirmPassword ? 'text' : 'password'}
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          title="Must contain at least one uppercase letter, one lowercase letter, and one number. Minimum 8 characters."
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                  {formData.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="button">
        <Button  type="submit" variant="contained" color="primary">
          Submit
        </Button></div>
      </form>
    </Container>
    </div>
  );
}

export default Register;
*/
/*

import "../../css/MOHAdmin/Register.css";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  IconButton,
  InputAdornment
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const occupations = ['VOG Doctor', 'MOH Doctor', 'Dentist', 'MidWife'];
const areas = ['Hittatiya Central', 'Hittatiya East', 'Kadeweediya', 'Kotuwegoda', 'Meddawatta', 'Pamburana', 'Polhena', 'Thotamuna', 'Thudawa', 'Uyanwatta', 'Walgama Meda', 'Walgama North', 'Walgama South', 'Walpola 1', 'Walpola 2', 'Welegoda', 'Welegoda East', 'Weliweriya', 'Weragampita'];

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  nicNo: Yup.string().matches(/^(?:\d{9}[xXvV]|\d{12})$/,'Nic must be valid Type').required('NIC No. is required'),
  birthday: Yup.string().required('Birthday is required'),
  contactNo: Yup.string().matches(/^\d{10}$/, 'Contact No. must be 10 digits').required('Contact No. is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  occupation: Yup.string().required('Occupation is required'),
  area: Yup.string().required('Area is required'),
  username: Yup.string().min(8, 'Username must be at least 8 characters').required('Username is required'),
  password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number. Minimum 8 characters.').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

function Register() {

  const initialValues = {
    fullName: '',
    nicNo: '',
    birthday: '',
    contactNo: '',
    email: '',
    sex: 'male',
    marriedStatus: 'single',
    occupation: '',
    area: '',
    username: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  };

  

  const handleSubmit = (values, actions) => {
    // You can perform form submission logic here
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <div className="form">
      <Container maxWidth="sm">
        <div className="font">
          <Typography variant="h4" align="center" gutterBottom>
            Registration Form
          </Typography>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                label="Full Name"
                name="fullName"
                fullWidth
                margin="normal"
                error={touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
              />

              <Field
                as={TextField}
                label="NIC No."
                name="nicNo"
                fullWidth
                margin="normal"
                error={touched.nicNo && !!errors.nicNo}
                helperText={touched.nicNo && errors.nicNo}
              />

              <Field
                as={TextField}
                label="Birthday"
                name="birthday"
                type="date"
                fullWidth
                margin="normal"
                error={touched.birthday && !!errors.birthday}
                helperText={touched.birthday && errors.birthday}
              />

              <Field
                as={TextField}
                label="Contact No."
                name="contactNo"
                fullWidth
                margin="normal"
                error={touched.contactNo && !!errors.contactNo}
                helperText={touched.contactNo && errors.contactNo}
                inputProps={{
                  pattern: '\\d{10}',
                  title: 'Please enter 10 digits',
                }}
              />

              <Field
                as={TextField}
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />

              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Sex</FormLabel>
                <RadioGroup name="sex">
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
              </FormControl>

              <div>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Married Status</FormLabel>
                  <RadioGroup name="marriedStatus">
                    <FormControlLabel value="single" control={<Radio />} label="Single" />
                    <FormControlLabel value="married" control={<Radio />} label="Married" />
                    <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                  </RadioGroup>
                </FormControl>
              </div>

              <Field
                as={FormControl}
                fullWidth
                margin="normal"
              >
                <InputLabel htmlFor="occupation">Occupation</InputLabel>
                <Field
                  as={Select}
                  name="occupation"
                  required
                >
                  <MenuItem value="">Select Occupation</MenuItem>
                  {occupations.map((occupation) => (
                    <MenuItem key={occupation} value={occupation}>
                      {occupation}
                    </MenuItem>
                  ))}
                </Field>
              </Field>

              <Field
                as={FormControl}
                fullWidth
                margin="normal"
              >
                <InputLabel htmlFor="area">Area</InputLabel>
                <Field
                  as={Select}
                  name="area"
                  required
                >
                  <MenuItem value="">Select Area</MenuItem>
                  {areas.map((area) => (
                    <MenuItem key={area} value={area}>
                      {area}
                    </MenuItem>
                  ))}
                 </Field>
                 </Field>

<Field
  as={TextField}
  label="Username"
  name="username"
  fullWidth
  margin="normal"
  error={touched.username && !!errors.username}
  helperText={touched.username && errors.username}
/>

<Field
  as={TextField}
  label="Password"
  name="password"
  type="password"
  fullWidth
  margin="normal"
  error={touched.password && !!errors.password}
  helperText={touched.password && errors.password}
/>

<Field
  as={TextField}
  label="Confirm Password"
  name="confirmPassword"
  type="password"
  fullWidth
  margin="normal"
  error={touched.confirmPassword && !!errors.confirmPassword}
  helperText={touched.confirmPassword && errors.confirmPassword}
/>

<div className="button">
  <Button type="submit" variant="contained" color="primary">
    Submit
  </Button>
</div>
</Form>
)}
</Formik>
</Container>
</div>
);
}

export default Register;

*/

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SideBar from "../../Components/SideBar";
import { userRegistrationSchema } from "../Validations/validation";
import DefaultButton from "../../Components/Button/DefaultButton";
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";

const occupations = ["VOG Doctor", "MOH Doctor", "Dentist", "MidWife"];
const areas = [
  "Hittatiya Central",
  "Hittatiya East",
  "Kadeweediya",
  "Kotuwegoda",
  "Meddawatta",
  "Pamburana",
  "Polhena",
  "Thotamuna",
  "Thudawa",
  "Uyanwatta",
  "Walgama Meda",
  "Walgama North",
  "Walgama South",
  "Walpola 1",
  "Walpola 2",
  "Welegoda",
  "Welegoda East",
  "Weliweriya",
  "Weragampita",
];

function Register() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        nicNo: "",
        birthday: "",
        contactNo: "",
        email: "",
        sex: "male",
        marriedStatus: "single",
        occupation: "",
        area: "",
        username: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false,
      }}
      enableReinitialize={true}
      validationSchema={userRegistrationSchema}
      validateOnChange={false}
      onSubmit={async (values, { setSubmitting }) => {
        try {
        } catch (error) {
          console.error("Error submitting form:", error.message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        handleChange,
        values,
        isSubmitting,
        handleSubmit,
        touched,
        errors,
      }) => (
        <Form>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ width: "25%", display: "flex", maxWidth: "200px" }}>
              <SideBar />
            </Box>

            {/* Form */}
            <Box sx={{ width: "100%", paddingBottom: "128px" }}>
              <Box
                sx={{
                  paddingTop: "100px",
                  maxWidth: "900px",
                  margin: "auto",
                  display: "flex",
                }}
              >
                <div>
                  <span className="text-xl text-[#2A777C] text-center font-bold">
                    User Register
                  </span>
                </div>
              </Box>

              <Box
                sx={{
                  padding: "50px",
                  maxWidth: "900px",
                  border: "1px solid #ccc",
                  margin: "auto",
                  display: "flex",
                  marginBottom: "20px",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Full Name"
                      name="fullName"
                      label="Full Name"
                      onChange={handleChange}
                      value={values.fullName}
                      error={touched.fullName && Boolean(errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="NIC No."
                      name="nicNo"
                      label="NIC No"
                      onChange={handleChange}
                      value={values.nicNo}
                      error={touched.nicNo && Boolean(errors.nicNo)}
                      helperText={touched.nicNo && errors.nicNo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      type="date"
                      placeholder="Birthday"
                      name="birthday"
                      label="Birthday"
                      onChange={handleChange}
                      value={values.birthday}
                      error={touched.birthday && Boolean(errors.birthday)}
                      helperText={touched.birthday && errors.birthday}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Contact No"
                      name="contactNo"
                      label="Contact No"
                      onChange={handleChange}
                      value={values.contactNo}
                      error={touched.contactNo && Boolean(errors.contactNo)}
                      helperText={touched.contactNo && errors.contactNo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      type="email"
                      placeholder="Email"
                      name="email"
                      label="Email"
                      onChange={handleChange}
                      value={values.email}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">Sex</FormLabel>
                      <RadioGroup name="sex">
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                          labelPlacement="end"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset" margin="normal">
                      <FormLabel component="legend">Married Status</FormLabel>
                      <RadioGroup name="marriedStatus">
                        <FormControlLabel
                          value="single"
                          control={<Radio />}
                          label="Single"
                        />
                        <FormControlLabel
                          value="married"
                          control={<Radio />}
                          label="Married"
                        />
                        <FormControlLabel
                          value="divorced"
                          control={<Radio />}
                          label="Divorced"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field as={FormControl} fullWidth margin="normal">
                      <InputLabel htmlFor="occupation">Occupation</InputLabel>
                      <Field as={Select} name="occupation" required>
                        <MenuItem value="">Select Occupation</MenuItem>
                        {occupations.map((occupation) => (
                          <MenuItem key={occupation} value={occupation}>
                            {occupation}
                          </MenuItem>
                        ))}
                      </Field>
                    </Field>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field as={FormControl} fullWidth margin="normal">
                      <InputLabel htmlFor="area">Area</InputLabel>
                      <Field as={Select} name="area" required>
                        <MenuItem value="">Select Area</MenuItem>
                        {areas.map((area) => (
                          <MenuItem key={area} value={area}>
                            {area}
                          </MenuItem>
                        ))}
                      </Field>
                    </Field>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Username"
                      name="username"
                      fullWidth
                      margin="normal"
                      error={touched.username && !!errors.username}
                      helperText={touched.username && errors.username}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Password"
                      name="password"
                      type="password"
                      fullWidth
                      margin="normal"
                      error={touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      fullWidth
                      margin="normal"
                      error={
                        touched.confirmPassword && !!errors.confirmPassword
                      }
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <DefaultButton
                      type="submit"
                      height="40px"
                      width="150px"
                      title="Register"
                      disabled={isSubmitting}
                      style={{ marginTop: "20px" }}
                      onClick={() => {
                        handleSubmit();
                        Object.keys(values).forEach((field) => {
                          touched[field] = true;
                        });
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
