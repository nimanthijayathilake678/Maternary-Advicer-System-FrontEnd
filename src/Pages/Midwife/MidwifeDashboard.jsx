import { Box, IconButton } from "@mui/material";
import Header from "../../Components/Header";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Upcomings from "../../Components/Upcomings";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import HappyFamily from "../../Assest/Lottie/HappyFamily.json";
import marriedCouple from "../../Assest/Lottie/marriedCouple.json";
import notification from "../../Assest/Lottie/notification.json";
import medicare from "../../Assest/Lottie/medicare.json";
import reports from "../../Assest/Lottie/reports.json";
import pregnant from "../../Assest/Lottie/pregnant.json";
import Lottie from "lottie-react";
import "../../css/Midwife/MidwifeDash.css";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DisplaySidebar from "../../Components/DisplaySidebar";

const MidwifeDashboard = () => {
  const authContext = useAuth();
  const navigate = useNavigate();
  const handleNavigation = (url) => {
    navigate(url);
  };
  return (
    <div style={{display:"flex"}}>
      <div>
        <DisplaySidebar/>
      </div>
      <div>
      <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Hello - midwife" subtitle="Welcome to your dashboard" />

        {/* SEARCH BOX */}
        <Box
          display="flex"
          bgcolor={"#e4e5e2"}
          borderRadius={"3px"}
          marginRight={"20px"}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"></InputBase>
          <IconButton type="button" sx={{ p: 1 }}>
            <Search />
          </IconButton>
        </Box>
      </Box>

      {/* Main boxes */}
      <div className="main-cards">
        <div>
          <Lottie animationData={medicare} />
        </div>

        <div className="cards">
          <div className="card-inner">
            <h6 onClick={()=>handleNavigation("/midwife/eligibleFamilies/createAccountForNewCouple")}>MARRIED COUPLE REGISTRATION</h6>
            <Lottie style={{ height: 110 }} animationData={marriedCouple}
            onClick={()=>handleNavigation("/midwife/eligibleFamilies/createAccountForNewCouple")} />
          </div>
        </div>

        <div className="cards">
          <div className="card-inner">
            <h6 onClick={() => handleNavigation("/midwife/pregnancyRegistration")} >PREGNANCY REGISTRATION</h6>
            <Lottie style={{ height: 100 }} 
            animationData={pregnant}
            onClick={() => handleNavigation("/midwife/pregnancyRegistration")} />
          </div>
        </div>
        
        <div className="cards">
          <div className="card-inner">
            <h6 onClick={() => handleNavigation("/midwife/eligibleFamilies")}>ELIGIBLE FAMILIES</h6>
            <Lottie style={{ height: 110 }} animationData={HappyFamily} onClick={() => handleNavigation("/midwife/eligibleFamilies")} />
          </div>
        </div>
        <div className="cards">
          <div className="card-inner">
            <h8>REGISTERED PREGNANT MOTHERS</h8>
            <Lottie style={{ height: 120 }} animationData={pregnant} />
          </div>
        </div>

        <div className="cards">
          <div className="card-inner">
            <h8>REGISTERD BABIES</h8>
            <Lottie
              style={{ height: 120 }}
              animationData={pregnant}
              onClick={() => handleNavigation("/midwife/registerdbabies")}
            />
          </div>
        </div>
      </div>

      <div className="second">
        <div className="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
        <div className="upcomingClinics">
          <div marginLeft="20px">
            <h3> Upcoming Clinics</h3>
          </div>
          <div>
            <Upcomings />
          </div>
        </div>

        <div className="cards">
          <div className="card-inner">
            <h8>NOTIFICATION HANDLING</h8>
            <Lottie style={{ height: 90 }} animationData={notification} />
          </div>
        </div>
        <div className="cards">
          <div className="card-inner">
            <h8>SUMMARY REPORTS</h8>
            <Lottie style={{ height: 100 }} animationData={reports} />
          </div>
        </div>
      </div>
    </Box>
      </div>

    </div>
    
  );
};
export default MidwifeDashboard;
