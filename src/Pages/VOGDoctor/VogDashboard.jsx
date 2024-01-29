import React from "react";
import "../../css/MOHAdmin/MOHDashboard.css";
import { NavLink } from "react-router-dom";
import medicare from "../../assets/medicare.json";
import DBMS from "../../assets/DBMS.json";
import midwifeReg from "../../assets/midwieReg.json";
import notification from "../../assets/notification.json";
import reports from "../../assets/reports.json";
import Lottie from "lottie-react";
import Calendar from "../../componenets/Calendar";

function VogDashboard() {
  return (
    <div>
      <div className="main-title">
        <div>
          <h2>Hello-VOG Doctor</h2>
        </div>
        <div>
          <h4>Welcome to your Dashboard</h4>
        </div>
      </div>

      <div className="main-cards">
        <NavLink to="/vogpersonal" className="card">
          <div className="card-inner">
            <h3>Personal Information</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={DBMS} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/vogpatients" className="card">
          <div className="card-inner">
            <h3>Patients Details</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={midwifeReg} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/vogmessages" className="card">
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

export default VogDashboard;
