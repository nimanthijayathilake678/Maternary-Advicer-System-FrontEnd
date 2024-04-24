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
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

function createData(name, wife, husband,midwifeRemark) {
  return { name, wife , husband, midwifeRemark };
}

const rows = [
  createData("Regular Monthly Period",<DoneSharpIcon sx={{color:'green'}}/>),
  createData("Number of days having period",'7'),
  createData("Vaginal bleeding between periods",<DoneSharpIcon sx={{color:'green'}}/>),
  createData("Suffering from severe abdominal pain during periods",<DoneSharpIcon sx={{color:'green'}}/>),
  createData("Unusual colored or foul-smelling discharge from the vagina"),
  createData("Abortion"),
  createData("Stillbirths"),
  createData("Infant mortality"),
  createData("Tubal Pregnancy (Ectopic)"),
  createData("Itching in or around genitals"),
  createData("Any surgery on reproductive organs"),
  createData("Reproductive organs"),
  createData("Have any problems with sex "),
  createData("Satisfied with the sexual relationship"),
  createData("Breast self-exmination once a month"),
  createData('Have any family planning system'),
  createData('Family Planning Method'),
  createData('Delay first child'),
  createData('Time take to delay first child')
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
            <TableCell align="left" sx={{color:'#00A9BB'}}>Wife</TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Husband</TableCell>
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
