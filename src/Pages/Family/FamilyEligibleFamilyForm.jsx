import {useState} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import Theme from "../../Components/Theme";
import GeneralInformation from "../../Components/EligibleFamilyForms/GeneralInformation";
import PersonalInformation from "../../Components/EligibleFamilyForms/PersonalInformation";
import DetailsOfMedicalConditions from "../../Components/EligibleFamilyForms/DetailsOfMedicalConditions";
import SexualAndReproductiveHealth from "../../Components/EligibleFamilyForms/SexualAndReproductiveHealth";
import FamilyHealthInformation from "../../Components/EligibleFamilyForms/FamilyHealthInformation";
import FamilyNutrition from "../../Components/EligibleFamilyForms/FamilyNutrition";
import Footer from "../../Components/Footer";
import DisplaySidebar from "../../Components/DisplaySidebar";
import useAuth from "../../Hooks/useAuth";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { apiClient } from "../../API/ApiServer";
import {useNavigate} from "react-router-dom";



export default function FamilyEligibleFamilyForm() {
  const [activeStep, setActiveStep] = useState(0);
  const theme = Theme();
  const auth = useAuth();
  const navigate = useNavigate();
  const handleNext = async(url,method,data,user,state) => {
    
    try{
      const response = await apiClient[method](url+user,data)
      if(response.status===200 || response.status===201){
        if(state){
          const res = await apiClient.put(`/newuser/${user}`,{...auth?.user , "familyFlag":true})
          if(response.status===200){
            navigate("/family")
          }
          else{
            setOpen(true);
          }
         
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }else{
        setOpen(true);
      }
    }catch(err){
      console.error(err);
      setOpen(true);

    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
  {
    label: "General Information",
    description: <GeneralInformation handleNext={handleNext} />,
 },
  {
    label: "Personal Information",
    description: <PersonalInformation  handleNext={handleNext} handleBack={handleBack}/>,
    // url:"/personalInfo/"
  },
  {
    label: "Details of Medical Conditions",
    description: <DetailsOfMedicalConditions  handleNext={handleNext} handleBack={handleBack} />,
    // url:"/CoupleMedicalConditions/"
  },

  // {
  //   label: "Sexual And Reproductive Health",
  //   description: <SexualAndReproductiveHealth  handleNext={handleNext} handleBack={handleBack} />,
  //   // url:"/sexualAndReproductiveHealthInfo/"
  // },
  {
    label: "Family Health Information",
    description: <FamilyHealthInformation handleNext={handleNext} handleBack={handleBack}/>,
    // url:"/familyHealth/"
  },
  {
    label: "Family Nutrition",
    description: <FamilyNutrition  handleNext={handleNext} handleBack={handleBack}/>,
    // url:"/familyNutrition/"
  
  },
  // {
  //   label: "Life Style",
  //   description: <LifeStyle />,
  //   // url:"/lifeStyle/"
  // },
  // {
  //   label: "Housing And Workspace",
  //   description: <HousingAndWorkspace />,
  //   // url:"/housingAndWorkspace/"
  // },
];

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};

  return (
    <>
      <Box style={{ display: "flex" }}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1 },
            "& .MuiButton-root": { m: 1 },
            flexGrow: 1,
            backgroundColor:"white"
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          flexDirection="column"
        >
          <Grid container spacing={2} sx={{ width: "100%", margin: "auto" }}>
            {/* Second Grid Item: Registration Form */}
            <Grid item xs={10}>
              <Paper
                sx={{
                  marginLeft: 8,
                  marginTop: 3,
                  padding: 2,
                  backgroundColor: "#fff",
                }}
              >
                <Stepper
                  activeStep={activeStep}
                  orientation="vertical"
                  sx={{
                    "& .MuiStepLabel-root .Mui-completed .MuiStepIcon-root": {
                      color: theme.palette.primary.main,
                    },
                    "& .Mui-active .MuiStepLabel-root .MuiStepIcon-root": {
                      color: theme.palette.secondary.main,
                    },
                    width: "100%",
                  }}
                >
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        style={{ color: theme.palette.primary.main }}
                      >
                        {step.label}
                      </StepLabel>
                      <StepContent>
                        {step.description}
                        
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 4 }}>
                    {/* <Typography>
                 Baby Registration Completed- you&apos;re finished
                </Typography> */}
                    <Alert severity="success">
                      <AlertTitle>Success</AlertTitle>
                      All your information are saved Successfully!! ! <br></br>
                      <ChildFriendlyIcon />
                    </Alert>
                  </Paper>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
      <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical:"top" , horizontal:"right" }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        An error occured! Try again...      
      </Alert>
    </Snackbar>
    </>

  );
}
