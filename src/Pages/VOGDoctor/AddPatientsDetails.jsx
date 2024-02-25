import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import SideBar from "../../Components/SideBar";

function MyForm() {
  const [formData, setFormData] = useState({
    PregnancyRegNo: "",
    EligibilityRegNo: "",
    ClinicId: "",
    POA: "",
    Urine: "",
    Oedema: "",
    BloodPressure: "",
    FundalHeight: "",
    FoetalLie: "",
    Presentation: "",
    FM: "",
    FHS: "",
    EBW: "",
    CRL: "",
    GestSac: "",
    BPD: "",
    HC: "",
    AC: "",
    FL: "",
    Liqour: "",
    Placenta: "",
    AveragePOA: "",
    AnyOther: "",
    NextVisitDate: "",
    DoctorId: "",
    Designation: "",
  });

  const [errorMessages, setErrorMessages] = useState({});

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform data validation
    const validationErrors = {};
    if (!formData.PregnancyRegNo) {
      validationErrors.PregnancyRegNo =
        "Pregnancy Registration Number is required";
    }

    if (!formData.EligibilityRegNo) {
      validationErrors.EligibilityRegNo =
        "Eligibility Register Number is required";
    }

    if (!formData.ClinicId) {
      validationErrors.ClinicId = "Clinic Id Number is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors);
      return;
    }

    try {
      // Connect to MySQL database
      const response = await fetch("your-mysql-backend-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error updating database: ${response.statusText}`);
      }

      // Handle successful update
      console.log("Data updated successfully!");
      // ... Clear form or redirect to another page ...
    } catch (error) {
      console.error("Error:", error);
      // Display error message to user
    }
  };

  // Handle form field changes
  const handleFieldChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={3} display={"flex"}>
          <SideBar />
        </Grid>
        
        <Grid
          item
          xs={9}
          style={{ paddingTop: "100px", paddingRight: "200px" }}
        >
          
          <div>
            <span className="text-xl text-[#2A777C] text-center font-bold">
              Hospital Clinic Care
            </span>
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              m: 1,
              border: "1px solid #ccc",
             
              borderRadius: "5px",
              
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Pregnancy Registration Number"
                  name="PregnancyRegNo"
                  value={formData.PregnancyRegNo}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.PregnancyRegNo)}
                  helperText={errorMessages.PregnancyRegNo}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Eligibility Registration Number"
                  name="EligibilityRegNo"
                  value={formData.EligibilityRegNo}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.EligibilityRegNo)}
                  helperText={errorMessages.EligibilityRegNo}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Clinic ID"
                  name="ClinicId"
                  value={formData.ClinicId}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.ClinicId)}
                  helperText={errorMessages.ClinicId}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="POA (Pelvic Outlet Assessment)"
                  name="POA"
                  value={formData.POA}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.POA)}
                  helperText={errorMessages.POA}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Urine Test Result"
                  name="Urine"
                  value={formData.Urine}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.Urine)}
                  helperText={errorMessages.Urine}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Oedema (Swelling)"
                  name="Oedema"
                  value={formData.Oedema}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.Oedema)}
                  helperText={errorMessages.Oedema}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Blood Pressure"
                  name="BloodPressure"
                  value={formData.BloodPressure}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.BloodPressure)}
                  helperText={errorMessages.BloodPressure}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Fundal Height"
                  name="FundalHeight"
                  value={formData.FundalHeight}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.FundalHeight)}
                  helperText={errorMessages.FundalHeight}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Foetal Lie"
                  name="FoetalLie"
                  value={formData.FoetalLie}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.FoetalLie)}
                  helperText={errorMessages.FoetalLie}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Presentation"
                  name="Presentation"
                  value={formData.Presentation}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.Presentation)}
                  helperText={errorMessages.Presentation}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="FM (Fetal Movement)"
                  name="FM"
                  value={formData.FM}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.FM)}
                  helperText={errorMessages.FM}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="FHS (Fetal Heart Sounds)"
                  name="FHS"
                  value={formData.FHS}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.FHS)}
                  helperText={errorMessages.FHS}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="EBW (Estimated Birth Weight)"
                  name="EBW"
                  value={formData.EBW}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.EBW)}
                  helperText={errorMessages.EBW}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="CRL (Crown-Rump Length)"
                  name="CRL"
                  value={formData.CRL}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.CRL)}
                  helperText={errorMessages.CRL}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="GestSac (Gestational Sac)"
                  name="GestSac"
                  value={formData.GestSac}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.GestSac)}
                  helperText={errorMessages.GestSac}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="BPD (Biparietal Diameter)"
                  name="BPD"
                  value={formData.BPD}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.BPD)}
                  helperText={errorMessages.BPD}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="HC (Head Circumference)"
                  name="HC"
                  value={formData.HC}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.HC)}
                  helperText={errorMessages.HC}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="AC (Abdominal Circumference)"
                  name="AC"
                  value={formData.AC}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.AC)}
                  helperText={errorMessages.AC}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="FL (Femur Length)"
                  name="FL"
                  value={formData.FL}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.FL)}
                  helperText={errorMessages.FL}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Liquor (Amniotic fluid)"
                  name="Liquor"
                  value={formData.Liquor}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.Liquor)}
                  helperText={errorMessages.Liquor}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Placenta"
                  name="Placenta"
                  value={formData.Placenta}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.Placenta)}
                  helperText={errorMessages.Placenta}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="AveragePOA"
                  name="AveragePOA"
                  value={formData.AveragePOA}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.AveragePOA)}
                  helperText={errorMessages.AveragePOA}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="AnyOther "
                  name="AnyOther"
                  value={formData.AnyOther}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.AnyOther)}
                  helperText={errorMessages.AnyOther}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="NextVisitDate "
                  name="NextVisitDate"
                  type="date"
                  value={formData.NextVisitDate}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.NextVisitDate)}
                  helperText={errorMessages.NextVisitDate}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="DoctorId"
                  name="DoctorId"
                  value={formData.DoctorId}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.DoctorId)}
                  helperText={errorMessages.DoctorId}
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Designation"
                  name="Designation"
                  value={formData.Designation}
                  onChange={handleFieldChange}
                  error={Boolean(errorMessages.Designation)}
                  helperText={errorMessages.Designation}
                />
              </Grid>
              {/* Add other TextFields for each remaining form field similarly */}
            </Grid>
            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyForm;
