import { Typography, Grid } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, detail, midwifeRemark, mohRemark) {
  return { name, detail, midwifeRemark, mohRemark };
}

const rows = [
  createData("Division of Regional Ministry of Health Service", "Mathara"),
  createData("Division of Health Medical Officer", "Mathara"),
  createData("Reference No", 1),
  createData("Wife's name", "Nayani Perera"),
  createData("Husband's name", "Saman Perera"),
  createData("Telephone No", "0771234567"),
  createData("Email", "nayanii@gmail.com"),
  createData("Address", "A67/1, Algoda, Dehiowita"),
];

const GeneralInfo = () => {
  return (
    <div>
      <Grid container>
        <Grid
          container
          sx={{ paddingTop: 5, paddingLeft: 2, color: "#00A9BB" }}
        >
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ paddingBottom: 4 }}>
              1. General Information{" "}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#E4FEFF" }}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="left" style={{ color: "#00A9BB" }}>
                      Remark Done By Midwife
                    </TableCell>
                    <TableCell align="left" style={{ color: "#00A9BB" }}>
                      Remark Done By Midwife
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.detail}</TableCell>
                      <TableCell align="left">{row.midwifeRemark}</TableCell>
                      <TableCell align="left">{row.mohRemark}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GeneralInfo;
