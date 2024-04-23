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

export default function FamilyHealthInformation({
  handleNext,
  handleBack,
}) {
  const auth = useAuth();
  const [familyHealthInfo, setFamilyHealthInfo] = useState({
    w_hypertension: null,
    w_diabetesMellitus: null,
    w_heartDiseases: null,
    w_nervousDisorders: null,
    w_hemophilia: null,
    w_thalassemia: null,
    w_mentalProblems: null,
    w_twins: null,
    h_hypertension: null,
    h_diabetesMellitus: null,
    h_heartDiseases: null,
    h_nervousDisorders: null,
    h_hemophilia: null,
    h_thalassemia: null,
    h_mentalProblems: null,
    h_twins: null,
    user_id:auth.user.id
  });
  const [method, setMethod] = useState("post");
  const url = "/familyHealth";
  const inputRef = useRef(null);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await apiClient.get("/familyHealth/" + auth.user.id);
        setFamilyHealthInfo(response?.data);
        if (response.data.h_name) {
          setMethod("put");
          setUser("/" + response.data.user.id);
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
  }, [familyHealthInfo]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFamilyHealthInfo({
      ...familyHealthInfo ,
      [name]: checked,
    });
  };

  const handleClick = () => {
    handleNext(url, method, familyHealthInfo, user);
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
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em", paddingTop: "3em"  }}>
          Wife Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%" }}>
            <Grid
              item
              xs={12}
              sx={{
                fontStyle: "italic",
                fontSize: "0.7rem",
                fontWeight: "bold",
                padding: "4em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                It is important to know about certain medical conditions that
                your mother, father or blood relatives have had because you may
                be at risk of developing the same condition. It will allow you
                to pay special attention to it during pregnancy and in addition,
                it will help you and your children to avoid or minimize these
                disesses.
              </span>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                fontStyle: "italic",
                fontSize: "0.7rem",
                fontWeight: "bold",
                padding: "1em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                Are your parents or siblings suffering from the following
                diseases ?
              </span>
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="w_hypertension"
                onChange={handleChange}
                name="w_anemia"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Diabetes Mellitus"
                onChange={handleChange}
                name="w_diabetesMellitus"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Heart Diseases"
                onChange={handleChange}
                name="w_heartDiseases"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Nervous disorders"
                onChange={handleChange}
                name="w_nervousDisorders"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hemophilia"
                onChange={handleChange}
                name="w_hemophilia"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Thalassemia"
                onChange={handleChange}
                name="w_thalassemia"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="A history of mental illness or suicide"
                onChange={handleChange}
                name="w_mentalProblems"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Twins"
                onChange={handleChange}
                name="w_twins"
              />
            </Grid>
          </Grid>

          <Typography variant="h6"sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"3em", paddingTop: "3em"  }}>
          Husband Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%" }}>

            <Grid
              item
              xs={12}
              sx={{
                fontStyle: "italic",
                fontSize: "0.7rem",
                fontWeight: "bold",
                padding: "1em 1em 0em 1em !important",
              }}
            >
              <span>
                {" "}
                Are your parents or siblings suffering from the following
                diseases ?
              </span>
            </Grid>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hypertension"
                onChange={handleChange}
                name="hh_hypertension"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Diabetes Mellitus"
                onChange={handleChange}
                name="h_diabetesMellitus"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Heart Diseases"
                onChange={handleChange}
                name="h_heartDiseases"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Nervous disorders"
                onChange={handleChange}
                name="h_nervousDisorders"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Hemophilia"
                onChange={handleChange}
                name="h_hemophilia"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Thalassemia"
                onChange={handleChange}
                name="h_thalassemia"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="A history of mental illness or suicide"
                onChange={handleChange}
                name="h_mentalProblems"
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Twins"
                onChange={handleChange}
                name="h_twins"
              />
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
            disabled
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
