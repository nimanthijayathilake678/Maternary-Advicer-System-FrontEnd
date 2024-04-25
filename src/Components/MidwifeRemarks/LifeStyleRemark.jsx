import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DoneSharp as DoneSharpIcon, ClearSharp as ClearSharpIcon } from "@mui/icons-material";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";
import RemarkModal from "./RemarkModal";

const rows = [
  { name: "Take Cigarettes, Betel leaves, Tobacco", wife: "w_useCigarettesBetelLeavesTobaco", husband: "h_useCigarettesBetelLeavesTobaco" },
  { name: "Take Liquor", wife: "w_useLiquor", husband: "h_useLiquor" },
  { name: "Take Drugs", wife: "w_useDrugs", husband: "h_useDrugs" },
  { name: "Passively exposed to other people's smoke at home or at work - Two types of vegetables", wife: "w_hangoutWithSmokingPeople", husband: "h_hangoutWithSmokingPeople" },
  { name: "An atmosphere at home that is not physically or mentally abusive to you", wife: "w_atmosphereNotPhysicallyMentalyAbusive", husband: "h_atmosphereNotPhysicallyMentalyAbusive" },
  { name: "Participate daily religious rituals", wife: "w_dailyReligiousRitual", husband: "h_dailyReligiousRitual" },
  { name: "Make time for regular exercise", wife: "w_regularExercise", husband: "h_regularExercise" },
  { name: "Make time for hobbies", wife: "w_timeForHobbies", husband: "h_timeForHobbies" },
];


export default function LifeStyle(prop) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [lifeStyleData, setLifeStyle] = useState({});
  const auth = useAuth();

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/lifeStyle/" + auth.user.id);
        const userData = response?.data;
        setLifeStyle(userData);
        console.log("Personal Info Information ", userData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [auth.user.id]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left" sx={{ color: "#00A9BB" }}>Wife</TableCell>
            <TableCell align="left" sx={{ color: "#00A9BB" }}>Husband</TableCell>
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
              <TableCell align="left">
                {lifeStyleData[row.wife] ? <DoneSharpIcon sx={{ color: 'green' }} /> : <ClearSharpIcon sx={{ color: 'red' }} />}
              </TableCell>
              <TableCell align="left">
                {lifeStyleData[row.husband] ? <DoneSharpIcon sx={{ color: 'green' }} /> : <ClearSharpIcon sx={{ color: 'red' }} />}
              </TableCell>
              <TableCell align="left">
                {hoveredRow === index && (
                  <RemarkModal
                    name={row.name}
                    detail={lifeStyleData[row.key]}
                    size={prop.size}
                  />
                )}
              </TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
}
