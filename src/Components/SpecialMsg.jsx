import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DefaultButton from "../Components/Button/DefaultButton";
import MenuItem from "@mui/material/MenuItem";
//import { babyRegistrationSchema } from "../../../../../Pages/Validations/validation";
//import BabyRegistrationForm1Service, {
// registerbaby,
//} from "../../../../../Services/BabyRegistrationForm1Service";
import SuccessAlert from "../Components/SuccessAlert";

const priorities = [
  {
    value: "Ug",
    label: "Urgent",
  },
  {
    value: "Med",
    label: "Medium",
  },
  {
    value: "Nr",
    label: "Normal",
  },
];

function SpecialMsg() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          Reg_Num: "",
          Msg_Date: "",
          Msg_Priority: "",
          Msg_Topic: "",
          Msg_Content: "",
        }}
        enableReinitialize={true}
        // validationSchema={babyRegistrationSchema}
        //validateOnChange={false}
        // onSubmit={async (values, { setSubmitting }) => {
        //   try {
        //     const response = await registerbaby(values);

        //     if (response.status === 200) {
        //       console.log("success");
        //       setShowSuccessAlert(true);
        //     }
        //     console.log(response);
        //   } catch (error) {
        //     console.error("Error submitting form:", error.message);
        //   }
        // }}
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
              {/* Form */}
              <Box sx={{ width: "100%", paddingBottom: "128px" }}>
                <Box
                  sx={{
                    maxWidth: "900px",
                    margin: "auto",
                    display: "flex",
                  }}
                >
                  <div>
                    <span className="text-xl text-[#2A777C] text-center font-bold">
                      Special Notes
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
                      <TextField
                        required
                        fullWidth
                        placeholder="Registration Number"
                        name="Reg_Num"
                        label="Registration Number"
                        variant="standard"
                        // onChange={handleChange}
                        // value={values.b_Reg_Num}
                        // error={touched.b_Reg_Num && Boolean(errors.b_Reg_Num)}
                        // helperText={touched.b_Reg_Num && errors.b_Reg_Num}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        placeholder="Msg Topic"
                        name="Msg_Topic"
                        label="Msg Topic"
                        variant="standard"
                        // onChange={handleChange}
                        // value={values.b_MOH_Division}
                        // error={
                        //   touched.b_MOH_Division &&
                        //   Boolean(errors.b_MOH_Division)
                        // }
                        // helperText={
                        //   touched.b_MOH_Division && errors.b_MOH_Division
                        // }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type="date"
                        placeholder="Date of Msg"
                        name="Msg_Date"
                        variant="standard"
                        //label="Date of Msg"
                        // onChange={handleChange}
                        // value={values.b_Reg_Date}
                        // error={touched.b_Reg_Date && Boolean(errors.b_Reg_Date)}
                        // helperText={touched.b_Reg_Date && errors.b_Reg_Date}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        required
                        fullWidth
                        placeholder="Add Priority Value To Your Note"
                        name="Msg_Priority"
                        variant="standard"
                        select
                        label="Select"
                        defaultValue="Nr"
                        helperText="Add Priority Value To Your Note"

                        // onChange={handleChange}
                        // value={values.b_Reg_Num}
                        // error={touched.b_Reg_Num && Boolean(errors.b_Reg_Num)}
                        // helperText={touched.b_Reg_Num && errors.b_Reg_Num}
                      >
                        {priorities.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="standard-textarea"
                        required
                        fullWidth
                        placeholder="Msg Content"
                        name="Msg_Content"
                        label="Msg Content"
                        multiline
                        variant="standard"
                        rows={4}
                        // onChange={handleChange}
                        // value={values.b_FSHO_Division}
                        // error={
                        //   touched.b_FSHO_Division &&
                        //   Boolean(errors.b_FSHO_Division)
                        // }
                        // helperText={
                        //   touched.b_FSHO_Division && errors.b_FSHO_Division
                        // }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <DefaultButton
                        type="submit"
                        height="40px"
                        width="150px"
                        title="Add Notice"
                        //disabled={isSubmitting}
                        style={{ marginTop: "20px" }}
                        // onClick={() => {
                        //   handleSubmit();
                        //   Object.keys(values).forEach((field) => {
                        //     touched[field] = true;
                        //   });
                        // }}
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

export default SpecialMsg;
