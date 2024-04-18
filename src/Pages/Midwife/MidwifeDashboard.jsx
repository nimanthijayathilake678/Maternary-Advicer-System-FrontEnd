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
import marriedCouple from "../../Assest/Lottie/marriedCouple.json";
import reports from "../../Assest/Lottie/reports.json";
import pregnant from "../../Assest/Lottie/pregnant.json";
import Lottie from "lottie-react";
import "../../css/Midwife/MidwifeDash.css";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav";
import DisplaySidebar from "../../Components/DisplaySidebar";
import { useParams } from "react-router-dom";

const MidwifeDashboard = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("one");
  const { id } = useParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNavigation = (url) => {
    navigate(url);
  };

  const handleNavigationClickBaby = (id) => {
    navigate(`/midwife/registerdbabies`);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <DisplaySidebar />
      </div>
      <div>
        <Box m="20px">
          {/* HEADER */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header
              title="Hello - midwife"
              subtitle="Welcome to your dashboard"
            />

            {/* SEARCH BOX */}
            <Box
              display="flex"
              bgcolor={"#e4e5e2"}
              borderRadius={"3px"}
              marginRight={"20px"}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
              ></InputBase>
              <IconButton type="button" sx={{ p: 1 }}>
                <Search />
              </IconButton>
            </Box>
          </Box>

          {/* Main boxes */}
          <div className="main-cards">
            
            <div className="cards">
              <div className="card-inner">
                <h6
                  onClick={() =>
                    handleNavigation(
                      "/midwife/eligibleFamilies/createAccountForNewCouple"
                    )
                  }
                >
                  MARRIED COUPLE REGISTRATION
                </h6>
                <Lottie
                  style={{ height: 70 }}
                  animationData={marriedCouple}
                  onClick={() =>
                    handleNavigation(
                      "/midwife/eligibleFamilies/createAccountForNewCouple"
                    )
                  }
                />
              </div>
            </div>

            <div className="cards">
              <div className="card-inner">
                <h6 onClick={() =>
                    handleNavigation("/midwife/pregnancyRegistration")}
                    >
                      PREGNANCY REGISTRATION</h6>
                <Lottie
                  style={{ height: 70 }}
                  animationData={pregnant}
                  onClick={() =>
                    handleNavigation("/midwife/pregnancyRegistration")
                  }
                />
              </div>
            </div>

            <div className="cards">
              <div className="card-inner">
                <h6
                  onClick={() => handleNavigation("/midwife/eligibleFamilies")}
                >
                  ELIGIBLE FAMILIES
                </h6>
                <Lottie
                  style={{ height: 80 }}
                  animationData={HappyFamily}
                  onClick={() => handleNavigation("/midwife/eligibleFamilies")}
                />
              </div>
            </div>
            <div className="cards">
              <div className="card-inner">
                <h6>REGISTERED PREGNANT MOTHERS</h6>
                <Lottie style={{ height:70 }} animationData={pregnant} />
              </div>
            </div>

            <div className="cards">
              <div className="card-inner">
                <h6 onClick={() => handleNavigationClickBaby(id)}>
                  REGISTERD BABIES
                </h6>
                <Lottie
                  style={{ height: 70 }}
                  animationData={pregnant}
                  onClick={() => handleNavigationClickBaby(id)}
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
                <h6>SUMMARY REPORTS</h6>
                <Lottie style={{ height: 70 }} animationData={reports} />
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};
export default MidwifeDashboard;
