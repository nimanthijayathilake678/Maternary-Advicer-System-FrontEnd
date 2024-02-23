import React from "react";
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

const BabyDashboard = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <Box>
      {/* HEADER */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Header title="Hello - Baby" subtitle="Welcome to your dashboard" />
        </Grid>

        {/* SEARCH BOX */}
        <Grid item>
          <Box display="flex" bgcolor={"#e4e5e2"} borderRadius={"3px"}>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"></InputBase>
            <IconButton type="button" sx={{ p: 1 }}>
              <Search />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Main content */}
      <Grid container style={{ margin: "15px 0", justifyContent: "center" }}>
        {/* Lottie Animation */}
        <Grid item xs={12} sm={3}>
          <Lottie style={{ height: 280 }} animationData={baby2} />
        </Grid>

        {/* Grid items */}
        <Grid item xs={12} sm={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <div className="cards">
                <div className="card-inner">
                  <h8
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/babyProfile")
                    }
                  >
                    BASIC INFORMATION
                  </h8>
                  <Lottie
                    style={{ height: 100 }}
                    animationData={profile}
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/babyProfile")
                    }
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="cards">
                <div className="card-inner">
                  <h8
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/immunization")
                    }
                  >
                    BABY IMMUNIZATION
                  </h8>
                  <Lottie
                    style={{ height: 100 }}
                    animationData={reports}
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/immunization")
                    }
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="cards">
                <div className="card-inner">
                  <h8
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/nutrients")
                    }
                  >
                    BABY NUTRIENTS
                  </h8>
                  <Lottie
                    style={{ height: 100 }}
                    animationData={baby}
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/nutrients")
                    }
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="cards">
                <div className="card-inner">
                  <h8
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/babyProfile")
                    }
                  >
                    BABY SPECIAL CARE
                  </h8>
                  <Lottie
                    style={{ height: 100 }}
                    animationData={BabyItem}
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/babyProfile")
                    }
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="cards">
                <div className="card-inner">
                  <h8
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/weight")
                    }
                  >
                    BABY GROWTH
                  </h8>
                  <Lottie
                    style={{ height: 80 }}
                    animationData={baby3}
                    onClick={() =>
                      handleNavigation("/family/babyDashboard/weight")
                    }
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
        <Grid item xs={12} sm={4}>
          <div className="calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
        </Grid>

        {/* Upcoming Clinics */}
        <Grid item xs={12} sm={5}>
          <div className="upcomingClinics">
            <div style={{ marginLeft: "20px" }}>
              <h3>Upcoming Clinics</h3>
            </div>
            <div>
              <UpcomingsBaby />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BabyDashboard;
