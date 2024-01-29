import React from "react";
import "../../css/MOHAdmin/MOHDashboard.css";
import { NavLink } from "react-router-dom";
import medicare from "../../Assest/medicare.json";
import DBMS from "../../Assest/DBMS.json";
import midwifeReg from "../../Assest/midwieReg.json";
import notification from "../../Assest/notification.json";
import reports from "../../Assest/reports.json";
import Lottie from "lottie-react";
import Calendar from "../../Componenets/Calendar";

function MOHDashboard() {
  return (
    <div>
      <div className="main-title">
        <div>
          <h2>Hello-Admin</h2>
        </div>
        <div>
          <h4>Welcome to your Dashboard</h4>
        </div>
      </div>

      <div className="main-cards">
        <NavLink to="/register" className="card">
          <div className="card-inner">
            <h3>Register Users</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={DBMS} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/view" className="card">
          <div className="card-inner">
            <h3>View Users</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={midwifeReg} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/summary" className="card">
          <div className="card-inner">
            <h3>Summary Report</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={reports} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/clinic" className="card">
          <div className="card-inner">
            <h3>Clinic Schedule</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={medicare} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/messages" className="card">
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
  );
}

export default MOHDashboard;
