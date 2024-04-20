import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Grid } from "@mui/material";
import SideBar from "../../Components/SideBar";
import axios from "axios";
import SuccessAlert from "../../Components/SuccessMsg";


function Clinic() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [clinicData, setClinicData] = useState({
    area: "",
    description: "",
    clinicDate: "",
    starttime: "",
   
    
  });



  const [errors, setErrors] = useState({});
 

  const handleClinicAdd = async (e) => {
    // Validate clinic data
    const clinicErrors = validateClinicForm(clinicData);
    if (Object.keys(clinicErrors).length > 0) {
      setErrors(clinicErrors);
      return;
    }
  
 
    const formattedClinicDate = formatDateString(clinicData.clinicDate);
    const formattedStartTime = convertTimeFormat(clinicData.starttime);
  
    try {
      await axios.post("http://localhost:8080/clinicDate", {
        ...clinicData,
        clinicDate: formattedClinicDate, // Replace the original clinicDate with the formatted one
        starttime: formattedStartTime,
      });
      console.log("Clinic data added successfully!");
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Error adding clinic data:", error);
    }
  };
  
  const formatDateString = (dateString) => {
    // Split the dateString by "/" and reorder it as "YYYY-MM-DD"
    const [month, day, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  const convertTimeFormat = (timeString) => {
    const [time, period] = timeString.split(" ");
    const [hours, minutes] = time.split(":");
    const formattedHours = period === "PM" ? parseInt(hours, 10) + 12 : hours;
    const formattedTime = `${formattedHours}:${minutes}:00`;
  
    return formattedTime;
  };



  const handleChange = (e) => {
    setClinicData({ ...clinicData, [e.target.name]: e.target.value });
  };

  const validateClinicForm = (data) => {
    let errors = {};

    if (!data.area) {
      errors.area = "Clinic area is required";
    }

    if (!data.description) {
      errors.description = "Description is required";
    }

    if (!data.clinicDate) {
      errors.clinicDate = "Clinic Date is required";
    }

    if (!data.starttime) {
      errors.starttime = "Time is required";
    }
    

    return errors;
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        flexDirection="column"
      >
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={3} display={"flex"}>
            <SideBar />
          </Grid>
          {/* Clinic Details Section */}
          <Grid
            item
            xs={9}
            style={{ paddingTop: "100px", paddingRight: "200px" }}
          >
            {/* Header */}
            <div>
              <span className="text-xl text-[#2A777C] text-center font-bold">
                Clinic Date Schedule
              </span>
            </div>
            <Box
              sx={{
                width: "100%",
                border: "1px solid #ccc",
                padding: "1em",
                paddingRight: "80px",
                display: "flex",
              }}
            >
              {/* Rest of the clinic details section */}
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    required
                    placeholder="Clinic Area"
                    name="area"
                    label="Clinic Area"
                    value={clinicData.area}
                    onChange={handleChange}
                    error={!!errors.area}
                    helperText={errors.area}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    type="date"
                    placeholder="Clinic Date"
                    name="clinicDate"
                    value={clinicData.clinicDate}
                    onChange={handleChange}
                    error={!!errors.clinicDate}
                    helperText={errors.clinicDate}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    placeholder="Description of Cinic"
                    name="description"
                    label="Description of Cinic"
                    value={clinicData.description}
                    onChange={handleChange}
                    error={!!errors.description}
                    helperText={errors.description}
                    fullWidth
                  />
                </Grid>
                
                <Grid item xs={6}>
               
                <TextField
                    required
                    placeholder="Start Time"
                    name="starttime"
                    label="Start Time"
                    type="time"
                    value={clinicData.starttime}
                    onChange={handleChange}
                    error={!!errors.starttime}
                    helperText={errors.starttime}
                    fullWidth
                  /> 
                </Grid>
                
                
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={handleClinicAdd}
                    style={{ marginTop: "1em" }}
                  >
                    Confirm Clinic 
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* Display Clinic Details */}
            
          </Grid>
        </Grid>
      </Box>
      {showSuccessAlert && <SuccessAlert setAlert={setShowSuccessAlert} />}
    </div>
  );
}

export default Clinic;
