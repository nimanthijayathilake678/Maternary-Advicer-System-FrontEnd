import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function createData(name, detail,midwifeRemark,mohRemark) {
  return { name, detail,midwifeRemark,mohRemark };
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

export default function GeneralInformationRemark(prop) {
  const [hoveredRow, setHoveredRow] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Remark Done By Midwife</TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Remark Done By MOH Doctor </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === index ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.detail}</TableCell>
              <TableCell align="left">{row.midwifeRemark}</TableCell>
              <TableCell align="left">{row.mohRemark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
