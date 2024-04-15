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
import { babyNutrientsSchema } from "../../../Pages/Validations/validation.js";
import BabyNutrientsService, {
  babynutrients,
  getbabynutrients,
} from "../../../Services/BabyNutrientsService.js";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SuccessAlert from "../../../Components/SuccessMsg.jsx";

const VISIBLE_FIELDS_ONE = [
  "babynum",
  "nutrientDate",
  "nutrientBatchNo",
  "ageForNutrientDate",
  "nutrientName",
];

function BabyNutrients() {
  const [customDataset, setCustomDataset] = useState([]);
  const navigate = useNavigate();
  const authContext = useAuth();
  const { id } = useParams();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getbabynutrients(id);
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
          babynum: "",
          nutrientDate: "",
          nutrientBatchNo: "",
          ageForNutrientDate: "",
          nutrientName: "",
        }}
        enableReinitialize={true}
        validationSchema={babyNutrientsSchema}
        validateOnChange={false}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await babynutrients(values);
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
                      Baby Nutrients
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
                        name="babynum"
                        label="Baby Number"
                        onChange={handleChange}
                        value={values.babynum}
                        error={touched.babynum && Boolean(errors.babynum)}
                        helperText={touched.babynum && errors.babynum}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        type="date"
                        placeholder="Nutrient Date"
                        name="nutrientDate"
                        label="Nutrient Date"
                        onChange={handleChange}
                        value={values.nutrientDate}
                        error={
                          touched.nutrientDate && Boolean(errors.nutrientDate)
                        }
                        helperText={touched.nutrientDate && errors.nutrientDate}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Nutrient Batch No"
                        name="nutrientBatchNo"
                        label="Nutrient Batch No"
                        onChange={handleChange}
                        value={values.nutrientBatchNo}
                        error={
                          touched.nutrientBatchNo &&
                          Boolean(errors.nutrientBatchNo)
                        }
                        helperText={
                          touched.nutrientBatchNo && errors.nutrientBatchNo
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Age for Nutrient"
                        name="ageForNutrientDate"
                        label="Age for Nutrient "
                        onChange={handleChange}
                        value={values.ageForNutrientDate}
                        error={
                          touched.ageForNutrientDate &&
                          Boolean(errors.ageForNutrientDate)
                        }
                        helperText={
                          touched.ageForNutrientDate &&
                          errors.ageForNutrientDate
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Nutrient Name"
                        name="nutrientName"
                        label="Nutrient Name"
                        onChange={handleChange}
                        value={values.nutrientName}
                        error={
                          touched.nutrientName && Boolean(errors.nutrientName)
                        }
                        helperText={touched.nutrientName && errors.nutrientName}
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
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  overflowX: "hidden",
                }}
              >
                <DisplaySidebar />
                <div
                  style={{ flex: 1, overflowX: "hidden", paddingLeft: "40px" }}
                >
                  <div style={{ height: "100vh", width: "100%" }}>
                    <div>
                      <span className="text-xl text-[#2A777C] text-center font-bold">
                        Baby Nutrient Given History
                      </span>
                    </div>
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
                  </div>
                </div>
              </div>
            </Box>
          </Form>
        )}
      </Formik>
      {showSuccessAlert && <SuccessAlert setAlert={setShowSuccessAlert} />}
    </>
  );
}
export default BabyNutrients;
