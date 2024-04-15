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
import { Link } from "react-router-dom";
import DisplaySidebar from "../../Components/DisplaySidebar";


const columns = [
  { id: "referenceNo", label: "Reference No", minWidth: 170 },
  { id: "wifeName", label: "Wife's name", minWidth: 170 },
  { id: "address", label: "Address", minWidth: 170 },
  { id: "email", label: "email", minWidth: 170 },
  { id: "telephoneNo", label: "Telephone No", minWidth: 170 },

];

function createData(referenceNo,wifeName,address,email,telephoneNo) {
  return { referenceNo,wifeName,address,email,telephoneNo };
}

const rows = [
  createData("1", "Jhon Deo", "A67/1,Wallamadama,Mathara","jhondeo@gmail.com","0771234567"),
  
];

const MidwifeEligibleFamilies = () => {
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
      <DisplaySidebar/>
      <div className="pt-10 px-10 c">
      <div className="flex relative items-center">
        <div>
          <span className=" text-xl  text-[#2A777C] text-center font-bold ">
            Eligible Families
          </span>
        </div>

        <div className=' absolute top-0 right-0'>
          <Button to="./createAccountForNewCouple" component={Link} variant="contained" >
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
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
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

export default MidwifeEligibleFamilies;
