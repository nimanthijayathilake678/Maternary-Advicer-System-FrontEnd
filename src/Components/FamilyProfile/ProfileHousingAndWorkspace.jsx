

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

function createData(name, wife, husband,midwifeRemark,mohDoctor) {
  return { name, wife , husband , midwifeRemark,mohDoctor};
}

const rows = [
  createData("Exposed to Chemicals",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Exposed to Metals like lead",<ClearSharpIcon sx={{color:'red'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Exposed to radiant like X ray",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Exposed to temperature conditions",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Live or work in a noisy environment with lots of noise",<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Have financial management",<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Clean Water",<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Toilet facilities",<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Facilities for proper waste disposal",<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Hazardous conditions in the environment around your home or in the garden that could cause accidents",<ClearSharpIcon sx={{color:'red'}}/>)
];

export default function ProfileHousingAndWorkspace(prop) {
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
            <TableCell align="left" sx={{color:'#00A9BB'}}>Remark Done By MOH Doctor</TableCell>
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
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === index ? 'bold' : 'normal'  }}>
                {row.name}
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === index ? 'bold' : 'normal'  }}>{row.wife}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === index ? 'bold' : 'normal'  }}>{row.husband}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === index ? 'bold' : 'normal'  }}>{row.midwifeRemark}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === index ? 'bold' : 'normal'  }}>{row.mohRemark}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
