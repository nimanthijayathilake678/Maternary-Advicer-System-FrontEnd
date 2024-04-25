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
  createData("Eat three main meals  a day",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Diet Include - Animal Proteins",<ClearSharpIcon sx={{color:'red'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Diet Include - Plant Protein/Grains",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Diet Include - Two types of vegetables",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Diet Include - A type of Greens"),
  createData("Diet Include - A type of Fruit"),
  createData("All sit down and have one meal together as a family"),
  createData("Diet include anything from the garden"),
  createData("Consuming too much sugar"),
  createData("Eat too much oil")
];

export default function FamilyNutritionRemark(prop) {
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
