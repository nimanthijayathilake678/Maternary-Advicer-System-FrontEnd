import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DefaultButton from "../../../../../Components/Button/DefaultButton";
import SideBar from "../../../../../Components/SideBar";
import { babyRegistrationSchema } from "../../../../../Pages/Validations/validation";
import BabyRegistrationForm2 from "./BabyRegistrationForm2";
function BabyRegistrationForm1() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "25%", display: "flex", maxWidth: "200px" }}>
        <SideBar />
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
              Register New Born
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
            <Grid item xs={12}>
              <BabyRegistrationForm2></BabyRegistrationForm2>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default BabyRegistrationForm1;
