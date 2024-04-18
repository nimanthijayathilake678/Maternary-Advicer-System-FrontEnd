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
import { babyImmunizationSchema } from "../../../Pages/Validations/validation.js";
import BabyImmunizationService, {
  babyimmunization,
  getbabyImmunization,
} from "../../../Services/BabyImmunizationService.js";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SuccessAlert from "../../../Components/SuccessMsg.jsx";

const VISIBLE_FIELDS_ONE = [
  "vaccineName",
  "ageForVaccine",
  "vaccineDate",
  "batchNo",
  "adverseEffects",
  "addReferels",
];

function BabyImmunization() {
  const [customDataset, setCustomDataset] = useState([]);
  const navigate = useNavigate();
  const authContext = useAuth();
  const { id } = useParams();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const role = authContext.position;
  console.log(role);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getbabyImmunization(id);
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

  const handleViewProfileClick = (id) => {
    navigate(`/family/babyDashboard/immunization/referels/${id}`);
    // navigate(`/family/babyDashboard/babyProfile/${id}`);
  };

  return (
    <>
      {authContext.position == "Midwife" && (
        <Formik
          initialValues={{
            babyNum: "",
            vaccineName: "",
            ageForVaccine: "",
            vaccineDate: "",
            batchNo: "",
            adverseEffects: "",
          }}
          enableReinitialize={true}
          validationSchema={babyImmunizationSchema}
          validateOnChange={false}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await babyimmunization(values);
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
                        Baby Immunization
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
                          name="vaccineName"
                          label="Vaccine Name"
                          onChange={handleChange}
                          value={values.vaccineName}
                          error={
                            touched.vaccineName && Boolean(errors.vaccineName)
                          }
                          helperText={touched.vaccineName && errors.vaccineName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          required
                          fullWidth
                          placeholder="Age for Vaccination"
                          name="ageForVaccine"
                          label="Age for Vaccination"
                          onChange={handleChange}
                          value={values.ageForVaccine}
                          error={
                            touched.ageForVaccine &&
                            Boolean(errors.ageForVaccine)
                          }
                          helperText={
                            touched.ageForVaccine && errors.ageForVaccine
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          required
                          fullWidth
                          type="date"
                          placeholder="Vaccine Date"
                          name="vaccineDate"
                          //label="Vaccine Date"
                          onChange={handleChange}
                          value={values.vaccineDate}
                          error={
                            touched.vaccineDate && Boolean(errors.vaccineDate)
                          }
                          helperText={touched.vaccineDate && errors.vaccineDate}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          required
                          fullWidth
                          placeholder="Vaccine Batch No"
                          name="batchNo"
                          label="Vaccine Batch No"
                          onChange={handleChange}
                          value={values.batchNo}
                          error={touched.batchNo && Boolean(errors.batchNo)}
                          helperText={touched.batchNo && errors.batchNo}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          required
                          fullWidth
                          placeholder="Adverse Effects"
                          name="adverseEffects"
                          label="Adverse Effects"
                          onChange={handleChange}
                          value={values.adverseEffects}
                          error={
                            touched.adverseEffects &&
                            Boolean(errors.adverseEffects)
                          }
                          helperText={
                            touched.adverseEffects && errors.adverseEffects
                          }
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <DefaultButton
                          type="submit"
                          height="40px"
                          width="150px"
                          title="Register"
                          //disabled={isSubmitting}
                          //disabled={role === "Family" || isSubmitting}
                          disabled={
                            authContext.position !== "Midwife" || isSubmitting
                          }
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
      )}
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
                Baby Immunization History
              </span>
            </div>
          </Box>

          <Box
            sx={{
              padding: "50px",
              maxWidth: "1020px",

              margin: "auto",
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <DataGrid
              autoHeight
              rows={customDataset}
              columns={VISIBLE_FIELDS_ONE.map((field) => {
                if (field === "addReferels") {
                  return {
                    field: "addReferels",
                    headerName: "addReferels",
                    width: 150,
                    renderCell: (params) => (
                      <button
                        onClick={() => handleViewProfileClick(id)}
                        style={{
                          padding: "6px 12px",
                          borderRadius: "4px",
                          backgroundColor: "#007bff",
                          color: "#ffffff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        View
                        {params.value}
                      </button>
                    ),
                  };
                } else {
                  return {
                    field,
                    headerName: field,
                    width: 150, // Adjust width as needed
                  };
                }
              })}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      </Box>

      {showSuccessAlert && <SuccessAlert setAlert={setShowSuccessAlert} />}
    </>
  );
}
export default BabyImmunization;
