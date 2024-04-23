import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DisplaySidebar from "../../Components/DisplaySidebar";
import { userRegistrationSchema } from "../Validations/validation";
import DefaultButton from "../../Components/Button/DefaultButton";
import { registerNewUser } from "../../Services/registerUsers";
import SuccessAlert from "../../Components/SuccessMsg";
import axios from "axios";

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

function Register() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          firstName: "",
          lastName: "",
          regNum: "",
          contactNo: "",
          email: "",
          gender: "male",
          marriedStatus: "single",
          position: "",
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
            // Omitting the confirmPassword field from the values object
            
            const { confirmPassword, showPassword, showConfirmPassword, ...postData } = values;
            // Logging postData without confirmPassword
            console.log(postData);
            console.log(values);
           
            const response =  await registerNewUser(postData);
        
            if (response.status === 200) {
              console.log("success");
              setShowSuccessAlert(true);
            }
            console.log(response);
          } catch (error) {
            console.error("Error submitting form:", error.message);
            
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
                <DisplaySidebar />
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
                        placeholder="First Name"
                        name="firstName"
                        label="First Name"
                        onChange={handleChange}
                        value={values.firstName}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Last Name"
                        name="lastName"
                        label="Last Name"
                        onChange={handleChange}
                        value={values.lastName}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Register Number"
                        name="regNum"
                        label="Register Number"
                        onChange={handleChange}
                        value={values.regNum}
                        error={touched.regNum && Boolean(errors.regNum)}
                        helperText={touched.regNum && errors.regNum}
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
                    <Grid item xs={12} sm={12}>
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
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row name="gender" id="gender">
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                            style={{ color: "black" }}
                          />
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                            style={{ color: "black" }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl component="fieldset" margin="normal">
                        <FormLabel component="legend">Married Status</FormLabel>
                        <RadioGroup row name="marriedStatus" id="marriedStatus">
                          <FormControlLabel
                            value="single"
                            control={<Radio />}
                            label="Single"
                            style={{ color: "black" }}
                          />
                          <FormControlLabel
                            value="married"
                            control={<Radio />}
                            label="Married"
                            style={{ color: "black" }}
                          />
                          <FormControlLabel
                            value="divorced"
                            control={<Radio />}
                            label="Divorced"
                            style={{ color: "black" }}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        label="Position"
                        name="position"
                        fullWidth
                        value={values.position}
                        margin="normal"
                        error={touched.position && !!errors.position}
                        helperText={touched.position && errors.position}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        label="Area"
                        name="area"
                        fullWidth
                        value={values.area}
                        margin="normal"
                        error={touched.area && !!errors.area}
                        helperText={touched.area && errors.area}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        label="Username"
                        name="username"
                        fullWidth
                        margin="normal"
                        value={values.username}
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
                        value={values.password}
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
                        value={values.confirmPassword}
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
      {showSuccessAlert && <SuccessAlert setAlert={setShowSuccessAlert} />}
    </>
  );
}

export default Register;
