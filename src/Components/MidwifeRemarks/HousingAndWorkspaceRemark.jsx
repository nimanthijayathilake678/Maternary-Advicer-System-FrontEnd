

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

import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

function createData(name, wife, husband) {
  return { name, wife , husband };
}

const rows = [
  createData("Exposed to Chemicals",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Exposed to Metals like lead",<ClearSharpIcon sx={{color:'red'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Exposed to radiant like X ray",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Exposed to temperature conditions",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Live or work in a noisy environment with lots of noise"),
  createData("Have financial management"),
  createData("Clean Water"),
  createData("Toilet facilities"),
  createData("Facilities for proper waste disposal"),
  createData("Hazardous conditions in the environment around your home or in the garden that could cause accidents")
];

export default function HousingAndWorkspaceRemark(prop) {
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
