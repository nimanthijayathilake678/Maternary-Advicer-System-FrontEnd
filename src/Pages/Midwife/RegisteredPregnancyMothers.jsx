import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav";
import DisplaySidebar from "../../Components/DisplaySidebar";
import { useParams } from "react-router-dom";

const columns = [
  { id: "pId", label: "Pregnancy Id", minWidth: 170 },
  { id: "cId", label: "Couple Id", minWidth: 170 },
  { id: "motherName", label: "Mother Name", minWidth: 170 },
  { id: "address", label: "Address", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "telephoneNo", label: "Telephone No", minWidth: 170 },
  { id: "action", label: "Action", minWidth: 170 }, // New column for action button
];

function createData(pId, cId, motherName, address, email, telephoneNo) {
  return { pId, cId, motherName, address, email, telephoneNo };
}

const rows = [
  createData(
    "12345",
    "27203",
    "Jhon Deo",
    "A67/1,Wallamadama,Mathara",
    "jhondeo@gmail.com",
    "0771234567"
  ),
];

const RegisteredPregMothers = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("one");
  const { id } = useParams();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleNavigation = (url) => {
    navigate(url);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      {/* <DisplaySidebar/> */}
      <div className="pt-10 px-10 c">
      <DisplaySidebar />
        <div className="flex relative items-center">
          <div>
            <span className=" text-xl  text-[#2A777C] text-center font-bold ">
              Eligible Families
            </span>
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
                      align={column.align}
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
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === "action" ? (
                                <Button 
                                  variant="contained" 
                                  color="primary"
                                  onClick={() => handleNavigation("/midwife/registeredPregMothers/profileView")}
                                  >
                                  View More
                                </Button>
                              ) : (
                                column.format &&
                                typeof value === "number" ? (
                                  column.format(value)
                                ) : (
                                  value
                                )
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
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default RegisteredPregMothers;
