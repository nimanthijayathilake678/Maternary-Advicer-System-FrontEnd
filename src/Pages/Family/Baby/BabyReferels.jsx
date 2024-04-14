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
import { babyReferelsSchema } from "../../../Pages/Validations/validation.js";
import BabyReferelsService, {
  babyreferels,
  getbabyreferels,
} from "../../../Services/BabyReferelsService.js";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const VISIBLE_FIELDS_ONE = [
  "babyNum",
  "b_Referel_Place",
  "b_Immunization_Name",
  "b_Referel_Reason",
];

function BabyReferels() {
  const [customDataset, setCustomDataset] = useState([]);
  const navigate = useNavigate();
  const authContext = useAuth();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getbabyreferels(id);
        const data = response.data.map((row, index) => ({
          id: index + 1, // Generate unique id for each row
          ...row,
        }));
        setCustomDataset(data);
      } catch (error) {
        console.log("Error getting data:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewProfileClick = (id) => {
    // Handle the click event for the ViewProfile button
    console.log(`ViewProfile button clicked for row with id ${id}`);
    navigate(`/family/babyDashboard/immunization/referels/${id}`);
    // navigate(`/family/babyDashboard/babyProfile/${id}`);
  };

  return (
    <Formik
      initialValues={{
        babyNum: "",
        b_Immunization_Name: "",
        b_Referel_Reason: "",
        b_Referel_Place: "",
      }}
      enableReinitialize={true}
      validationSchema={babyReferelsSchema}
      validateOnChange={false}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await babyreferels(values);
          if (response.status === 200) {
            console.log("success");
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
                    Baby Immunization Referels
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
                      placeholder="Vaccine Name"
                      name="b_Immunization_Name"
                      label="Vaccine Name"
                      onChange={handleChange}
                      value={values.b_Immunization_Name}
                      error={
                        touched.b_Immunization_Name &&
                        Boolean(errors.b_Immunization_Name)
                      }
                      helperText={
                        touched.b_Immunization_Name &&
                        errors.b_Immunization_Name
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Referel Reason"
                      name="b_Referel_Reason"
                      label="Referel Reason"
                      onChange={handleChange}
                      value={values.b_Referel_Reason}
                      error={
                        touched.b_Referel_Reason &&
                        Boolean(errors.b_Referel_Reason)
                      }
                      helperText={
                        touched.b_Referel_Reason && errors.b_Referel_Reason
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      placeholder="Referel Place"
                      name="b_Referel_Place"
                      label="Referel Place"
                      onChange={handleChange}
                      value={values.b_Referel_Place}
                      error={
                        touched.b_Referel_Place &&
                        Boolean(errors.b_Referel_Place)
                      }
                      helperText={
                        touched.b_Referel_Place && errors.b_Referel_Place
                      }
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
              style={{ display: "flex", height: "100vh", overflowX: "hidden" }}
            >
              <DisplaySidebar />
              <div
                style={{ flex: 1, overflowX: "hidden", paddingLeft: "40px" }}
              >
                <div style={{ height: "100vh", width: "100%" }}>
                  <div>
                    <span className="text-xl text-[#2A777C] text-center font-bold">
                      Baby Immunization Reference History
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
  );
}
export default BabyReferels;
