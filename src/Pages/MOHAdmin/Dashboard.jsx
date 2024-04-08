import React from "react";
import "../../css/MOHAdmin/MOHDashboard.css";
import { Box, Grid, IconButton } from "@mui/material";
import Header from "../../Components/Header";
import { Search } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import medicare from "../../Assest/Lottie/medicare.json";
import DBMS from "../../Assest/Lottie/DBMS.json";
import midwifeReg from "../../Assest/Lottie/midwieReg.json";
import notification from "../../Assest/Lottie/notification.json";
import reports from "../../Assest/Lottie/reports.json";
import Lottie from "lottie-react";
import Calendar from "../../Components/Calendar";
import Nav from "../../Components/Nav";
import InputBase from "@mui/material/InputBase";

function MOHDashboard() {
  return (
    <>
      <Nav />
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
        <div>
          <div className="main-cards">
            <NavLink to="/moh/register" className="card">
              <div className="card-inner">
                <h3>Register Users</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={DBMS} />
                </div>
              </div>
            </NavLink>

            <NavLink to="/moh/view" className="card">
              <div className="card-inner">
                <h3>View Users</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={midwifeReg} />
                </div>
              </div>
            </NavLink>

            <NavLink to="/moh/summary" className="card">
              <div className="card-inner">
                <h3>Summary Report</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={reports} />
                </div>
              </div>
            </NavLink>

            <NavLink to="/moh/clinic" className="card">
              <div className="card-inner">
                <h3>Clinic Schedule</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={medicare} />
                </div>
              </div>
            </NavLink>

            <NavLink to="/moh/messages" className="card">
              <div className="card-inner">
                <h3>Messages</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={notification} />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="dashbottom">
            <div className="calender">
              <Calendar />
            </div>
            <div></div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default MOHDashboard;
