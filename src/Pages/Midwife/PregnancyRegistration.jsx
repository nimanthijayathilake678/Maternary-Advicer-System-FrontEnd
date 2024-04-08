import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Box, Button } from '@mui/material';
import Header from '../../Components/Header';
import PregGeneralInformationForm from '../../Components/PregnancyRegistrationForms/PregGeneralInformationForm';
import PregPersonalInformationForm from '../../Components/PregnancyRegistrationForms/PregPersonalInformationForm';
import PresentObstetricForm from '../../Components/PregnancyRegistrationForms/PresentObstetricForm';
import PregMedicalConditionForm from '../../Components/PregnancyRegistrationForms/PregMedicalConditionForm';
import PregFamilyHealthInformation from '../../Components/PregnancyRegistrationForms/PregFamilyHealthInformation';

function PregnancyRegistration() {
    const verticalSteps = [
      {
        label: 'General Information',
        substeps: [
          {component: <PregGeneralInformationForm /> }
        ]
      },
      {
        label: 'Personal Information',
        substeps: [
          { topic: "Wife's Information", component: <PregPersonalInformationForm/> },
          { topic: "Husband's Information", component: <PregPersonalInformationForm/> }
        ]
      },
      {
        label: 'Present Obstetric History',
        substeps: [
          { component: <PresentObstetricForm /> }
        ]
      },
      {
        label: 'Detals of Medical Conditions',
        substeps: [
          {  component: <PregMedicalConditionForm /> }
        ]
      },
      {
        label: 'Family Health Information',
        substeps: [
          {component: <PregFamilyHealthInformation /> }
        ]
      },
    ];

    const [activeStep, setActiveStep] = React.useState(0);
    const [activeSubstep, setActiveSubstep] = React.useState(0);

    const handleNext = () => {
      if (activeSubstep < verticalSteps[activeStep].substeps.length - 1) {
        setActiveSubstep((prevActiveSubstep) => prevActiveSubstep + 1);
      } else {
        setActiveSubstep(0);
        if (activeStep < verticalSteps.length - 1) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
      }
    };

    const handleBack = () => {
      if (activeSubstep > 0) {
        setActiveSubstep((prevActiveSubstep) => prevActiveSubstep - 1);
      } else {
        if (activeStep > 0) {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
          setActiveSubstep(verticalSteps[activeStep - 1].substeps.length - 1);
        }
      }
    };
    
    const isLastStep = activeStep === verticalSteps.length - 1 && activeSubstep === verticalSteps[activeStep].substeps.length - 1;

    return (
        
    <Box m={5}>
            {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Pregnancy Registration Form" />
        </Box>
        
      <Stepper orientation="vertical" activeStep={activeStep}>
        {verticalSteps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              {step.substeps.map((substep, subIndex) => (
                <Box key={subIndex}>
                  <StepLabel>{substep.topic}</StepLabel>
                  {substep.component}
                </Box>
              ))}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mr: 1 }}
                >
                  {isLastStep ? 'Finish' : 'Next'}
                </Button>
                <Button
                  disabled={activeStep === 0 && activeSubstep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      </Box>
    );
  }
  
export default PregnancyRegistration;
