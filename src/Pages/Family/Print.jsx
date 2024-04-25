import React, { useRef,useState} from "react";
import { useReactToPrint } from "react-to-print";
import LetterHeader from "../../Components/PrintEligibleFamilyDoc/LetterHeader";
import GeneralInfo from "../../Components/PrintEligibleFamilyDoc/GeneralInfo";
import LetterFooter from "../../Components/PrintEligibleFamilyDoc/LetterFooter";
import ShortHeader from "../../Components/PrintEligibleFamilyDoc/ShortHeader";
import PersonalInfo from "../../Components/PrintEligibleFamilyDoc/PersonalInfo";
import MedicalCondition from "../../Components/PrintEligibleFamilyDoc/MedicalCondition";
import OtherMedicalCondition from "../../Components/PrintEligibleFamilyDoc/OtherMedicalCondition";
import FamilyHealth from "../../Components/PrintEligibleFamilyDoc/FamilyHealth";
import SexualAndReproductive from "../../Components/PrintEligibleFamilyDoc/SexualAndReproductive";
import OtherSexualAndReproductive from "../../Components/PrintEligibleFamilyDoc/OtherSexualAndReproductive";
import FamilyNutrition from "../../Components/PrintEligibleFamilyDoc/FamilyNutrition";
import HousingAndWorkspace from "../../Components/PrintEligibleFamilyDoc/HousingAndWorkspace";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LifeStyle from "../../Components/PrintEligibleFamilyDoc/LifeStyle";
import Profile from "./Profile";
import DisplaySidebar from "../../Components/DisplaySidebar";
import { Button } from "@mui/material";

const Print = () => {
  const componentRef = useRef();

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "couple-data",
    onAfterPrint: () => setOpen(true),

  });

  return (
    <>
      <style>
        {`
          @page {
            size: A4;
            margin: 0;
          }
          .print-container {
            position: relative;
            min-height: 100vh;
          }
          .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: white;
            padding-bottom: 10mm; 
          }
          .header-wrapper {
            padding-top: 10mm; 
          }

          .shortHeader-wrapper {
            padding-top: 10mm; 
            padding-bottom: 10mm;;
          }
        `}
      </style>
      <div className="m-5">
      <Button variant= "contained" onClick={handlePrint} >Print here</Button>
      <div ref={componentRef} className="w-full , bg-white">
        {/* First two components */}
        <div className="print-container">
          <div className="header-wrapper">
            <LetterHeader />
          </div>
          <GeneralInfo sx={{ marginTop: 5 }} />
        </div>
        {/* Last two components */}
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <PersonalInfo sx={{ marginTop: 5 }} />
        </div>
        {/* Footer */}
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <MedicalCondition sx={{ marginTop: 5 }} />
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <OtherMedicalCondition />
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <SexualAndReproductive />
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <OtherSexualAndReproductive />
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <FamilyHealth />
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <FamilyNutrition />
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <LifeStyle />
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <HousingAndWorkspace/>
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        <div className="print-container">
          <div className="shortHeader-wrapper">
            <ShortHeader />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10mm" , color:"black"}}>
        <div style={{ textAlign: "left" }}>
          <div>--------------------------------------------------------</div>
          <div>Signature of Midwife</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div>--------------------------------------------------------</div>
          <div>Signature of MOH Doctor</div>
        </div>
      </div>
        </div>
        <div className="footer">
          <LetterFooter />
        </div>
        
      </div>
      </div>
      
      <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical:"top" , horizontal:"right" }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Document printed successfully!
      </Alert>
    </Snackbar>
    </>
  );
};

export default Print;
