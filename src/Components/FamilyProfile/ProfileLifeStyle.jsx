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
  return { name, wife , husband,midwifeRemark,mohDoctor};
}

const rows = [
  createData("Take Cigarettes, Betel leaves, Tobacco",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Take Liquor",<ClearSharpIcon sx={{color:'red'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Take Drugs",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("Passively exposed to other people's smoke at home or at work - Two types of vegetables",<DoneSharpIcon sx={{color:'green'}}/>,<ClearSharpIcon sx={{color:'red'}}/>),
  createData("An atmosphere at home that is not physically or mentally abusive to you"),
  createData("Participate daily religious rituals"),
  createData("Make time for regular exercise"),
  createData("Make time for hobbies"),

];

export default function ProfileLifeStyle(prop) {
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
              <TableCell  align="left" sx={{ fontWeight: hoveredRow === index ? 'bold' : 'normal'  }}>{row.midwifeRemark}</TableCell>
              <TableCell  align="left" sx={{ fontWeight: hoveredRow === index ? 'bold' : 'normal'  }}>{row.midwifeRemark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
