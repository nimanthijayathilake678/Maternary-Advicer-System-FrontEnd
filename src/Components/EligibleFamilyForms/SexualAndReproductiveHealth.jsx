import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Theme from "../../Components/Theme";
import Autocomplete from "@mui/material/Autocomplete";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function SexualAndReproductiveHealth({handleNext,handleBack}) {
  const auth = useAuth();
  const [sexualInfo, setSexualInfo] = useState({
  "w_regularMonthlyPeriod":false,
  "w_noOfPeriodDays": 0,
  "w_heavyBleeding": false,
  "w_vaginaBleeding": false,
  "w_abdominalPain": false,
  "w_unusualColorFoulSmelling": false,
  "w_abortionHistory": false,
  "w_stillBirthHistory": false,
  "w_infantMortalityHistory": false,
  "w_tubalPregnancyHistory": false,
  "w_isItching": false,
  "w_reproductiveOrganSurgery": false,
  "w_reproductiveOrganSurgeryDetails": "",
  "w_sexualProblems": false,
  "w_satisfiedSexualRelationship": false,
  "w_breastSelfExam": false,
  "h_isItching": false,
  "h_reproductiveOrganSurgery": false,
  "h_reproductiveOrganSurgeryDetails": "",
  "h_sexualProblems": false,
  "h_satisfiedSexualRelationship": false,
  "familyPlanning": false,
  "familyPlanningDetails": "",
  "delayingFirstChild": false,
  "delayingTimePeriod": 0,
  "user_id":auth.user.id
  });
  const [method,setMethod] = useState("post");
  const url = "/sexualAndReproductiveHealthInfo";
  const inputRef = useRef(null);
  const [user,setUser] = useState("")
  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await apiClient.get("/sexualAndReproductiveHealthInfo/" + auth.user.id);
        setSexualInfo(response?.data);
        if(response.data.h_name){
          setMethod("put")
          setUser("/"+response.data.user.id)
        }
        console.log("Sexual Information " + response.data);
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
  }, [sexualInfo]);

  const handleChange = (e, value) => {
    const name = e.target.name;
    setSexualInfo({
      ...sexualInfo,
      [name]: value,
    });
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setSexualInfo({
      ...sexualInfo,
      [name]:value
    })
  };
  


  const handleClick = () => {
    handleNext(url,method,sexualInfo,user)
  }


  const handleValueChange = (e,newValue) =>{
    setSexualInfo({
      ...sexualInfo,
      w_educationalLevel:newValue
    })

  }
  const handleValue1Change = (e,newValue1) =>{
    setSexualInfo({
      ...sexualInfo,
      h_educationalLevel:newValue1
    })
  }
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
                padding: "4em 4em 0em 1em !important",
                
              }}
            >
              <span>
                {" "}
                There may be some difficulities arising during a woman’s monthly
                period and in the sexual relationship of both of you. Successful
                intercourse is essential for maximum sexual satisfaction. Also
                mention here the information about the family organization
                methods used by both of you
              </span>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Are your monthly periods regular ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_regularMonthlyPeriod"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>

            </Grid>

            <Grid item xs={4} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Number of days"
                id="w_noOfPeriodDays"
                name="w_noOfPeriodDays"
                label="Number of days"
                sx={{ width: "100%" }}
                onChange={handleChangeText}
                ref={inputRef}
              />
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you bleed heavily when you have your period ? </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_heavyBleeding"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span> Do you have vaginal bleeding between periods ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_vaginaBleeding"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Suffering from severe abdominal pain during periods ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_abdominalPain"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Is there an unusual colored or foul-smelling discharge from
                  the vagina ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_unusualColorFoulSmelling"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ padding: "1em 1em 0em 1em !important" }}>
                <span>Do you have a history of the following conditions ?</span>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>
                  {" "}
                  1. Abortion
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_abortionHistory"
                  
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>
                  {" "}
                  2. Stillbirths
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_stillBirthHistory"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>
                  {" "}
                3. Infant mortality
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_infantMortalityHistory"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>
                  {" "}
                  4. Tubal Pregnancy (Ectopic)
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_tubalPregnancyHistory"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Do you have itching in or around your  genitals ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_isItching"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Have you had any surgery on your reproductive organs ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_reproductiveOrganSurgery"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid item xs={4} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="If so, what is it ?"
                label="If so, what is it ?"
                sx={{ width: "100%" }}
                name="w_reproductiveOrganSurgeryDetails"
                onChange={handleChangeText}
                ref={inputRef}
              />
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Do you think you both have a problem with sex ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_sexualProblems"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Are you satisfied with the sexual relationship ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_satisfiedSexualRelationship"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  {" "}
                  Do you do breast self-examination once a month ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_breastSelfExam"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>


          
        </Grid>

        {/* Husband Information */}
        <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"4em", paddingTop: "3em"  }}>
                      Husband Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%" }}>
            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you have itching in or around your genitals ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_isItching"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>
                  Have you had any surgery on your reproductive organs ?
                </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_reproductiveOrganSurgery"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid item xs={4} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="If so, what is it?"
                name="h_reproductiveOrganSurgeryDetails"
                onChange={handleChangeText}
                ref={inputRef}
                label="If so, what is it?"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you think you both have a problem with sex ? </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_sexualProblems"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}

                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span> Are you satisfied with the sexual relationship ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_satisfiedSexualRelationship"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
        
        {/* Other Information */}
        <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"4em", paddingTop: "3em"  }}>
                      Other Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%" }}>
            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you both use a family planning system ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="familyPlanning"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid item xs={4} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="If so, what is it ?"
                name="familyPlanningDetails"
                onChange={handleChangeText}
                ref={inputRef}
                label="If so, what is it ?"
                sx={{ width: "100%" }}
              />
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Hoping to delay the birth birth of your first child ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="delayingFirstChild"
                >
                  <FormControlLabel
                    value="Given"
                    control={<Radio size="small" />}
                    label="Yes"
                    onChange={(e) => handleChange(e, true)}
                  />
                  <FormControlLabel
                    value="NotGiven"
                    control={<Radio size="small" />}
                    label="No"
                    onChange={(e) => handleChange(e, true)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid item xs={4} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="How long is that ?"
                name="delayingTimePeriod"
                onChange={handleChangeText}
                ref={inputRef}
                label="How long is that ?"
                sx={{ width: "100%" }}
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
