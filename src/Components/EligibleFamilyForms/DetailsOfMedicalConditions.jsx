import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Theme from "../../Components/Theme";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function DetailsOfMedicalCondiitions({
  handleNext,
  handleBack,
}) {
  const auth = useAuth();
  const [medicalInfo, setMedicalInfo] = useState({
    "w_anemia": null,
    "w_congenital": null,
    "w_rheumaticHeartDisease": null,
    "w_diabetesMellitus": null,
    "w_hypertension": null,
    "w_hypercholesterolemia": null,
    "w_asthma": null,
    "w_thyroid": null,
    "w_untratedDecayedTeeth": null,
    "w_toothDecayBleedingGums": null,
    "w_mentalIllnesses": null,
    "w_rheumaticFever": null,
    "w_epilepsy": null,
    "w_foodAllergies": null,
    "w_drugsAllergies": null,
    "w_longTermMedicine": null,
    "w_otherSurgeries": null,
    "w_rubellaVaccine": null,
    "w_folicAcid": null,
    "w_bloodRelationMarrage": null,
    "h_anemia": null,
    "h_congenital": null,
    "h_rheumaticHeartDisease": null,
    "h_diabetesMellitus": null,
    "h_hypertension": null,
    "h_hypercholesterolemia": null,
    "h_asthma": null,
    "h_thyroid": null,
    "h_untratedDecayedTeeth": null,
    "h_toothDecayBleedingGums": null,
    "h_mentalIllnesses": null,
    "h_rheumaticFever": null,
    "h_epilepsy": null,
    "h_foodAllergies": null,
    "h_drugsAllergies": null,
    "h_longTermMedicine": null
   });
  const [method, setMethod] = useState("post");
  const url = "/CoupleMedicalConditions/";
  const inputRef = useRef(null);
  const [user, setUser] = useState(auth.user.id);
  const state = false;

  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await apiClient.get("/CoupleMedicalConditions/" + auth.user.id);
        setMedicalInfo(response?.data);
        if (response?.data.user_id) {
          setMethod("put");
        }
        console.log("Medical Information " + response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getFormData();
  }, [auth.user.id]);

  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== "") {
      inputRef.current.focus();
    }
  }, [medicalInfo]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setMedicalInfo({
      ...medicalInfo,
      [name]: checked,
    });
  };

  const handleClick = () => {
    handleNext(url, method, medicalInfo, user,state);
  };

  const theme = Theme();
  
  return (
    <div>
      {/* Personal Information Form */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
          paddingY: 10,
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="auto"
        flexDirection="column"
      >
        <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em", paddingTop: "3em"  }}>
                      Wife Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%", marginY: 1 }}>
          {/* Wife Information */}
          <Grid
              item
              xs={12}
              sx={{
                fontStyle: "italic",
                fontSize: "0.7rem",
                fontWeight: "bold",
                padding: "2em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                Have you ever had or do you have any of the following medical
                conditions?
              </span>
            </Grid>
            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Blood Deficiency(Anemia)"
                // checked={medicalInfo.w_anemia}
                onChange={handleChange}
                name="w_anemia"
                value={medicalInfo?.w_anemia}
              />
            </Grid>
            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Heart Diseases-Congenital"
                onChange={handleChange}
                name="w_congenital"
                value={medicalInfo?.w_congenital}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Heart Diseases-Rheumatic Heart Diseases"
                onChange={handleChange}
                name="w_rheumaticHeartDisease"
                value={medicalInfo?.w_rheumaticHeartDisease}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Diabetes Mellitus"
                onChange={handleChange}
                name="w_diabetesMellitus"
                value={medicalInfo?.w_diabetesMellitus}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hypertension"
                onChange={handleChange}
                name="w_hypertension"
                value={medicalInfo?.w_hypertension}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hypercholesterolemia"
                onChange={handleChange}
                name=" w_hypercholesterolemia"
                value={medicalInfo?.w_hypercholesterolemia}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Asthma"
                onChange={handleChange}
                name="w_asthma"
                value={medicalInfo?.w_asthma}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Thyroid diseases(Goiter)"
                onChange={handleChange}
                name="w_thyroid"
                value={medicalInfo?.w_thyroid}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Untrated decayed teeth"
                onChange={handleChange}
                name="w_untratedDecayedTeeth"
                value={medicalInfo?.w_untratedDecayedTeeth}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Conditions such as tooth decay and bleeding from gums"
                onChange={handleChange}
                name="w_toothDecayBleedingGums"
                value={medicalInfo?.w_toothDecayBleedingGums}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Mental Illnesses"
                onChange={handleChange}
                name="w_mentalIllnesses"
                value={medicalInfo?.w_mentalIllnesses}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <span>Diseases receiving long term treatment :</span>
              <Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    marginLeft: "5px",
                    padding: "1em 1em 0em 1em !important",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Rheumatic fever"
                    onChange={handleChange}
                    name="w_rheumaticFever"
                    value={medicalInfo?.w_rheumaticFever}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    marginLeft: "5px",
                    padding: "1em 1em 0em 1em !important",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Epilepsy"
                    onChange={handleChange}
                    name=" w_epilepsy"
                    value={medicalInfo?.w_epilepsy}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <span>Diseases receiving long term treatment :</span>
              <Grid
                item
                xs={6}
                sx={{
                  marginLeft: "5px",
                  padding: "1em 1em 0em 1em !important",
                }}
              >
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Food"
                  onChange={handleChange}
                  name="w_foodAllergies"
                  value={medicalInfo?.w_foodAllergies}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginLeft: "5px",
                  padding: "1em 1em 0em 1em !important",
                }}
              >
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Drugs"
                  onChange={handleChange}
                  name="w_drugsAllergies"
                  value={medicalInfo?.w_drugsAllergies}
                />
              </Grid>
            </Grid>
          </Grid>

          <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em", paddingTop: "3em"  }}>
                      Husband Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%", marginY: 1 }}>
          {/* Wife Information */}
          <Grid
              item
              xs={12}
              sx={{
                fontStyle: "italic",
                fontSize: "0.7rem",
                fontWeight: "bold",
                padding: "2em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                Have you ever had or do you have any of the following medical
                conditions?
              </span>
            </Grid>
            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Blood Deficiency(Anemia)"
                // checked={medicalInfo.w_anemia}
                onChange={handleChange}
                name="h_anemia"
                value={medicalInfo?.h_anemia}
              />
            </Grid>
            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Heart Diseases-Congenital"
                onChange={handleChange}
                name="h_congenital"
                value={medicalInfo?.h_congenital}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Heart Diseases-Rheumatic Heart Diseases"
                onChange={handleChange}
                name="h_rheumaticHeartDisease"
                value={medicalInfo?.h_rheumaticHeartDisease}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Diabetes Mellitus"
                onChange={handleChange}
                name="h_diabetesMellitus"
                value={medicalInfo?.h_diabetesMellitus}
                
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hypertension"
                onChange={handleChange}
                name="h_hypertension"
                value={medicalInfo?.h_hypertension}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hypercholesterolemia"
                onChange={handleChange}
                name=" h_hypercholesterolemia"
                value={medicalInfo?.h_hypercholesterolemia}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Asthma"
                onChange={handleChange}
                name="h_asthma"
                value={medicalInfo?.h_asthma}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Thyroid diseases(Goiter)"
                onChange={handleChange}
                name="h_thyroid"
                value={medicalInfo?.h_thyroid}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Untrated decayed teeth"
                onChange={handleChange}
                name="h_untratedDecayedTeeth"
                value={medicalInfo?.h_untratedDecayedTeeth}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Conditions such as tooth decay and bleeding from gums"
                onChange={handleChange}
                name="h_toothDecayBleedingGums"
                value={medicalInfo?.h_toothDecayBleedingGums}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Mental Illnesses"
                onChange={handleChange}
                name="h_mentalIllnesses"
                value={medicalInfo?.h_mentalIllnesses}
              />
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <span>Diseases receiving long term treatment :</span>
              <Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    marginLeft: "5px",
                    padding: "1em 1em 0em 1em !important",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Rheumatic fever"
                    onChange={handleChange}
                    name="h_rheumaticFever"
                    value={medicalInfo?.h_rheumaticFever}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    marginLeft: "5px",
                    padding: "1em 1em 0em 1em !important",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Epilepsy"
                    onChange={handleChange}
                    name="h_epilepsy"
                    value={medicalInfo?.h_epilepsy}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <span>Diseases receiving long term treatment :</span>
              <Grid
                item
                xs={6}
                sx={{
                  marginLeft: "5px",
                  padding: "1em 1em 0em 1em !important",
                }}
              >
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Food"
                  onChange={handleChange}
                  name="h_foodAllergies"
                  value={medicalInfo?.h_foodAllergies}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  marginLeft: "5px",
                  padding: "1em 1em 0em 1em !important",
                }}
              >
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label="Drugs"
                  onChange={handleChange}
                  name="h_drugsAllergies"
                  value={medicalInfo?.h_drugsAllergies}
                />
              </Grid>
            </Grid>
          </Grid>
                      
      </Box>
      <Box sx={{ mb: 2 }}>
        <div>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              mt: 1,
              mr: 1,
              color: "White",
              "&": {
                backgroundColor: theme.palette.primary.main,
              },
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            Continue
          </Button>
          <Button
            onClick={handleBack}
            sx={{
              mt: 1,
              mr: 1,
              color: "White",
              "&": {
                backgroundColor: theme.palette.primary.main,
              },
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            Back
          </Button>
        </div>
      </Box>
    </div>
  );
}
