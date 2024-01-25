import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const steps = [
  {
    label: "General Information",
    description: (
      <div>
        <form>
          <div className="flex w-full">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            ></Box>

            <div className="pt-3 w-full my-4 flex">
              <div className="w-6/12 ">
                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Division of Reginal Ministry of Health Services"
                  type="text"
                  style={{ marginBottom: "1rem" }}
                />

                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Reference No"
                  type="text"
                  style={{ marginBottom: "1rem" }}
                />

                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Reference No"
                  type="text"
                  style={{ marginBottom: "1rem" }}
                />

                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Email"
                  type="email"
                  style={{ marginBottom: "1rem" }}
                />
              </div>

              <div className="px-2 w-6/12">
                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Division of Medical Officer"
                  type="text"
                  style={{ marginBottom: "1rem" }}
                />

                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Wife's name"
                  type="text"
                  style={{ marginBottom: "1rem" }}
                />

                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Telephone No"
                  type="text"
                  style={{ marginBottom: "1rem" }}
                />

                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Address"
                  style={{ marginBottom: "1rem" }}
                />
              </div>
            </div>
          </div>
          
        </form>
      </div>
    ),
  },
  {
    label: "Personal Information",
    description:(<div>h</div>),
  },
  {
    label: "Medical Condition Details",
    description:( `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`),
  },

  {
    label: "Sexual And Reproductive Health",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },

  {
    label: "Family Health Information",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },

  {
    label: "Family Nutrition",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },

  {
    label: "Life Style",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },

  {
    label: "Housing And Workspace",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
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
    <div className="px-5  pt-5 w-3/4">
      <div>
        <span className=" text-xl  text-[#2A777C] text-center font-bold ">
          Eligible Families
        </span>
      </div>

      <div className="mt-3">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
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
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
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
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </div>
  );
}
