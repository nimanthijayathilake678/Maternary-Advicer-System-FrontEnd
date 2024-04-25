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
  { name: "Blood Deficiency", wife: "w_anemia", husband: "h_anemia" },
  { name: "Heart Diseases - Congenital", wife: "w_congenital", husband: "h_congenital" },
  { name: "Heart Diseases - Rheumatic Heart Diseases", wife: "w_rheumaticHeartDisease", husband: "h_rheumaticHeartDisease" },
  { name: "Diabetes Mellitus", wife: "w_diabetesMellitus", husband: "h_diabetesMellitus" },
  { name: "Hypercholesterolemia", wife: "w_hypercholesterolemia", husband: "h_hypercholesterolemia" },
  { name: "Asthma", wife: "w_asthma", husband: "h_asthma" },
  { name: "Thyroid diseases (Goiter)", wife: "w_thyroid", husband: "h_thyroid" },
  { name: "Untreated decayed teeth", wife: "w_untratedDecayedTeeth", husband: "h_untratedDecayedTeeth" },
  { name: "Conditions such as tooth decay and bleeding from the gums", wife: "w_toothDecayBleedingGums", husband: "h_toothDecayBleedingGums" },
  { name: "Mental Illnesses", wife: "w_mentalIllnesses", husband: "h_mentalIllnesses" },
  { name: "Rheumatic Fever", wife: "w_rheumaticFever", husband: "h_rheumaticFever" },
  { name: "Epilepsy", wife: "w_epilepsy", husband: "h_epilepsy" },
  { name: "Allergies - Food", wife: "w_foodAllergies", husband: "h_foodAllergies" },
  { name: "Allergies - Drugs", wife: "w_drugsAllergies", husband: "h_drugsAllergies" },
  { name: "Long term medications", wife: "w_longTermMedicine", husband: "h_longTermMedicine" },
  { name: "Other Surgeries", wife: "w_otherSurgeries", husband: "h_otherSurgeries" },
];

export default function FamilyHealthInformationRemark(prop) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [familyData, setFamilyData] = useState({});
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
        const response = await apiClient.get("/familyHealth/" + auth.user.id);
        const userData = response?.data;
        setFamilyData(userData);
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
                {familyData[row.wife] ? <DoneSharpIcon sx={{ color: 'green' }} /> : <ClearSharpIcon sx={{ color: 'red' }} />}
              </TableCell>
              <TableCell align="left">
                {familyData[row.husband] ? <DoneSharpIcon sx={{ color: 'green' }} /> : <ClearSharpIcon sx={{ color: 'red' }} />}
              </TableCell>
              <TableCell align="left">
                {hoveredRow === index && (
                  <RemarkModal
                    name={row.name}
                    detail={familyData[row.key]}
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
