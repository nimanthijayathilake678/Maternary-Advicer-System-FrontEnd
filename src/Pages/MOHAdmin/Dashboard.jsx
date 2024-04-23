import React, { useEffect, useState } from "react";
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
import clinicDateViewer from "../../Components/ClinicDateViewer";
import axios from "axios";
import { getClinicDates } from "../../Services/ClinicSchedule";
import SuccessAlert from "../../Components/SuccessMsg";
import admin from "../../Assest/Lottie/adminPanel.json";
import { FaTrashAlt } from "react-icons/fa";

function MOHDashboard() {
  const dummyClinicDates = [
    {
      id: 1,
      area: "Mathara",
      description: "General checkup",
      date: "2024-04-25",
      starttime: "09:00 AM",
    },
    {
      id: 2,
      area: "Colombo",
      description: "Vaccination",
      date: "2024-04-26",
      starttime: "10:30 AM",
    },
    {
      id: 3,
      area: "Galle",
      description: "Dental checkup",
      date: "2024-04-27",
      starttime: "02:00 PM",
    },
    // Add more dummy data as needed
  ];

  const [clinicDates, setclinicDates] = useState(dummyClinicDates);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  //const [search, setSearch] = useState("");

  useEffect(() => {
    loadClinicDates();
  }, []);

  const loadClinicDates = async () => {
    try {
      const response = await getClinicDates();

      if (response.status === 302) {
        console.log("success");
        setShowSuccessAlert(true);
      }
      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }

    const result = await axios.get("http://localhost:8080/clinicDate", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setclinicDates(result.data);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/clinicDate/delete/${id}`);
    loadClinicDates();
  };

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

            <NavLink to="/moh/clinic" className="card">
              <div className="card-inner">
                <h3>Clinic Schedule</h3>
                <div>
                  <Lottie style={{ height: 80 }} animationData={medicare} />
                </div>
              </div>
            </NavLink>
            
          </div>
          <div className="dashbottom">
            <div className="calender">
              <Calendar />
            </div>
            <div className="table-clinicDate">
              <div style={{color:"#fff" , fontSize:"25px", paddingLeft:"160px"}}>
                <h1>Clinic Details</h1>
              </div>
              <table className="table table-bordered table-hover shadow">
                <thead>
                  <tr className="text-center">
                    <th className="th1">ID</th>
                    <th className="th1">Area</th>
                    <th className="th1">Description</th>
                    <th className="th1">Date</th>
                    <th className="th1">Start Time</th>
                    <th className="th1" colSpan="3">Actions</th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  {clinicDates.map((clinicdate, index) => (
                    <tr key={clinicdate.id}>
                      <th className="th1" scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td className="th1">{clinicdate.area}</td>
                      <td className="th1">{clinicdate.description}</td>
                      <td className="th1">{clinicdate.date}</td>
                      <td className="th1">{clinicdate.starttime}</td>

                      <td className="th1">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(clinicdate.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <Lottie animationData={admin} />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default MOHDashboard;
