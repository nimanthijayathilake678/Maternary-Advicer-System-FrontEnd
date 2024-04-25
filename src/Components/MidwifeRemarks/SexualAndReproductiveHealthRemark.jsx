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
  { name: "Regular Monthly Period", wife: "w_regularMonthlyPeriod", husband: "h_regularMonthlyPeriod" },
  { name: "Number of Period Days", wife: "w_noOfPeriodDays" },
  { name: "Heavy Bleeding", wife: "w_heavyBleeding", husband: "h_heavyBleeding" },
  { name: "Vaginal Bleeding", wife: "w_vaginaBleeding", husband: "h_vaginaBleeding" },
  { name: "Abdominal Pain", wife: "w_abdominalPain", husband: "h_abdominalPain" },
  { name: "Unusual Color or Foul Smelling", wife: "w_unusualColorFoulSmelling", husband: "h_unusualColorFoulSmelling" },
  { name: "Abortion History", wife: "w_abortionHistory", husband: "h_abortionHistory" },
  { name: "Still Birth History", wife: "w_stillBirthHistory", husband: "h_stillBirthHistory" },
  { name: "Infant Mortality History", wife: "w_infantMortalityHistory", husband: "h_infantMortalityHistory" },
  { name: "Tubal Pregnancy History", wife: "w_tubalPregnancyHistory", husband: "h_tubalPregnancyHistory" },
  { name: "Is Itching", wife: "w_isItching", husband: "h_isItching" },
  { name: "Reproductive Organ Surgery", wife: "w_reproductiveOrganSurgery", husband: "h_reproductiveOrganSurgery" },
  { name: "Reproductive Organ Surgery Details", wife: "w_reproductiveOrganSurgeryDetails", husband: "h_reproductiveOrganSurgeryDetails" },
  { name: "Sexual Problems", wife: "w_sexualProblems", husband: "h_sexualProblems" },
  { name: "Satisfied Sexual Relationship", wife: "w_satisfiedSexualRelationship", husband: "h_satisfiedSexualRelationship" },
  { name: "Breast Self Exam", wife: "w_breastSelfExam", husband: "h_breastSelfExam" },
  { name: "Is Itching (Husband)", wife: "h_isItching", husband: "h_isItching" },
  { name: "Reproductive Organ Surgery (Husband)", wife: "h_reproductiveOrganSurgery", husband: "h_reproductiveOrganSurgery" },
  { name: "Reproductive Organ Surgery Details (Husband)", wife: "h_reproductiveOrganSurgeryDetails", husband: "h_reproductiveOrganSurgeryDetails" },
  { name: "Sexual Problems (Husband)", wife: "h_sexualProblems", husband: "h_sexualProblems" },
  { name: "Satisfied Sexual Relationship (Husband)", wife: "h_satisfiedSexualRelationship", husband: "h_satisfiedSexualRelationship" },
  { name: "Family Planning", wife: "familyPlanning" },
  { name: "Family Planning Details", wife: "familyPlanningDetails" },
  { name: "Delaying First Child", wife: "delayingFirstChild" },
  { name: "Delaying Time Period", wife: "delayingTimePeriod" },
];

export default function SexualAndReproductiveHealthRemark(prop) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [sexualData, setSexualData] = useState({});
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
        const response = await apiClient.get("/sexualAndReproductiveHealthInfos/" + auth.user.id);
        const userData = response?.data;
        setSexualData(userData);
        console.log("Sexual Info Information ", userData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [auth.user.id]);

  const renderIcon = (value) => {
    return typeof value === "boolean" ? (value ? <DoneSharpIcon sx={{ color: 'green' }} /> : <ClearSharpIcon sx={{ color: 'red' }} />) : value;
  };

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
                {renderIcon(sexualData[row.wife])}
              </TableCell>
              <TableCell align="left">
                {renderIcon(sexualData[row.husband])}
              </TableCell>
              <TableCell align="left">
                {hoveredRow === index && (
                  <RemarkModal
                    name={row.name}
                    detail={sexualData[row.key]}
                    size={prop.size}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
