import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

import { Formik, Form, } from "formik";
import { hospitalCareSchema } from "../Validations/validation";
import { Link } from "react-router-dom";
import  {
  addClinicDetails
} from "../../Services/addClinicDetails";
import SuccessAlert from "../../Components/SuccessMsg";
import SideBar from "../../Components/DisplaySidebar";

function AddPatientsDetails() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  return (
    <>
    <Formik
      initialValues={{
        pregnancyId: "",
        eligibleId: "",
        poa: "",
        urine: "",
        oedema: "",
        bloodpressure: "",
        fundalheight: "",
        foetalLie: "",
        presentation: "",
        fm: "",
        fhs: "",
        ebw: "",
        crl: "",
        gestsac: "",
        bpd: "",
        hc: "",
        ac: "",
        fl: "",
        liqour: "",
        placenta: "",
        averagepoa: "",
        anyother: "",
        nextvisitdate: "",
        doctorid: "",
        designation: "",
      }}
      enableReinitialize={true}
      validationSchema={hospitalCareSchema}
      validateOnChange={false}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await addClinicDetails(values);

          if (response.status === 200) {
            console.log("success");
            setShowSuccessAlert(true);
            resetForm(); // Reset the form after successful submission
          }
          console.log(response);
        } catch (error) {
          console.error("Error submitting form:", error.message);
        } finally {
          setSubmitting(false);
        }
      }}

/*

      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await addClinicDetails(values);

          if (response.status === 200) {
            console.log("success");
            setShowSuccessAlert(true);
          }
          console.log(response);
        } catch (error) {
          console.error("Error submitting form:", error.message);
        }
      }} */
    >     
      {({
        handleChange,
        values,
        isSubmitting,
        handleSubmit,
        touched,
        errors,
      }) => (
        <Form >
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
                      name="pregnancyId"
                      value={values.pregnancyId}
                      onChange={handleChange}
                      error={
                        touched.pregnancyId && Boolean(errors.pregnancyId)
                      }
                      helperText={
                        touched.pregnancyId && errors.pregnancyId
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Eligibility Registration Number"
                      name="eligibleId"
                      value={values.eligibleId}
                      onChange={handleChange}
                      error={
                        touched.eligibleId &&
                        Boolean(errors.eligibleId)
                      }
                      helperText={
                        touched.eligibleId && errors.eligibleId
                      }
                    />
                  </Grid>
                 
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="POA (Pelvic Outlet Assessment)"
                      name="poa"
                      value={values.poa}
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
                      value={values.urine}
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
                      value={values.oedema}
                      onChange={handleChange}
                      error={touched.oedema && Boolean(errors.oedema)}
                      helperText={touched.oedema && errors.oedema}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Blood Pressure"
                      name="bloodpressure"
                      value={values.bloodpressure}
                      onChange={handleChange}
                      error={
                        touched.bloodpressure && Boolean(errors.bloodpressure)
                      }
                      helperText={touched.bloodpressure && errors.bloodpressure}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Fundal Height"
                      name="fundalheight"
                      value={values.fundalheight}
                      onChange={handleChange}
                      error={
                        touched.fundalheight && Boolean(errors.fundalheight)
                      }
                      helperText={touched.fundalheight && errors.fundalheight}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Foetal Lie"
                      name="foetalLie"
                      value={values.foetalLie}
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
                      value={values.presentation}
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
                      value={values.fm}
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
                      value={values.fhs}
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
                      value={values.ebw}
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
                      value={values.crl}
                      onChange={handleChange}
                      error={touched.crl && Boolean(errors.crl)}
                      helperText={touched.crl && errors.crl}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="GestSac (Gestational Sac)"
                      name="gestsac"
                      value={values.gestsac}
                      onChange={handleChange}
                      error={touched.gestsac && Boolean(errors.gestsac)}
                      helperText={touched.gestsac && errors.gestsac}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="BPD (Biparietal Diameter)"
                      name="bpd"
                      value={values.bpd}
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
                      value={values.hc}
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
                      value={values.ac}
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
                      value={values.fl}
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
                      value={values.liquor}
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
                      value={values.placenta}
                      onChange={handleChange}
                      error={touched.placenta && Boolean(errors.placenta)}
                      helperText={touched.placenta && errors.placenta}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="AveragePOA"
                      name="averagepoa"
                      value={values.averagepoa}
                      onChange={handleChange}
                      error={touched.averagepoa && Boolean(errors.averagepoa)}
                      helperText={touched.averagepoa && errors.averagepoa}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="AnyOther "
                      name="anyother"
                      value={values.anyOther}
                      onChange={handleChange}
                      error={touched.anyother && Boolean(errors.anyother)}
                      helperText={touched.anyother && errors.anyother}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="NextVisitDate "
                      name="nextvisitdate"
                      type="date"
                      value={values.nextvisitdate}
                      onChange={handleChange}
                      error={
                        touched.nextvisitdate && Boolean(errors.nextvisitdate)
                      }
                      helperText={touched.nextvisitdate && errors.nextvisitdate}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="DoctorId"
                      name="doctorid"
                      value={values.doctorid}
                      onChange={handleChange}
                      error={touched.doctorid && Boolean(errors.doctorid)}
                      helperText={touched.doctorid && errors.doctorid}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      label="Designation"
                      name="designation"
                      value={values.designation}
                      onChange={handleChange}
                      error={touched.designation && Boolean(errors.designation)}
                      helperText={touched.designation && errors.designation}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={12}>
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
    {showSuccessAlert && <SuccessAlert setAlert={setShowSuccessAlert} />}
    </>
  );
}

export default AddPatientsDetails;
