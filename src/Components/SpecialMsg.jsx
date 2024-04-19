import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DefaultButton from "../Components/Button/DefaultButton";
import MenuItem from "@mui/material/MenuItem";
import { specialMsgSchema } from "../Pages/Validations/validation";
import SpecialMsgService, {
  addSpecialMsg,
} from "../Services/SpecialMsgService";
import SuccessAlert from "../Components/SuccessMsg";

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
          babyNum: "",
          msg_Content: "",
          msg_Priority: "",
          msg_Date: "",
          msg_Topic: "",
        }}
        enableReinitialize={true}
        validationSchema={specialMsgSchema}
        validateOnChange={false}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await addSpecialMsg(values);

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
                        name="babyNum"
                        label="Registration Number"
                        variant="standard"
                        onChange={handleChange}
                        value={values.Reg_Num}
                        error={touched.Reg_Num && Boolean(errors.Reg_Num)}
                        helperText={touched.Reg_Num && errors.Reg_Num}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        placeholder="Msg Topic"
                        name="msg_Topic"
                        label="Msg Topic"
                        variant="standard"
                        onChange={handleChange}
                        value={values.msg_Topic}
                        error={touched.msg_Topic && Boolean(errors.msg_Topic)}
                        helperText={touched.msg_Topic && errors.msg_Topic}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type="date"
                        placeholder="Date of Msg"
                        name="msg_Date"
                        variant="standard"
                        //label="Date of Msg"
                        onChange={handleChange}
                        value={values.msg_Date}
                        error={touched.msg_Date && Boolean(errors.msg_Date)}
                        helperText={touched.msg_Date && errors.msg_Date}
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
                        name="msg_Priority"
                        variant="standard"
                        select
                        label="Select"
                        defaultValue="Nr"
                        onChange={handleChange}
                        value={values.msg_Priority}
                        error={
                          touched.msg_Priority && Boolean(errors.msg_Priority)
                        }
                        helperText={touched.msg_Priority && errors.msg_Priority}
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
                        name="msg_Content"
                        label="Msg Content"
                        multiline
                        variant="standard"
                        rows={4}
                        onChange={handleChange}
                        value={values.msg_Content}
                        error={
                          touched.msg_Content && Boolean(errors.msg_Content)
                        }
                        helperText={touched.msg_Content && errors.msg_Content}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <DefaultButton
                        type="submit"
                        height="40px"
                        width="150px"
                        title="Add Notice"
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

export default SpecialMsg;
