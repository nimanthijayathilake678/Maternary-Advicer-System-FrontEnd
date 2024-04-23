import React from "react";
import "../../css/MOHAdmin/MOHDashboard.css";
import { NavLink } from "react-router-dom";
import medicare from "../../Assest/Lottie/medicare.json";
import DBMS from "../../Assest/Lottie/DBMS.json";
import midwifeReg from "../../Assest/Lottie/midwieReg.json";
import notification from "../../Assest/Lottie/notification.json";
import baby from "../../Assest/Lottie/baby.json";
import vog from "../../Assest/Lottie/vogdoc.json";
import baby2 from "../../Assest/Lottie/baby2.json";
import babyCare from "../../Assest/Lottie/babyCare.json";
import reports from "../../Assest/Lottie/reports.json";
import Lottie from "lottie-react";
import Calendar from "../../Components/Calendar";
import VogRegisterdBabies from "../VOGDoctor/VogRegisterdBabies";
function VogDashboard() {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div className="main-title">
        <div>
          <h2>Hello-VOG Doctor</h2>
        </div>
        <div>
          <h4>Welcome to your Dashboard</h4>
        </div>
      </div>

      <div className="main-cards">
        <NavLink to="/vog/personal_Info" className="card">
          <div className="card-inner">
            <h3>Personal Information</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={DBMS} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/vog/patient_history" className="card">
          <div className="card-inner">
            <h3>Patients Details</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={midwifeReg} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/vog/newbaby" className="card">
          <div className="card-inner">
            <h3>New Baby Registration</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={baby} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/vog/add_patients_details" className="card">
          <div className="card-inner">
            <h3>Add Patients Details</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={notification} />
            </div>
          </div>
        </NavLink>

        <NavLink to="/vog/newbabyhealth" className="card">
          <div className="card-inner">
            <h3>New Born Helath records</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={baby2} />
            </div>
          </div>
        </NavLink>
        <NavLink to="/vog/show_registerd_babies" className="card">
          <div className="card-inner">
            <h3>Registerd Babies</h3>
            <div>
              <Lottie style={{ height: 80 }} animationData={babyCare} />
            </div>
          </div>
        </NavLink>
      </div>

      <div className="dashbottom">
        <div className="calender">
          <Calendar />
        </div>
        
        
      </div>
    </div>
  );
}

export default VogDashboard;
