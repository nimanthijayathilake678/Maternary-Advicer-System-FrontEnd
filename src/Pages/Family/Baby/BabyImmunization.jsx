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
                          touched.ageForVaccine && Boolean(errors.ageForVaccine)
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
                        label="Vaccine Date"
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
                        Baby Immunization History
                      </span>
                    </div>
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
export default BabyImmunization;
// function BabyImmunization() {
//   return (
//     <div>
//       <Box
//         component="form"
//         sx={{
//           "& .MuiTextField-root": { m: 1 },
//         }}
//         noValidate
//         autoComplete="off"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         height="100%"
//         flexDirection="column"
//       >
//         <Grid container spacing={3}>
//           {/* Sidebar */}
//           <Grid item xs={3} display={"flex"}>
//             <DisplaySidebar />
//           </Grid>
//           {/* Vaccine Details Section */}
//           <Grid
//             item
//             xs={9}
//             style={{ paddingTop: "100px", paddingRight: "200px" }}
//           >
//             {/* Header */}
//             <div>
//               <span className="text-xl text-[#2A777C] text-center font-bold">
//                 Add Baby Vaccination
//               </span>
//             </div>
//             <Box
//               sx={{
//                 width: "100%",
//                 border: "1px solid #ccc",
//                 padding: "1em",
//                 paddingRight: "80px",
//                 display: "flex",
//               }}
//             >
//               {/* Rest of the vaccine details section */}
//               <Grid container spacing={3}>
//                 <Grid item xs={6}>
//                   <TextField
//                     required
//                     placeholder="Vaccine Name"
//                     name="vaccineName"
//                     label="Vaccine Name"
//                     value={vaccineData.vaccineName}
//                     onChange={handleChange}
//                     error={!!errors.vaccineName}
//                     helperText={errors.vaccineName}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TextField
//                     required
//                     placeholder="Age for Vaccine"
//                     name="ageForVaccine"
//                     label="Age for Vaccine"
//                     value={vaccineData.ageForVaccine}
//                     onChange={handleChange}
//                     error={!!errors.ageForVaccine}
//                     helperText={errors.ageForVaccine}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TextField
//                     required
//                     type="date"
//                     placeholder="Vaccine Date"
//                     name="vaccineDate"
//                     //label="Vaccine Date"
//                     value={vaccineData.vaccineDate}
//                     onChange={handleChange}
//                     error={!!errors.vaccineDate}
//                     helperText={errors.vaccineDate}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TextField
//                     required
//                     placeholder="Batch No."
//                     name="batchNo"
//                     label="Batch No."
//                     value={vaccineData.batchNo}
//                     onChange={handleChange}
//                     error={!!errors.batchNo}
//                     helperText={errors.batchNo}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     placeholder="Adverse Effects"
//                     name="adverseEffects"
//                     label="Adverse Effects"
//                     value={vaccineData.adverseEffects}
//                     onChange={handleChange}
//                     error={!!errors.adverseEffects}
//                     helperText={errors.adverseEffects}
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Button
//                     variant="contained"
//                     onClick={handleVaccineAdd}
//                     style={{ marginTop: "1em" }}
//                   >
//                     Add Vaccine
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Box>
//             {/* Display Vaccine Details */}
//             <Box
//               sx={{ width: "100%", marginTop: "2em", paddingBottom: "80px" }}
//             >
//               <div>
//                 <span className="text-xl text-[#2A777C] text-center font-bold">
//                   Baby Vaccination Details
//                 </span>
//               </div>
//               <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                   <TableHead
//                     style={{
//                       backgroundColor: "#00A9BB",
//                       color: "white",
//                     }}
//                   >
//                     <TableRow>
//                       <TableCell>Vaccine Name</TableCell>
//                       <TableCell>Age for Vaccine</TableCell>
//                       <TableCell>Vaccine Date</TableCell>
//                       <TableCell>Batch No.</TableCell>
//                       <TableCell>Adverse Effects</TableCell>
//                       <TableCell>Vaccine Referrals</TableCell>{" "}
//                       {/* New Column */}
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {vaccineList.map((vaccine, index) => (
//                       <TableRow key={index}>
//                         <TableCell component="th" scope="row">
//                           {vaccine.vaccineName}
//                         </TableCell>
//                         <TableCell>{vaccine.ageForVaccine}</TableCell>
//                         <TableCell>{vaccine.vaccineDate}</TableCell>
//                         <TableCell>{vaccine.batchNo}</TableCell>
//                         <TableCell>{vaccine.adverseEffects}</TableCell>
//                         <TableCell>
//                           {/* Button for Vaccine Referrals */}
//                           <Link to="/family/babyDashboard/immunization/referels">
//                             <Button variant="contained" color="primary">
//                               Add Referels
//                             </Button>
//                           </Link>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// }
