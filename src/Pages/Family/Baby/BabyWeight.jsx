import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Link } from "react-router-dom";
import DisplaySidebar from "../../../Components/DisplaySidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DefaultButton from "../../../Components/Button/DefaultButton.jsx";
import { babyWeightSchema } from "../../../Pages/Validations/validation.js";
import BabyGrowthService, {
  babygrowths,
  getbabygrowths,
} from "../../../Services/BabyGrowthService.js";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SuccessAlert from "../../../Components/SuccessMsg.jsx";

const VISIBLE_FIELDS_ONE = [
  "b_Weight_Date",
  "b_Weight",
  "b_Age_For_Weight_Date",
];

function BabyWeight() {
  const [customDataset, setCustomDataset] = useState([]);
  const navigate = useNavigate();
  const authContext = useAuth();
  const { id } = useParams();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getbabygrowths(id);
        const data = response.data.map((row, index) => ({
          id: index + 1,
          ...row,
        }));
        setCustomDataset(data);

        // Prepare data for chart
        const chartData = data.map((item) => ({
          age: parseFloat(item.b_Age_For_Weight_Date), // Assuming this is the age field
          weight: parseFloat(item.b_Weight),
        }));
        setChartData(chartData);
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
          b_Weight_Date: "",
          b_Weight: "",
          b_Age_For_Weight_Date: "",
        }}
        enableReinitialize={true}
        validationSchema={babyWeightSchema}
        validateOnChange={false}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await babygrowths(values);
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
                      Baby Development - Weight Measurements
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
                        placeholder="Weight measured Date"
                        name="b_Weight_Date"
                        //label="Nutrient Date"
                        onChange={handleChange}
                        value={values.b_Weight_Date}
                        error={
                          touched.b_Weight_Date && Boolean(errors.b_Weight_Date)
                        }
                        helperText={
                          touched.b_Weight_Date && errors.b_Weight_Date
                        }
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Age for Weight Measured Date(Months)"
                        name="b_Age_For_Weight_Date"
                        label="Age for Weight Measured Date(Months)"
                        onChange={handleChange}
                        value={values.b_Age_For_Weight_Date}
                        error={
                          touched.b_Age_For_Weight_Date &&
                          Boolean(errors.b_Age_For_Weight_Date)
                        }
                        helperText={
                          touched.b_Age_For_Weight_Date &&
                          errors.b_Age_For_Weight_Date
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        placeholder="Weight Measured(Grams)"
                        name="b_Weight"
                        label=" Weight Measured(Grams)"
                        onChange={handleChange}
                        value={values.b_Weight}
                        error={touched.b_Weight && Boolean(errors.b_Weight)}
                        helperText={touched.b_Weight && errors.b_Weight}
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
                {/* Line Chart */}
                <Box
                  sx={{
                    maxWidth: "900px",
                    margin: "auto",
                    display: "flex",
                  }}
                >
                  <div>
                    <span className="text-xl text-[#2A777C] text-center font-bold">
                      Baby Development Chart - Weight Measurements
                    </span>
                  </div>
                </Box>
                <Box
                  sx={{
                    maxWidth: "1000px",
                    margin: "auto",
                    color: "#36454f",
                  }}
                >
                  <LineChart
                    width={900}
                    height={400}
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="age"
                      color="#555d50 "
                      label={{
                        value: "Age (Months)",
                        position: "insideBottom",
                        offset: -10,
                      }}
                    />
                    <YAxis
                      color="#555d50 "
                      label={{
                        value: "Weight (Grams)",
                        angle: -90,
                        position: "insideLeft",
                        offset: -10,
                      }}
                    />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="weight"
                      stroke="#555d50"
                      activeDot={{ r: 8 }}
                      name="Weight"
                    />
                  </LineChart>
                </Box>
                <Box
                  sx={{
                    maxWidth: "900px",
                    margin: "auto",
                    display: "flex",
                    paddingTop: "100px",
                  }}
                >
                  <div>
                    <span className="text-xl text-[#2A777C] text-center font-bold">
                      Baby Development History - Weight Measurements
                    </span>
                  </div>
                </Box>

                <Box
                  sx={{
                    padding: "50px",
                    maxWidth: "600px",

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

export default BabyWeight;
