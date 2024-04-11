import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DisplaySidebar from "../../../Components/DisplaySidebar";
import { getRegisterBabyByBabyNum } from "../../../Services/BabyRegistrationForm1Service";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
const VISIBLE_FIELDS_ONE = [
  "pregnancy_id",
  "b_Name",
  "b_Reg_Num",
  "b_MOH_Division",
  "b_Mother_Age",
  "b_Reg_Date",
];

export default function BabyDetails() {
  const [babyData, setBabyData] = useState({});
  const authContext = useAuth();
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetching data for baby with ID:", id);
    const fetchData = async () => {
      try {
        const response = await getRegisterBabyByBabyNum(id);
        const data = response.data[0]; // Assuming only one record is returned
        setBabyData(data);
      } catch (error) {
        console.log("Error getting data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <div style={{ display: "flex", height: "100vh", overflowX: "hidden" }}>
        <DisplaySidebar />
        <div style={{ flex: 1, overflowX: "hidden" }}>
          <div style={{ height: "100vh", width: "100vh", paddingLeft: "50px" }}>
            <Typography
              variant="h5"
              style={{
                marginBottom: "10px",
                color: "#2A777C",
                paddingBottom: "60px",
                paddingLeft: "20px",
                paddingTop: "40px",
              }}
            >
              My Baby Profile
            </Typography>

            <Paper style={{ padding: "20px" }}>
              <Grid container spacing={3}>
                {VISIBLE_FIELDS_ONE.map((field) => (
                  <React.Fragment key={field}>
                    <Grid item xs={6}>
                      <Typography
                        variant="subtitle1"
                        style={{ fontWeight: "bold", color: "#2A777C" }}
                      >
                        {field}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1">{babyData[field]}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Paper>
          </div>
        </div>
      </div>
    </Box>
  );
}
