

import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid";



import { clinicdate } from "../../Pages/Validations/validation";
import {
  addClinicDate,
} from "../../Services/ClinicSchedule";
import DisplaySidebar from "../../Components/DisplaySidebar";
import SuccessAlert from "../../Components/SuccessMsg";

function Clinic() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          area: "",
          description: "",
          date: "",
          starttime: "",
          
        }}
        enableReinitialize={true}
        validationSchema={clinicdate}
        validateOnChange={false}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await addClinicDate(values);
            console.log(values);
            if (response.status === 200) {
              console.log("success");
              setShowSuccessAlert(true);
              resetForm({  
                area: "",
                description: "",
                date: "",
                starttime: "",
              });
            }
            console.log(response);
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
                    Clinic Date Schedule
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
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Area"
                        name="area"
                        label="Area"
                        onChange={handleChange}
                        value={values.area}
                        error={touched.area && Boolean(errors.area)}
                        helperText={touched.area && errors.area}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        type="date"
                        placeholder="Date"
                        name="date"
                        label="Date"
                        onChange={handleChange}
                        value={values.date}
                        error={touched.date && Boolean(errors.date)}
                        helperText={touched.date && errors.date}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Description"
                        name="description"
                        label="Description"
                        onChange={handleChange}
                        value={values.pregnancy_id}
                        error={
                          touched.description && Boolean(errors.description)
                        }
                        helperText={touched.description && errors.description}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        type="time"
                        placeholder="Start Time"
                        name="starttime"
                        label="Start Time"
                        onChange={handleChange}
                        value={values.starttime}
                        error={touched.starttime && Boolean(errors.starttime)}
                        helperText={touched.starttime && errors.starttime}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <button
                        type="submit"
                        height="40px"
                        width="150px"
                        title="Confirm Clinic"
                        disabled={isSubmitting}
                        style={{ marginTop: "20px",backgroundColor:"#2671E0",borderRadius:"5px",padding:"5px 15px 5px 15px"}}
                        onClick={() => {
                          handleSubmit();
                          Object.keys(values).forEach((field) => {
                            touched[field] = true;
                          });
                        }}
                      >
                        Confirm Clinic
                      </button>
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

export default Clinic;
