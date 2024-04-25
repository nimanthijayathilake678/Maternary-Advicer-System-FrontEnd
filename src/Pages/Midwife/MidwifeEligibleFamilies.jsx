import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DisplaySidebar from "../../Components/DisplaySidebar";
import { Box } from "@mui/material";
import { apiClient } from "../../API/ApiServer";

const MidwifeEligibleFamilies = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [allFamilyData, setAllFamilyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/newuser");
        const data = response?.data.filter((user) => user.position === "Family");
        setAllFamilyData(data);
        console.log("Family Information ", response.data);

      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { id: 'id', label: 'Reference No', minWidth: 170 },
    { id: 'fullName', label: "Wife's name", minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'contactNo', label: 'Telephone No', minWidth: 170 },
    { id: 'actions', label: 'Actions', minWidth: 170 }, // New column for actions
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ display: "flex" , minHeight :"100vh" }}>
      <DisplaySidebar />
      <Box className="pt-10 px-10 c bg-white" sx={{ flexGrow: 1 }}>
        <div className="flex relative items-center">
          <div>
            <span className="text-xl text-[#2A777C] text-center font-bold ">
              Eligible Families
            </span>
          </div>
          <div className='absolute top-0 right-0'>
            <Button to="./createAccountForNewCouple" component={Link} variant="contained" style={{ backgroundColor: "#00A9BB", marginRight: '10px' }}>
              Create a New Account
            </Button>
          </div>
        </div>
        <div className="bottom-0 right-0"></div>
        <Paper className="mt-5" sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="center"
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#00A9BB",
                        color: "white",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {allFamilyData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align="center">
                              {column.id === 'actions' ? (
                                <div>
                                 <Button variant="contained" disabled={!row.familyFlag} color="primary" component={Link} to={`./remark/${row.id}`} style={{ backgroundColor: "#00A9BB", marginRight: '10px' }}>
                                      Add Remark
                                    </Button>
                                  <Button variant="contained" color="secondary" component={Link} to={`./familyProfile/${row.id}`} style={{ backgroundColor: "#00A9BB" }}>
                                    View Profile
                                  </Button>
                                </div>
                              ) : (
                                column.format && typeof value === 'number' ? column.format(value) : value
                              )}
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
            count={allFamilyData?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default MidwifeEligibleFamilies;
