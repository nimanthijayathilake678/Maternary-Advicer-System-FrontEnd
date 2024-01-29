import React from "react";
import "../../css/MOHAdmin/MOHDashboard.css";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaUsers,
} from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";


function MOHDashboard() {
  return (
    <div>
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <NavLink to="/register" className="card">
          <div className="card-inner">
            <h3>Register Users</h3>
            <div>
              <FaUserAlt />
            </div>
          </div>
        </NavLink>

        <NavLink to="/view" className="card">
          <div className="card-inner">
            <h3>View Users</h3>
            <div>
             <FaSearch />
            </div>
          </div>
        </NavLink>

        <NavLink to="/summary" className="card">
          <div className="card-inner">
            <h3>Summary Report</h3>
            <div>
              <FaRegChartBar />
            </div>
          </div>
        </NavLink>

        <NavLink to="/clinic" className="card">
          <div className="card-inner">
            <h3>Clinic Schedule</h3>
            <div>
              <FaUsers />
            </div>
          </div>
        </NavLink>

        <NavLink to="/messages" className="card">
          <div className="card-inner">
            <h3>Messages</h3>
            <div>
              <FaCommentAlt />
            </div>
          </div>
        </NavLink>
      </div>
      <div className="dashbottom">
        <div className="calender">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div><div >
          
        </div>
      </div>
      
    </div>
  );
}

export default MOHDashboard;
