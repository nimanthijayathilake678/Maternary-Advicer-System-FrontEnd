import React from "react";
import { Box, IconButton } from "@mui/material";
import Header from "../../Components/Header";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Upcomings from "../../Components/Upcomings";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import HappyFamily from "../../Assest/Lottie/HappyFamily.json";
import clinic from "../../Assest/Lottie/clinic.json";
import pregnant from "../../Assest/Lottie/pregnant.json";
import profile from "../../Assest/Lottie/profile.json";
import baby from "../../Assest/Lottie/baby.json";
import reports from "../../Assest/Lottie/reports.json";
import Lottie from "lottie-react";
import "../../css/Family/FamilyDash.css";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav";

const FamilyDashboard = () => {
  const navigate = useNavigate();
  const handleNavigation = (url) => {
    navigate(url);
  };
  return (
    <>
      <Nav/>
      <Box ml="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Hello" subtitle="Welcome to your dashboard" />

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
            <Lottie animationData={HappyFamily} />
          </div>
          <div className="cards">
            <div className="card-inner">
              <h6>MY PREGNANCIES</h6>
              <Lottie style={{ height: 100 }} animationData={pregnant} />
            </div>
          </div>
          <div className="cards">
            <div className="card-inner">
              <h6>MY BABIES</h6>
              <Lottie
                style={{ height: 90 }}
                animationData={baby}
                onClick={() => handleNavigation("/family/mybabies")}
              />
            </div>
          </div>
          <div className="cards">
            <div className="card-inner">
              <h6>MY PROFILE</h6>
              <Lottie style={{ height: 70 }} animationData={profile} />
            </div>
          </div>
          <div className="cards">
            <div className="card-inner">
              <h6>SUMMARY REPORTS</h6>
              <Lottie style={{ height: 100 }} animationData={reports} />
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
            <div sx={{ marginLeft:"20px"}}>
              <h6> UPCOMING CLINICS</h6>
            </div>

            <div>
              <Upcomings />
            </div>
          </div>
          <div>
            <h6>Grab Your Favourite Articles From Here!</h6>
            <Lottie animationData={clinic} />
          </div>
        </div>
      </Box>
    </>
  );
};
export default FamilyDashboard;
