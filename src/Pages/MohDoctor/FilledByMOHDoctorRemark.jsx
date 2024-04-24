import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GeneralInformationRemark from "../../Components/MidwifeRemarks/GeneralInformationRemark";
import PersonalInformationRemark from "../../Components/MidwifeRemarks/PersonalInformationRemark";
import MedicalConditionRemark from "../../Components/MidwifeRemarks/MedicalConditionRemark";
import SexualAndReproductiveHealthRemark from "../../Components/MidwifeRemarks/SexualAndReproductiveHealthRemark";
import FamilyHealthInformationRemark from "../../Components/MidwifeRemarks/FamilyHealthInformationRemark";
import FamilyNutrition from "../../Components/MidwifeRemarks/FamilyNutritionRemark";
import LifeStyle from "../../Components/EligibleFamilyForms/LifeStyle";
import LifeStyleRemark from "../../Components/MidwifeRemarks/LifeStyleRemark";
import HousingAndWorkspaceRemark from "../../Components/MidwifeRemarks/HousingAndWorkspaceRemark";
import Lottie from "lottie-react";
import noteDown from "../../Assest/Lottie/noteDown.json";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FilledArea from "../../Components/MOHDoctorRemarks/FilledArea";
import { IconButton, TextField, useMediaQuery } from "@mui/material";
import Theme from "../../Components/Theme";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddMultiple from "../../Components/MidwifeRemarks/AddMultiple";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FilledByMidwife = () => {
  const theme = Theme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [values, setValues] = useState(["", ""]);

  // Function to handle changes in text fields
  const handleInputChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  // Function to add a new empty text field
  const handleAddField = () => {
    setValues([...values, ""]);
  };

  // Function to remove a text field
  const handleRemoveField = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDates(date);
  };

  const islgScreen = useMediaQuery(() => theme.breakpoints.down("lg"));

  return (
    <div className="text-black w-full bg-white">
      <Grid container spacing={2} sx={{ marginTop: 1, marginRight: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            paddingLeft: 10,
            paddingTop: 0,
            alignItems: "center",
          }}
        >
          <Grid item xs={12} lg={7} spacing={2}>
            <Item>
              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid items xs={12} md={6} sx={{ marginLeft: "20" }}>
                  <Grid items xs={12}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#00A9BB",
                        padding: "1em 1em 0em 1em !important",
                      }}
                    >
                      Husband
                      <FilledArea />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid items xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#00A9BB",
                      padding: "1em 1em 0em 1em !important",
                    }}
                  >
                    Wife
                    <FilledArea />
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} inputMode={10} spacing={2}>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  sx={{ padding: "1em 1em 0em !important", textAlign: "left" }}
                >
                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em" }}>
                      Observations and Conclusions
                    </Typography>
                    <AddMultiple dataType="text" labelName="Observations and Conclusions" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em" }}>
                      Referrals
                    </Typography>
                    <AddMultiple dataType="text" labelName="Referrals" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em" }}>
                      Follow Ups
                    </Typography>
                    <AddMultiple dataType="text" labelName="Follow Ups" />
                  </Grid>
                </Grid>
              </Grid>

              
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  mt: 2,
                  background: "#00A9BB",
                  alignItems: "center",
                  marginBottom:"5"
                }}
                onClick={() => {
                  console.log("Finish Reviewing button clicked");
                }}
                to="./print"
                component={Link}
              >
                Submit
              </Button>
            </Item>
          </Grid>

          {islgScreen ? null : (
            <Grid item lg={3} sx={{ paddingLeft: 6 }}>
              <Lottie animationData={noteDown} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default FilledByMidwife;
