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
import BabyRegistrationForm2 from "./BabyRegistrationForm2";
import BabyRegistrationForm3 from "./BabyRegistrationForm3";
import BabyRegistrationForm4 from "./BabyRegistrationForm4";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import Theme from "../../../../../Components/Theme";
import SideBar from "../../../../../Components/SideBar";
import DisplaySidebar from "../../../../../Components/DisplaySidebar";
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
    label: "Baby Information",
    description: <BabyRegistrationForm2 />,
  },
  {
    label: "Neonatal Examination",
    description: <BabyRegistrationForm3 />,
  },
  {
    label: "Reasons For Special Care",
    description: <BabyRegistrationForm4 />,
  },
];

export default function BabyRegistrationStepper() {
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
      width="100%"
    >
      <Grid container sx={{ width: "100%", margin: "auto", height: "100%" }}>
        {/* Sidebar */}
        <Grid item xs={3}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              maxWidth: "200px",
              height: "100%",
            }}
          >
            <DisplaySidebar />
          </Box>
        </Grid>
        {/* Main Content */}
        <Grid
          item
          xs={9}
          paddingTop={"100px"}
          paddingRight={"200px"}
          sx={{ width: "100%" }}
        >
          <div>
            <span className="text-xl text-[#2A777C] text-center font-bold">
              Register New Born
            </span>
          </div>

          <Paper sx={{ padding: 4 }}>
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
                width: 800,
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
                    <Typography>{step.description}</Typography>
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
                          {index === steps.length - 1 ? "Submit" : "Continue"}
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
  );
}
