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
import Remark from "../../Assest/Lottie/Remark.json";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {Box} from "@mui/material";
import DisplaySidebar from "../../Components/DisplaySidebar";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MidwifeRemarkEligibleForm = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box style={{ display: "flex" }} className=" bg-white">
      <DisplaySidebar/>
      <Box className="text-black bg-white">
      <Grid container spacing={2} sx={{ marginTop: 5 }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            paddingLeft: 10,
            paddingTop: 0,
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Grid item xs={6}>
            <Item>
            <Typography variant="h4" sx={{ color: "#00A9BB" , paddingBottom:7  , paddingTop: 6 , alignItems:'center'}}>
            Review Eligible Family Details
          </Typography>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{ alignItems: "flex-start" }}
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    General Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <GeneralInformationRemark size={600} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Personal Details
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <PersonalInformationRemark size={600} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Details of Medical Conditions
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <MedicalConditionRemark size={700} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Sexual and Reproductive Health
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <SexualAndReproductiveHealthRemark size={650} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Family Health Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FamilyHealthInformationRemark size={500} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Family Nutrition
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <FamilyNutrition size={500} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Life Style
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <LifeStyleRemark size={850} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    sx={{
                      width: "33%",
                      flexShrink: 0,
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    Housing And Workspace
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <HousingAndWorkspaceRemark size={950} />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Button
                variant="contained"
                sx={{ width: "100%",mt: 2, background: "#00A9BB" , alignItems:'center' }}
                onClick={() => {
                  console.log("Finish Reviewing button clicked");
                }}
                to="./filledByMidwife"
                component={Link}
              >
                Finish Reviewing
              </Button>
            </Item>
          </Grid>

          <Grid item xs={6} sx={{ paddingLeft: 2 }}>
            <Lottie animationData={Remark} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Box>
    
  );
};

export default MidwifeRemarkEligibleForm;
