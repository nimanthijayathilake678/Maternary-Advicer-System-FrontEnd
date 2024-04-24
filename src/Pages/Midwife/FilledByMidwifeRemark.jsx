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
import FilledArea from "../../Components/MidwifeRemarks/FilledArea";
import { IconButton, TextField, useMediaQuery } from "@mui/material";
import Theme from "../../Components/Theme";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddMultiple from "../../Components/MidwifeRemarks/AddMultiple";
import DisplaySidebar from "../../Components/DisplaySidebar";
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import { apiClient } from "../../API/ApiServer";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SquareBox = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E4FEFF",
  height: "7em",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
  fontWeight: "bold",
}));

const FilledByMidwife = () => {
  const {id} = useParams();
  const theme = Theme();
  const [expanded, setExpanded] = useState(false);
  const [weightW, setWeightW] = React.useState("");
  const [heightW, setHeightW] = React.useState("");
  const [weightH, setWeightH] = React.useState("");
  const [heightH, setHeightH] = React.useState("");
  const [bmiW, setBmiW] = React.useState("");
  const [bmiH, setBmiH] = React.useState("");
  const [filldata,setFilldata] = React.useState(
    {
      "user_id": id,
      "w_weight": null,
      "w_height": null,
      "w_bloodType": "",
      "w_hemoglobinValue": null,
      "h_weight": null,
      "h_height": null,
      "h_bloodType": "",
      "h_hemoglobinValue": null
    }
    
  );
  const [statusW, setStatusW] = React.useState("Enter weight and height");
  const [statusH, setStatusH] = React.useState("Enter weight and height");

  const handleWeightWChange = (event) => {
    const newWeight = event.target.value;
    setFilldata(
      {
        ...filldata,
      "w_weight":newWeight
      }
    );
  };

  
  const handleWeightHChange = (event) => {
    const newWeight = event.target.value;
    setFilldata(
      {
        ...filldata,
      "h_weight":newWeight
      }
    );
  };

  const handleHeightWChange = (event) => {
    const newHeight = event.target.value;
    setFilldata(
      {
        ...filldata,
      "w_height":newHeight
      }
    );
  };

  
  const handleHeightHChange = (event) => {
    const newHeight = event.target.value;
    setFilldata(
      {
        ...filldata,
      "h_height":newHeight
      }
    );
  };
  React.useEffect(() => {
    // Calculate BMI when weight or height changes
    if (filldata?.w_height && filldata?.w_weight) {
      const weightNum = parseFloat(filldata?.w_weight);
      const heightNum = parseFloat(filldata?.w_height) / 100; // Convert height to meters
      const bmiValue = weightNum / (heightNum * heightNum);
      const newBmi = bmiValue.toFixed(2);
      setBmiW(newBmi);
      if (bmiValue >= 30) {
        setStatusW(`BMI :${newBmi}  Bellow D`);
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setStatusW(`BMI :${newBmi}  C & D`);
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setStatusW(`BMI :${newBmi}  A & C`);
      } else {
        setStatusW(`BMI :${newBmi}  A & B`);
      }
    } else {
      setBmiW(""); // Clear BMI if weight or height is empty
      setStatusW("Enter weight and height");
    }
  }, [filldata?.w_height, filldata?.w_weight]);


  React.useEffect(() => {
    // Calculate BMI when weight or height changes
    if (filldata?.h_height && filldata?.h_weight) {
      const weightNum = parseFloat(filldata?.h_weight);
      const heightNum = parseFloat(filldata?.h_height) / 100; // Convert height to meters
      const bmiValue = weightNum / (heightNum * heightNum);
      const newBmi = bmiValue.toFixed(2);
      setBmiH(newBmi);
      if (bmiValue >= 30) {
        setStatusH(`BMI :${newBmi}  Bellow D`);
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setStatusH(`BMI :${newBmi}  C & D`);
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setStatusH(`BMI :${newBmi}  A & C`);
      } else {
        setStatusH(`BMI :${newBmi}  A & B`);
      }
    } else {
      setBmiH(""); // Clear BMI if weight or height is empty
      setStatusH("Enter weight and height");
    }
  }, [filldata?.h_height , filldata?.h_weight]);
  
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

  const handleClick= async()=>{

    try{
      const response = await apiClient.post(
        "/filledByMidwife/" + id,filldata
       
      )
      

    }catch(err){
      console.error(err)
    }
  }

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
    <div className="text-black w-full min-h-screen flex bg-white">
      <DisplaySidebar />
      <Grid container spacing={2} sx={{ marginTop: 1, marginRight: 2 }}>
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
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Item>
                              <Grid container spacing={2} alignItems="center">
                                <Grid
                                  item
                                  container
                                  direction="column"
                                  sx={{ display: "flex" }}
                                  xs={8}
                                >
                                  <Grid item xs={12}>
                                    <TextField
                                      required
                                      name="Weight"
                                      label="Weight (kg)"
                                      type="number"
                                      inputProps={{ min: 1 }}
                                      sx={{ width: "100%", paddingTop: "1em" }}
                                      onChange={handleWeightHChange}
                                      value={filldata?.h_weight}
                                      

                                    />
                                  </Grid>

                                  <Grid item xs={12} sx={{ paddingTop: "2em" }}>
                                    <TextField
                                      required
                                      name="Height"
                                      label="Height (cm)"
                                      type="number"
                                      inputProps={{ min: 1 }}
                                      sx={{ width: "100%" }}
                                      onChange={handleHeightHChange}
                                      value={filldata?.h_height}
                                     
                                    />
                                  </Grid>
                                </Grid>

                                <Grid item xs={4} sx={{ paddingTop: "1em" }}>
                                  <SquareBox>{statusH}</SquareBox>
                                </Grid>

                                <Grid item xs={12}>
                                  <TextField
                                    required
                                    name="Blood type"
                                    label="Blood type"
                                    sx={{ width: "100%", paddingTop: "1em" }}
                                    value={filldata?.h_bloodType}
                                    onChange={handleChange}
                                  />

                                </Grid>

                                <Grid item xs={12}>
                                  <TextField
                                    required
                                    name="Hemoglobin Value"
                                    label="Hemoglobin Value"
                                    sx={{ width: "100%", paddingTop: "1em" }}
                                    value={filldata?.h_hemoglobinValue}
                                    onChange={handleChange}
                                  />
                                </Grid>
                              </Grid>
                            </Item>
                          </Grid>
                        </Grid>
                      </Box>
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
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Item>
                            <Grid container spacing={2} alignItems="center">
                              <Grid
                                item
                                container
                                direction="column"
                                sx={{ display: "flex" }}
                                xs={8}
                              >
                                <Grid item xs={12}>
                                  <TextField
                                    required
                                    name="Weight"
                                    label="Weight (kg)"
                                    type="number"
                                    inputProps={{ min: 1 }}
                                    sx={{ width: "100%", paddingTop: "1em" }}
                                    onChange={handleWeightWChange}
                                    value={filldata?.w_weight}
                                   
                                  />
                                </Grid>

                                <Grid item xs={12} sx={{ paddingTop: "2em" }}>
                                  <TextField
                                    required
                                    name="Height"
                                    label="Height (cm)"
                                    type="number"
                                    inputProps={{ min: 1 }}
                                    sx={{ width: "100%" }}
                                    onChange={handleHeightWChange}
                                    value={filldata?.w_height}
                                   
                                  />
                                </Grid>
                              </Grid>

                              <Grid item xs={4} sx={{ paddingTop: "1em" }}>
                                <SquareBox>{statusW}</SquareBox>
                              </Grid>

                              <Grid item xs={12}>
                                <TextField
                                  required
                                  name="Blood type"
                                  label="Blood type"
                                  sx={{ width: "100%", paddingTop: "1em" }}
                                  value={filldata?.w_bloodType}
                                  onChange={handleChange}
                                />
                              </Grid>

                              <Grid item xs={12}>
                                <TextField
                                  required
                                  name="Hemoglobin Value"
                                  label="Hemoglobin Value"
                                  sx={{ width: "100%", paddingTop: "1em" }}
                                  value={filldata?.w_hemoglobinValue}
                                  onChange={handleChange}
                                />
                              </Grid>
                            </Grid>
                          </Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  mt: 2,
                  background: "#00A9BB",
                  alignItems: "center",
                  marginBottom: "5",
                }}
                onClick={handleClick}
                to="/midwife"
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
