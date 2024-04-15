import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import SuccessAlert from "../../Components/SuccessAlert";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import Theme from "../../Components/Theme";
import { StepIconProps } from "@mui/material/StepIcon";
import GeneralInformation from "../../Components/EligibleFamilyForms/GeneralInformation";
import PersonalInformation from "../../Components/EligibleFamilyForms/PersonalInformation";
import DetailsOfMedicalConditions from "../../Components/EligibleFamilyForms/DetailsOfMedicalConditions";
import SexualAndReproductiveHealth from "../../Components/EligibleFamilyForms/SexualAndReproductiveHealth";
import FamilyHealthInformation from "../../Components/EligibleFamilyForms/FamilyHealthInformation";
import FamilyNutrition from "../../Components/EligibleFamilyForms/FamilyNutrition";
import LifeStyle from "../../Components/EligibleFamilyForms/LifeStyle";
import HousingAndWorkspace from "../../Components/EligibleFamilyForms/HousingAndWorkspace";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import DisplaySidebar from "../../Components/DisplaySidebar";

function CustomStepIcon(props) {
  const { active, completed, icon } = props;

  return (
    <div
      style={{
        fontSize: 22,
        color: active
          ? theme.palette.primary.main
          : completed
          ? theme.palette.primary.main
          : "gray",
      }}
    >
      {icon}
    </div>
  );
}

const theme = Theme();

const steps = [
  {
    label: "General Information",
    description: <GeneralInformation />,
  },
  {
    label: "Personal Information",
    description: <PersonalInformation />,
  },
  {
    label: "Details of Medical Conditions",
    description: <DetailsOfMedicalConditions />,
  },

  {
    label: "Sexual And Reproductive Health",
    description: <SexualAndReproductiveHealth />,
  },
  {
    label: "Family Health Information",
    description: <FamilyHealthInformation />,
  },
  {
    label: "Family Nutrition",
    description: <FamilyNutrition />,
  },
  {
    label: "Life Style",
    description: <LifeStyle />,
  },
  {
    label: "Housing And Workspace",
    description: <HousingAndWorkspace />,
  },
];

export default function FamilyEligibleFamilyForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
    <div style={{ display: 'flex' }}>
      <div><DisplaySidebar/></div>
            
      <div className="bg-white ">
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1 },
            "& .MuiButton-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
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
                        optional={
                          index === 4 ? (
                            <Typography variant="caption">Last step</Typography>
                          ) : null
                        }
                        style={{ color: theme.palette.primary.main }}
                      >
                        {step.label}
                      </StepLabel>
                      <StepContent>
                        {step.description}
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={handleNext}
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
                              {index === steps.length - 1
                                ? "Submit"
                                : "Continue"}
                            </Button>
                            <Button
                              disabled={index === 0}
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
                      Baby Registration is Successfull ! <br></br>
                      <ChildFriendlyIcon />
                    </Alert>
                  </Paper>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
      </div>

      <Footer />
    </>
  );
}
