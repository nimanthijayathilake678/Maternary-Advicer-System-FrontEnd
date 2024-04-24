/*

import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../../Components/Search";

const View = () => {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadUsers();
	}, []);

	const loadUsers = async () => {
		const result = await axios.get(
			"http://localhost:8080/newuser",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 200) {
			setUsers(result.data);
		}
	};

	

	return (
		<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
            <th>Register Number</th>
            <th>Email</th>
            <th>Contact No</th>
            <th>Position</th>
            <th>Area</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{users
						.filter((st) =>
							st.firstName
								.toLowerCase()
								.includes(search)
						)
						.map((user, index) => (
							<tr key={user.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{user.firstName}</td>
								<td>{user.lastName}</td>
								<td>{user.regNum}</td>
								<td>{user.email}</td>
                <td>{user.contactNo}</td>
                <td>{user.position}</td>
                <td>{user.area}</td>
								<td className="mx-2">
									<Link
										to={`/student-profile/${user.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-student/${user.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default View;
*/


/*
import "../../css/MOHAdmin/View.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../../Components/Search";
import DisplaySidebar from "../../Components/DisplaySidebar";

const View = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Load sample data when component mounts
    loadSampleData();
  }, []);

  const loadSampleData = () => {
    // Sample user data
    const sampleData = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        regNum: "2022001",
        email: "john@example.com",
        contactNo: "1234567890",
        position: "Student",
        area: "Science",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        regNum: "2022002",
        email: "jane@example.com",
        contactNo: "9876543210",
        position: "Teacher",
        area: "Math",
      },
      // Add more sample users as needed
    ];

    setUsers(sampleData);
  };

  return (
    <div className="view-content">
      <div className="sidebar-view">
        <DisplaySidebar />
      </div>
      <div className="view-contnt">
        <div className="search-box1">
          <Search search={search} setSearch={setSearch} />
        </div>
        <div className="table-content">
          <table className="table1">
            <thead>
              <tr className="text-center">
                <th className="th1">ID</th>
                <th className="th1">First Name</th>
                <th className="th1">Last Name</th>
                <th className="th1">Register Number</th>
                <th className="th1">Email</th>
                <th className="th1">Contact No</th>
                <th className="th1">Position</th>
                <th className="th1">Area</th>
                <th className="th2" colSpan="3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="text-center">
              {users
                .filter((user) => user.firstName.toLowerCase().includes(search))
                .map((user, index) => (
                  <tr key={user.id}>
                    <th className="th1" scope="row">
                      {index + 1}
                    </th>
                    <td className="th1">{user.firstName}</td>
                    <td className="th1"> {user.lastName}</td>
                    <td className="th1">{user.regNum}</td>
                    <td className="th1">{user.email}</td>
                    <td className="th1">{user.contactNo}</td>
                    <td className="th1">{user.position}</td>
                    <td className="th1">{user.area}</td>
                    <td className="th1">
                      <Link
                        to={`/student-profile/${user.id}`}
                        className="btn1 btn1-info"
                      >
                        <FaEye />
                      </Link>
                    </td>
                    <td className="th1">
                      <Link
                        to={`/edit-student/${user.id}`}
                        className="btn1 btn1-warning"
                      >
                        <FaEdit />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default View;
*/


import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SideBar from "../../Components/SideBar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DisplaySidebar from "../../Components/DisplaySidebar";
import {
  getClinicDates,
} from "../../Services/ClinicSchedule";


const VISIBLE_FIELDS = [
    
        "regNum",
        "fullName",
        "firstName",
        "lastName",
        "contactNo",
        "email",
        "gender",
        "marriedStatus",
        "area",
        "username",
        "password",
        "familyFlag",
        "position",

      ];

export default function View() {
  const [customDataset, setCustomDataset] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClinicDates();
        const data = response.data.map((row, index) => ({
          id: index + 1, // Generate unique id for each row
          ...row,
        }));
        setCustomDataset(data);
      } catch (error) {
        console.log("Error getting data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <div style={{ display: "flex", height: "100vh", overflowX: "hidden" }}>
        <DisplaySidebar />
        <div style={{ flex: 1, overflowX: "hidden" }}>
          <div style={{ height: "100vh", width: "100%" }}>
            <Typography
              variant="h5"
              style={{
                marginBottom: "10px",
                color: "#2A777C",
                paddingBottom: "60px",
                paddingLeft: "10px",
                paddingTop: "40px",
              }}
            >
              Register Users
            </Typography>

            <DataGrid
              autoHeight
              rows={customDataset}
              columns={VISIBLE_FIELDS.map((field) => ({
                field,
                headerName: field,
                width: 150, // Adjust width as needed
              }))}
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}


