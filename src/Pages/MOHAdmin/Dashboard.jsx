import React, {
	useEffect,
	useState,
} from "react";
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
import clinicDateViewer from "../../Components/ClinicDateViewer"
import axios from "axios";
import {getClinicDates} from "../../Services/ClinicSchedule"
import SuccessAlert from "../../Components/SuccessMsg";
import {
	FaTrashAlt,
} from "react-icons/fa";

function MOHDashboard() {
  const [clinicDates, setclinicDates] = useState([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	//const [search, setSearch] = useState("");

	useEffect(() => {
		loadClinicDates();
	}, []);

	const loadClinicDates = async () => {

    try {
      
      const response =  await getClinicDates();
  
      if (response.status === 302) {
        console.log("success");
        setShowSuccessAlert(true);
      }
      console.log(response);
    } catch (error) {
      console.error("Error submitting form:", error.message);
      
    }









		const result = await axios.get(
			"http://localhost:8080/clinicDate",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setclinicDates(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/clinicDate/delete/${id}`
		);
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
           <div className="table-clinicDate">
			
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>Area</th>
						<th>Description</th>
						<th>Date</th>
						<th>Start Time</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{clinicDates
						
						.map((clinicdate, index) => (
							<tr key={clinicdate.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{clinicdate.area}</td>
								<td>{clinicdate.description}</td>
								<td>{clinicdate.date}</td>
								<td>{clinicdate.starttime}</td>
								
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(clinicdate.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		
    </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default MOHDashboard;
