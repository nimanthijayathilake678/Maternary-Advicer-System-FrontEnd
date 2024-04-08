import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import DefaultButton from "../../../../../Components/Button/DefaultButton";
//import SideBar from "../../../../../Components/SideBar";
import { addRefferalSchema } from "../Validations/validation";
import DisplaySidebar from "../../Components/DisplaySidebar";

function AddRefferal() {
  return (
    <Formik
      initialValues={{
        pregnancyRegNo: "",
        eligibilityRegNo: "",
        refId: "",
        refererId: "",
        refererRole: "",
        description: "",
        
      }}
      enableReinitialize={true}
      validationSchema={addRefferalSchema}
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
                    Add Refferals
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
                      placeholder="Pregnancy Registration No"
                      name="pregnancyRegNo"
                      label="Pregnancy Registration No"
                      onChange={handleChange}
                      value={values.pregnancyRegNo}
                      error={touched.pregnancyRegNo && Boolean(errors.pregnancyRegNo)}
                      helperText={touched.pregnancyRegNo && errors.pregnancyRegNo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Eligibility Registration No"
                      name="eligibilityRegNo"
                      label="Eligibility Registration No"
                      onChange={handleChange}
                      value={values.eligibilityRegNo}
                      error={
                        touched.eligibilityRegNo && Boolean(errors.eligibilityRegNo)
                      }
                      helperText={touched.eligibilityRegNo && errors.eligibilityRegNo}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Reference Id"
                      name="refId"
                      label="Reference Id"
                      onChange={handleChange}
                      value={values.refId}
                      error={touched.refId && Boolean(errors.refId)}
                      helperText={touched.refId && errors.refId}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Referer Id"
                      name="refererId"
                      label="Referer Id"
                      onChange={handleChange}
                      value={values.refererId}
                      error={touched.refererId && Boolean(errors.refererId)}
                      helperText={touched.refererId && errors.refererId}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Referer Role"
                      name="refererRole"
                      label="Referer Role"
                      onChange={handleChange}
                      value={values.refererRole}
                      error={touched.refererRole && Boolean(errors.refererRole)}
                      helperText={touched.refererRole && errors.refererRole}
                    />
                  </Grid>
                  
                  
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Description"
                      name="description"
                      label="Description"
                      onChange={handleChange}
                      value={values.description}
                      error={
                        touched.description && Boolean(errors.description)
                      }
                      helperText={touched.description && errors.description}
                    />
                    
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <button
                      type="submit" variant="contained" 
                      color="primary"
                     // title="Register"
                      disabled={isSubmitting}
                      style={{ marginTop: "20px" }}
                      onClick={() => {
                        handleSubmit();
                        Object.keys(values).forEach((field) => {
                          touched[field] = true;
                        });
                      }}
                    >Submit</button>
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

export default AddRefferal;
