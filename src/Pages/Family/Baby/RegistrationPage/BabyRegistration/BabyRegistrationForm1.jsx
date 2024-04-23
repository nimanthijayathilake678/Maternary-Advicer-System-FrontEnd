import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DefaultButton from "../../../../../Components/Button/DefaultButton";
import SideBar from "../../../../../Components/SideBar";
import { babyRegistrationSchema } from "../../../../../Pages/Validations/validation";
import BabyRegistrationForm1Service, {
  registerbaby,
} from "../../../../../Services/BabyRegistrationForm1Service";
import DisplaySidebar from "../../../../../Components/DisplaySidebar";
import SuccessAlert from "../../../../../Components/SuccessMsg";

function BabyRegistrationForm1() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          couple_id: "",
          pregnancy_id: "",
          b_Name: "",
          b_Reg_Num: "",
          b_MOH_Division: "",
          b_Mother_Age: "",
          b_Reg_Date: "",
          b_FSHO_Division: "",
        }}
        enableReinitialize={true}
        validationSchema={babyRegistrationSchema}
        validateOnChange={false}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await registerbaby(values);

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
                      Register New Born
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
                        placeholder="Couple ID"
                        name="couple_id"
                        label="Couple ID"
                        onChange={handleChange}
                        value={values.couple_id}
                        error={touched.couple_id && Boolean(errors.couple_id)}
                        helperText={touched.couple_id && errors.couple_id}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Pregnancy ID"
                        name="pregnancy_id"
                        label="Pregnancy ID"
                        onChange={handleChange}
                        value={values.pregnancy_id}
                        error={
                          touched.pregnancy_id && Boolean(errors.pregnancy_id)
                        }
                        helperText={touched.pregnancy_id && errors.pregnancy_id}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Name of the Baby"
                        name="b_Name"
                        label="Name of the Baby"
                        onChange={handleChange}
                        value={values.b_Name}
                        error={touched.b_Name && Boolean(errors.b_Name)}
                        helperText={touched.b_Name && errors.b_Name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Baby Registration Number"
                        name="b_Reg_Num"
                        label="Baby Registration Number"
                        onChange={handleChange}
                        value={values.b_Reg_Num}
                        error={touched.b_Reg_Num && Boolean(errors.b_Reg_Num)}
                        helperText={touched.b_Reg_Num && errors.b_Reg_Num}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        type="date"
                        placeholder="Date of Registration"
                        name="b_Reg_Date"
                        label="Date of Registration"
                        onChange={handleChange}
                        value={values.b_Reg_Date}
                        error={touched.b_Reg_Date && Boolean(errors.b_Reg_Date)}
                        helperText={touched.b_Reg_Date && errors.b_Reg_Date}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Division of Health Medical Officer"
                        name="b_MOH_Division"
                        label="Division of Health Medical Officer"
                        onChange={handleChange}
                        value={values.b_MOH_Division}
                        error={
                          touched.b_MOH_Division &&
                          Boolean(errors.b_MOH_Division)
                        }
                        helperText={
                          touched.b_MOH_Division && errors.b_MOH_Division
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Division of Family Health Service Officer"
                        name="b_FSHO_Division"
                        label="Division of Family Health Service Officer"
                        onChange={handleChange}
                        value={values.b_FSHO_Division}
                        error={
                          touched.b_FSHO_Division &&
                          Boolean(errors.b_FSHO_Division)
                        }
                        helperText={
                          touched.b_FSHO_Division && errors.b_FSHO_Division
                        }
                      />
                      <ErrorMessage name="b_FSHO_Division" component="div" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        type="number"
                        placeholder="Age of Mother"
                        name="b_Mother_Age"
                        label="Age of Mother"
                        onChange={handleChange}
                        value={values.b_Mother_Age}
                        error={
                          touched.b_Mother_Age && Boolean(errors.b_Mother_Age)
                        }
                        helperText={touched.b_Mother_Age && errors.b_Mother_Age}
                      />
                      <ErrorMessage name="b_Mother_Age" component="div" />
                    </Grid>
                    <Grid item xs={12}>
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

export default BabyRegistrationForm1;
