/*
import "../../css/MOHAdmin/View.css";
import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios'; // Import axios for making HTTP requests
import { Box } from "@mui/material";

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'fullName', label: 'FullName', minWidth: 170 },
  { id: 'nicNo', label: 'NicNo', minWidth: 170 },
  { id: 'birthday', label: 'Birthday', minWidth: 170 },
  { id: 'contactNo', label: 'Contact_No', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'gender', label: 'Gender', minWidth: 170 },
  { id: 'marriedStatus', label: 'MarriedStatus', minWidth: 170 },
  { id: 'occupation', label: 'Occupation', minWidth: 170 },
  { id: 'area', label: 'Area', minWidth: 170 },
  { id: 'username', label: 'Username', minWidth: 170 },
  { id: 'password', label: 'Password', minWidth: 170 },
  // Add more columns as needed
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data'); // Update the endpoint as per your backend
      setRows(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className="title">
        <span className="text">Registered Users Details</span>
      </div>
      <div>
    <Box>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left" // Adjust alignment as needed
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
    </div>
    </div>
  );
}

*/










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

import "../../css/MOHAdmin/View.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../../Components/Search";

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
        <section className="search-box">
          <div>
            <Search search={search} setSearch={setSearch} />
            </div>
            <div className="table-content">
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
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {users
                        .filter((user) =>
                            user.firstName.toLowerCase().includes(search)
                        )
                        .map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
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
                                        className="btn btn-info"
                                    >
                                        <FaEye />
                                    </Link>
                                </td>
                                <td className="mx-2">
                                    <Link
                                        to={`/edit-student/${user.id}`}
                                        className="btn btn-warning"
                                    >
                                        <FaEdit />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
        </section>
    );
};

export default View;
