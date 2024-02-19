import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import SideBar from "../../Components/SideBar";

const columns = [
  { id: "Baby", label: "Baby", minWidth: 40 },
  { id: "Abnormalities", label: "Abnormalities", minWidth: 40 },
  { id: "Place", label: "Place", minWidth: 80 },
  { id: "Mode", label: "Mode", minWidth: 40 },
  { id: "BirthWeight", label: "Birth Weight", minWidth: 40 },
  { id: "Immature", label: "Immature", minWidth: 40 },
  { id: "Sex", label: "Sex", minWidth: 40 },
  { id: "Age", label: "Age", minWidth: 40 },
  { id: "More", label: "Baby Profile", minWidth: 40 }, // New column for "More"
];

function createData(
  Baby,
  Abnormalities,
  Place,
  Mode,
  BirthWeight,
  Immature,
  Sex,
  Age
) {
  return {
    Baby,
    Abnormalities,
    Place,
    Mode,
    BirthWeight,
    Immature,
    Sex,
    Age,
    More: "",
  };
}

const rows = [
  createData(
    "Baby 01",
    "No",
    "Mathara general Hospital",
    "Normal",
    "1.5",
    "Yes",
    "Male",
    "2Yr"
  ),
];

const FamilyMyBabies = () => {
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
    <div className="pt-10 px-10">
      <div className="flex relative items-center">
        <div>
          <span className="text-xl text-[#2A777C] text-center font-bold">
            My Babies
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align="center">
                            {column.id === "More" ? (
                              <Link to="/family/babyDashboard">
                                <Button variant="contained" color="primary">
                                  More
                                </Button>
                              </Link>
                            ) : (
                              value
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
      </Paper>
    </div>
  );
};

export default FamilyMyBabies;
