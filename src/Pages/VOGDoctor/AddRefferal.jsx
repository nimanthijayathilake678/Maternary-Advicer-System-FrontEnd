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
        referredId: "",
        referredRole: "",
        reason: "",
        
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
                      placeholder="Referred Id"
                      name="referredId"
                      label="Referred Id"
                      onChange={handleChange}
                      value={values.referredId}
                      error={touched.referredId && Boolean(errors.referredId)}
                      helperText={touched.referredId && errors.referredId}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Referred Role"
                      name="referredRole"
                      label="Referred Role"
                      onChange={handleChange}
                      value={values.referredRole}
                      error={touched.referredRole && Boolean(errors.referredRole)}
                      helperText={touched.referredRole && errors.referredRole}
                    />
                  </Grid>
                  
                  
                  <Grid item xs={12} sm={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Reason For Refferal"
                      name="reason"
                      label="Reason"
                      onChange={handleChange}
                      value={values.reason}
                      error={
                        touched.reason && Boolean(errors.reason)
                      }
                      helperText={touched.reason && errors.reason}
                    />
                    
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <button
                      type="submit"
                      
                      disabled={isSubmitting}
                      style={{ marginTop: "20px",backgroundColor:"#2671E0",borderRadius:"5px",padding:"5px 15px 5px 15px"}}
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
