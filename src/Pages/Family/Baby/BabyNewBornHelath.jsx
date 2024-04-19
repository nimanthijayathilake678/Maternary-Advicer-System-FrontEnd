import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Link } from "react-router-dom";
import SideBar from "../../../Components/SideBar";
import DisplaySidebar from "../../../Components/DisplaySidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DefaultButton from "../../../Components/Button/DefaultButton.jsx";
import { babyNewBornSchema } from "../../../Pages/Validations/validation.js";
import BabyNewBornHealthService, {
  babynewbornhealth,
  getbabynewbornhealth,
} from "../../../Services/BabyNewBornHelathService.js";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SuccessAlert from "../../../Components/SuccessMsg.jsx";

const VISIBLE_FIELDS_ONE = [
  "babyNum",
  "skinColor",
  "temperature",
  "naturePecan",
  "breastFeeding",
  "fecesColor",
  "examineDate",
];

function BabyNewBornHealth() {
  const [customDataset, setCustomDataset] = useState([]);
  const navigate = useNavigate();
  const authContext = useAuth();
  const { id } = useParams();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getbabynewbornhealth(id);
        const data = response.data.map((row, index) => ({
          id: index + 1,
          ...row,
        }));
        setCustomDataset(data);
      } catch (error) {
        console.log("Error getting data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          babyNum: "",
          skinColor: "",
          temperature: "",
          naturePecan: "",
          breastFeeding: "",
          fecesColor: "",
          examineDate: "",
        }}
        enableReinitialize={true}
        validationSchema={babyNewBornSchema}
        validateOnChange={false}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await babynewbornhealth(values);
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
                      Baby New Born Health
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
                        placeholder="Baby Number"
                        name="babyNum"
                        label="Baby Number"
                        onChange={handleChange}
                        value={values.babyNum}
                        error={touched.babyNum && Boolean(errors.babyNum)}
                        helperText={touched.babyNum && errors.babyNum}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Skin color"
                        name="skinColor"
                        label="Skin color"
                        onChange={handleChange}
                        value={values.skinColor}
                        error={touched.skinColor && Boolean(errors.skinColor)}
                        helperText={touched.skinColor && errors.skinColor}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Baby Temperature"
                        name="temperature"
                        label="Baby Temperature"
                        onChange={handleChange}
                        value={values.temperature}
                        error={
                          touched.temperature && Boolean(errors.temperature)
                        }
                        helperText={touched.temperature && errors.temperature}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Nature of Pecan"
                        name="naturePecan"
                        label="Nature of Pecan"
                        onChange={handleChange}
                        value={values.naturePecan}
                        error={
                          touched.naturePecan && Boolean(errors.naturePecan)
                        }
                        helperText={touched.naturePecan && errors.naturePecan}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Baby BreastFeeding"
                        name="breastFeeding"
                        label="Baby BreastFeeding"
                        onChange={handleChange}
                        value={values.breastFeeding}
                        error={
                          touched.breastFeeding && Boolean(errors.breastFeeding)
                        }
                        helperText={
                          touched.breastFeeding && errors.breastFeeding
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Baby Feaces Color"
                        name="fecesColor"
                        label="Baby Feaces Color"
                        onChange={handleChange}
                        value={values.fecesColor}
                        error={touched.fecesColor && Boolean(errors.fecesColor)}
                        helperText={touched.fecesColor && errors.fecesColor}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        type="date"
                        placeholder="Examine Date"
                        name="examineDate"
                        label="Examine Date"
                        onChange={handleChange}
                        value={values.examineDate}
                        error={
                          touched.examineDate && Boolean(errors.examineDate)
                        }
                        helperText={touched.examineDate && errors.examineDate}
                      />
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
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "25%", display: "flex", maxWidth: "200px" }}>
                <DisplaySidebar />
              </Box>

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
                      Baby Health History
                    </span>
                  </div>
                </Box>

                <Box
                  sx={{
                    padding: "50px",
                    paddingLeft: "110px",
                    maxWidth: "1230px",
                    margin: "auto",
                    display: "flex",
                    marginBottom: "20px",
                  }}
                >
                  <DataGrid
                    autoHeight
                    rows={customDataset}
                    columns={VISIBLE_FIELDS_ONE.map((field) => {
                      return {
                        field,
                        headerName: field,
                        width: 150, // Adjust width as needed
                      };
                    })}
                    components={{ Toolbar: GridToolbar }}
                  />
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
export default BabyNewBornHealth;
