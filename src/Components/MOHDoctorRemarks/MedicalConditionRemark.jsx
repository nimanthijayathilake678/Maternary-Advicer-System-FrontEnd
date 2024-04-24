import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import RemarkModal from "./RemarkModal";
import DoneIcon from '@mui/icons-material/Done';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

function createData(name, wife, husband, midwifeRemark) {
  return { name, wife , husband,midwifeRemark};
}

const rows = [
  createData("Blood Deficiency",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Heart Diseases - Congenital"),
  createData("Heart Diseases - Rheumatic Heart Diseases",),
  createData("Diabetes Mellitus"),
  createData("Hypercholesterolemia"),
  createData("Asthma"),
  createData("Thyroid diseases (Goiter)"),
  createData("Untrated decayed teeth"),
  createData("Conditions such as tooth decay and bleeding from the gums"),
  createData("Mental Illnesses"),
  createData("Rheumatic Fever"),
  createData("Epilepsy"),
  createData("Allergies - Food"),
  createData("Allergies - Drugs"),
  createData("Long term medications"),
  createData("Take folic acid tablet daily"),
  createData("Marrage based on blood relation"),
];

export default function MedicalConditionRemark(prop) {
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
            <TableCell align="left" sx={{color:'#00A9BB'}}>Husband</TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Wife</TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Remark Done By Midwife</TableCell>
            <TableCell></TableCell>
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
              <TableCell align="left" >{row.wife}</TableCell>
              <TableCell align="left">{row.husband}</TableCell>
              <TableCell align="left">{row.midwifeRemark}</TableCell>
              <TableCell align="left">
                {hoveredRow === index && <RemarkModal name = {row.name} wife = {row.detail} size  = {prop.size} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
