import React, { useState, useEffect } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import Header from "../../../Components/Header";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Upcomings from "../../../Components/Upcomings";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import Lottie from "lottie-react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Link } from "react-router-dom";
import "../../../css/Baby/BabyDash.css";
import { useNavigate } from "react-router-dom";
import BabyGirl from "../../../Assest/Lottie/BabyGirl.json";
import BabyItem from "../../../Assest/Lottie/BabyItem.json";
import baby from "../../../Assest/Lottie/baby.json";
import clinic from "../../../Assest/Lottie/clinic.json";
import profile from "../../../Assest/Lottie/profile.json";
import reports from "../../../Assest/Lottie/reports.json";
import notification from "../../../Assest/Lottie/notification.json";
import baby3 from "../../../Assest/Lottie/baby3.json";
import baby2 from "../../../Assest/Lottie/baby2.json";
import UpcomingsBaby from "../../../Components/BabyProfileComponents/UpcommingsBaby";
import babyDash from "../../../Assest/Lottie/BabyDash.json";
import babyprofile from "../../../Assest/Lottie/babyProfile.json";
import medicare from "../../../Assest/Lottie/medicare.json";
import Nav from "../../../Components/Nav";
import SideBar from "../../../Components/SideBar";
import DisplaySidebar from "../../../Components/DisplaySidebar";
import { useParams } from "react-router-dom";
import SpecialMsg from "../../../Components/SpecialMsg";
const BabyDashboard = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("one");
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNavigation = (url) => {
    navigate(url);
  };
  const handleNavigationClick = (id) => {
    console.log(`ViewProfile button clicked for row with id ${id}`);
    navigate(`/family/babyDashboard/babyProfile/${id}`);
  };
  const handleNavigationClickImmune = (id) => {
    navigate(`/family/babyDashboard/immunization/${id}`);
  };
  const handleNavigationClickNutrients = (id) => {
    navigate(`/family/babyDashboard/nutrients/${id}`);
  };
  const handleNavigationClickNewBornHealth = (id) => {
    navigate(`/family/babyDashboard/babyhealth/${id}`);
  };
  const handleNavigationClickSpecialNote = (id) => {
    navigate(`/family/babyDashboard/babynote/${id}`);
  };
  return (
    <>
      <Nav />
      <Box>
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Hello" subtitle="Welcome to your dashboard" />

          {/* SEARCH BOX */}
          {/* <Box
            display="flex"
            bgcolor={"#e4e5e2"}
            borderRadius={"3px"}
            marginRight={"20px"}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"></InputBase>
            <IconButton type="button" sx={{ p: 1 }}>
              <Search />
            </IconButton>
          </Box> */}
        </Box>

        {/* Main content */}
        <Grid container style={{ margin: "15px 0", justifyContent: "center" }}>
          {/* Lottie Animation */}
          <Grid item xs={12} sm={3}>
            <Lottie style={{ height: 280 }} animationData={baby} />
          </Grid>

          {/* Grid items */}
          <Grid item xs={12} sm={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <div className="cards">
                  <div className="card-inner">
                    <h6 onClick={() => handleNavigationClick(id)}>
                      BASIC INFORMATION
                    </h6>
                    <Lottie
                      style={{ height: 60 }}
                      animationData={profile}
                      onClick={() => handleNavigationClick(id)}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className="cards">
                  <div className="card-inner">
                    <h6 onClick={() => handleNavigationClickImmune(id)}>
                      BABY IMMUNIZATION
                    </h6>
                    <Lottie
                      style={{ height: 60 }}
                      animationData={reports}
                      onClick={() => handleNavigationClickImmune(id)}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className="cards">
                  <div className="card-inner">
                    <h6 onClick={() => handleNavigationClickNutrients(id)}>
                      BABY NUTRIENTS
                    </h6>
                    <Lottie
                      style={{ height: 60 }}
                      animationData={baby2}
                      onClick={() => handleNavigationClickNutrients(id)}
                    />
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={3}>
                <div className="cards">
                  <div className="card-inner">
                    <h6
                      onClick={() =>
                        handleNavigation("/family/babyDashboard/weight")
                      }
                    >
                      BABY GROWTH
                    </h6>
                    <Lottie
                      style={{ height: 60 }}
                      animationData={baby3}
                      onClick={() =>
                        handleNavigation("/family/babyDashboard/weight")
                      }
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className="cards">
                  <div className="card-inner">
                    <h6 onClick={() => handleNavigationClickNewBornHealth(id)}>
                      BABY HEALTH
                    </h6>
                    <Lottie
                      style={{ height: 60 }}
                      animationData={BabyItem}
                      onClick={() => handleNavigationClickNewBornHealth(id)}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <div className="cards">
                  <div className="card-inner">
                    <h6 onClick={() => handleNavigationClickSpecialNote(id)}>
                      SPECIAL NOTES
                    </h6>
                    <Lottie
                      style={{ height: 60 }}
                      animationData={notification}
                      onClick={() => handleNavigationClickSpecialNote(id)}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Second row */}
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          {/* Calendar */}
          <Grid item xs={12} sm={3}>
            <div className="calendar">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </Grid>

          {/* Upcoming Clinics */}
          <Grid item xs={12} sm={5}>
            <SpecialMsg />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Lottie style={{ height: 280 }} animationData={clinic} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BabyDashboard;
