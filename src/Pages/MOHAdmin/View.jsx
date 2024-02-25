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
//import axios from 'axios'; // Import axios for making HTTP requests

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
/*
  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchData();
  }, []);
/*
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data'); // Update the endpoint as per your backend
      setRows(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
*/
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
  );
}
