import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Theme from "../../Components/Theme";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function FamilyNutrition({handleNext,handleBack}) {
  const auth = useAuth();
  const [familyNutritionInfo, setFamilyNutritionInfo] = useState({
  "w_threeMainMeals": false,
  "w_animalProteins": false,
  "w_plantProteinsGrains": false,
  "w_vegetables": false,
  "w_greens": false,
  "w_fruits": false,
  "w_havingMealTogether": false,
  "w_includingGardenHarvest": false,
  "w_tooMushSugar": false,
  "w_tooMuchOil": false,
  "h_threeMainMeals": false,
  "h_animalProteins": false,
  "h_plantProteinsGrains": false,
  "h_vegetables": false,
  "h_greens": false,
  "h_fruits": false,
  "h_havingMealTogether": false,
  "h_includingGardenHarvest": false,
  "h_tooMushSugar": false,
  "h_tooMuchOil": false,
  "user_id":auth.user.id
  });
  const [method,setMethod] = useState("post");
  const url = "/familyNutrition/";
  const state = true;
  const inputRef = useRef(null);
  const [user,setUser] = useState(auth.user.id)
  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await apiClient.get("/familyNutrition/" + auth.user.id);
        setFamilyNutritionInfo(response?.data);
        if(response.data.user_id){
          setMethod("put")
        }
        console.log("familyNutrition Information " + response.data);
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
  }, [familyNutritionInfo]);

  const handleChange = (e, value) => {
    const name = e.target.name;
    setFamilyNutritionInfo({
      ...familyNutritionInfo,
      [name]: value,
    });
  };
  
  const handleClick = () => {
    handleNext(url,method,familyNutritionInfo,user,state)
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
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"3em", paddingTop: "3em"  }}>
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
                Healthy and good nutritional habits achieved by eating a mixed
                diet every day will help the family to grow in health and also
                help the mother to give birth to healthy children in the future.
                Therefore, we aim to focus your attention on the nutritional
                status of your family
              </span>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you eat three main meals a day ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_threeMainMeals"
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
                    onChange={(e) => handleChange(e,false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Does your diet include the following ?</span>
              </Grid>
              
            </Grid>


           

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>1. Animal proteins (Meat, Fish, Milk, Egg, Dried Fish) </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_animalProteins"
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
                <span>2. Plant Protein /Grains (Soya, Dhal - Daily) </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_plantProteinsGrains"
                 
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
                <span>3. Two types of Vegetables - Daily </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_vegetables"
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
                <span>4. A type of Greens - Daily</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_greens"
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
                <span> 5. A type of Fruit</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_fruits"
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
                <span> Do you all sit down and have one meal together as a family</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_havingMealTogether"
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
                <span> Does your diet include anything from the garden ? (vegetables, fruits, greens)</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_includingGardenHarvest"
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
                <span>Are you consuming too much sugar ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_tooMushSugar"
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
                <span>Do you eat too much oil ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="w_tooMuchOil"
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


          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"4em", paddingTop: "3em"  }}>
          Husband Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%" }}>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Do you eat three main meals a day ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_threeMainMeals"
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
                    onChange={(e) => handleChange(e,false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10}>
                <span>Does your diet include the following ?</span>
              </Grid>
              
            </Grid>


           

            <Grid
              xs={12}
              sx={{ display: "flex", padding: "1em 1em 0em 1em !important" }}
            >
              <Grid item xs={10} sx={{marginLeft: "5px"}}>
                <span>1. Animal proteins (Meat, Fish, Milk, Egg, Dried Fish) </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_animalProteins"
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
                <span>2. Plant Protein /Grains (Soya, Dhal - Daily) </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_plantProteinsGrains"
                 
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
                <span>3. Two types of Vegetables - Daily </span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_vegetables"
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
                <span>4. A type of Greens - Daily</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_greens"
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
                <span> 5. A type of Fruit</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_fruits"
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
                <span> Do you all sit down and have one meal together as a family</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_havingMealTogether"
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
                <span> Does your diet include anything from the garden ? (vegetables, fruits, greens)</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_includingGardenHarvest"
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
                <span>Are you consuming too much sugar ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_tooMushSugar"
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
                <span>Do you eat too much oil ?</span>
              </Grid>
              <Grid item xs={2}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="h_tooMuchOil"
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
