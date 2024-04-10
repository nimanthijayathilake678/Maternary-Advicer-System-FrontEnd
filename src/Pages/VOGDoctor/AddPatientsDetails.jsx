import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import SideBar from "../../Components/SideBar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { hospitalCareSchema } from "../Validations/validation";
import { Link } from "react-router-dom";

function MyForm() {
  return (
    <Formik
      initialValues={{
        pregnancyRegNo: "",
        eligibilityRegNo: "",
        poa: "",
        urine: "",
        oedema: "",
        bloodPressure: "",
        fundalHeight: "",
        foetalLie: "",
        presentation: "",
        fm: "",
        fhs: "",
        ebw: "",
        crl: "",
        gestSac: "",
        bpd: "",
        hc: "",
        ac: "",
        fl: "",
        liqour: "",
        placenta: "",
        averagePOA: "",
        anyOther: "",
        nextVisitDate: "",
        doctorId: "",
        designation: "",
      }}
      enableReinitialize={true}
      validationSchema={hospitalCareSchema}
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
                    Hospital Clinic Care
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
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Pregnancy Registration Number"
                      name="pregnancyRegNo"
                      value={values.PregnancyRegNo}
                      onChange={handleChange}
                      error={
                        touched.pregnancyRegNo && Boolean(errors.pregnancyRegNo)
                      }
                      helperText={
                        touched.pregnancyRegNo && errors.pregnancyRegNo
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Eligibility Registration Number"
                      name="eligibilityRegNo"
                      value={values.EligibilityRegNo}
                      onChange={handleChange}
                      error={
                        touched.eligibilityRegNo &&
                        Boolean(errors.eligibilityRegNo)
                      }
                      helperText={
                        touched.eligibilityRegNo && errors.eligibilityRegNo
                      }
                    />
                  </Grid>
                 
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="POA (Pelvic Outlet Assessment)"
                      name="poa"
                      value={values.POA}
                      onChange={handleChange}
                      error={touched.poa && Boolean(errors.poa)}
                      helperText={touched.poa && errors.poa}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Urine Test Result"
                      name="urine"
                      value={values.Urine}
                      onChange={handleChange}
                      error={touched.urine && Boolean(errors.urine)}
                      helperText={touched.urine && errors.urine}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Oedema (Swelling)"
                      name="oedema"
                      value={values.Oedema}
                      onChange={handleChange}
                      error={touched.oedema && Boolean(errors.oedema)}
                      helperText={touched.oedema && errors.oedema}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Blood Pressure"
                      name="bloodPressure"
                      value={values.BloodPressure}
                      onChange={handleChange}
                      error={
                        touched.bloodPressure && Boolean(errors.bloodPressure)
                      }
                      helperText={touched.bloodPressure && errors.bloodPressure}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Fundal Height"
                      name="fundalHeight"
                      value={values.FundalHeight}
                      onChange={handleChange}
                      error={
                        touched.fundalHeight && Boolean(errors.fundalHeight)
                      }
                      helperText={touched.fundalHeight && errors.fundalHeight}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Foetal Lie"
                      name="foetalLie"
                      value={values.FoetalLie}
                      onChange={handleChange}
                      error={touched.foetalLie && Boolean(errors.foetalLie)}
                      helperText={touched.foetalLie && errors.foetalLie}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Presentation"
                      name="presentation"
                      value={values.Presentation}
                      onChange={handleChange}
                      error={
                        touched.presentation && Boolean(errors.presentation)
                      }
                      helperText={touched.presentation && errors.presentation}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="FM (Fetal Movement)"
                      name="fm"
                      value={values.FM}
                      onChange={handleChange}
                      error={touched.fm && Boolean(errors.fm)}
                      helperText={touched.fm && errors.fm}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="FHS (Fetal Heart Sounds)"
                      name="fhs"
                      value={values.FHS}
                      onChange={handleChange}
                      error={touched.fhs && Boolean(errors.fhs)}
                      helperText={touched.fhs && errors.fhs}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="EBW (Estimated Birth Weight)"
                      name="ebw"
                      value={values.EBW}
                      onChange={handleChange}
                      error={touched.ebw && Boolean(errors.ebw)}
                      helperText={touched.ebw && errors.ebw}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="CRL (Crown-Rump Length)"
                      name="crl"
                      value={values.CRL}
                      onChange={handleChange}
                      error={touched.crl && Boolean(errors.crl)}
                      helperText={touched.crl && errors.crl}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="GestSac (Gestational Sac)"
                      name="gestSac"
                      value={values.GestSac}
                      onChange={handleChange}
                      error={touched.gestSac && Boolean(errors.gestSac)}
                      helperText={touched.gestSac && errors.gestSac}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="BPD (Biparietal Diameter)"
                      name="bpd"
                      value={values.BPD}
                      onChange={handleChange}
                      error={touched.bpd && Boolean(errors.bpd)}
                      helperText={touched.bpd && errors.bpd}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="HC (Head Circumference)"
                      name="hc"
                      value={values.HC}
                      onChange={handleChange}
                      error={touched.hc && Boolean(errors.hc)}
                      helperText={touched.hc && errors.hc}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="AC (Abdominal Circumference)"
                      name="ac"
                      value={values.AC}
                      onChange={handleChange}
                      error={touched.ac && Boolean(errors.ac)}
                      helperText={touched.ac && errors.ac}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="FL (Femur Length)"
                      name="fl"
                      value={values.FL}
                      onChange={handleChange}
                      error={touched.fl && Boolean(errors.fl)}
                      helperText={touched.fl && errors.fl}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Liquor (Amniotic fluid)"
                      name="liquor"
                      value={values.Liquor}
                      onChange={handleChange}
                      error={touched.liquor && Boolean(errors.liquor)}
                      helperText={touched.liquor && errors.liquor}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Placenta"
                      name="placenta"
                      value={values.Placenta}
                      onChange={handleChange}
                      error={touched.placenta && Boolean(errors.placenta)}
                      helperText={touched.placenta && errors.placenta}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="AveragePOA"
                      name="averagePOA"
                      value={values.AveragePOA}
                      onChange={handleChange}
                      error={touched.averagePOA && Boolean(errors.averagePOA)}
                      helperText={touched.averagePOA && errors.averagePOA}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="AnyOther "
                      name="anyOther"
                      value={values.AnyOther}
                      onChange={handleChange}
                      error={touched.anyOther && Boolean(errors.anyOther)}
                      helperText={touched.anyOther && errors.anyOther}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="NextVisitDate "
                      name="nextVisitDate"
                      type="date"
                      value={values.NextVisitDate}
                      onChange={handleChange}
                      error={
                        touched.nextVisitDate && Boolean(errors.nextVisitDate)
                      }
                      helperText={touched.nextVisitDate && errors.nextVisitDate}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="DoctorId"
                      name="doctorId"
                      value={values.DoctorId}
                      onChange={handleChange}
                      error={touched.doctorId && Boolean(errors.doctorId)}
                      helperText={touched.doctorId && errors.doctorId}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Designation"
                      name="designation"
                      value={values.Designation}
                      onChange={handleChange}
                      error={touched.designation && Boolean(errors.designation)}
                      helperText={touched.designation && errors.designation}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button variant="contained" 
                      type="submit"
                      title="Register"
                      disabled={isSubmitting}
                      style={{ marginTop: "20px" }}
                      color="primary" // Add color here
                      onClick={() => {
                        handleSubmit();
                        Object.keys(values).forEach((field) => {
                          touched[field] = true;
                        });
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Link to="/vog/add_patients_details/refferal">
                      <Button variant="contained" color="primary">Add Refferal
                      </Button>
                    </Link>
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

export default MyForm;
