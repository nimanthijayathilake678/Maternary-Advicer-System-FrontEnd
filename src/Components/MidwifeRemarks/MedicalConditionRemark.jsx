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
  { name: "Blood Deficiency", wife: "w_anemia", husband: "h_anemia", column:"anemiaRemarkByMidwife"},
  { name: "Heart Diseases - Congenital", wife: "w_congenital", husband: "h_congenital" , column:"congenitalRemarkByMidwife" },
  { name: "Heart Diseases - Rheumatic Heart Diseases", wife: "w_rheumaticHeartDisease", husband: "h_rheumaticHeartDisease" , column:"rheumaticHeartDiseaseRemarkByMidwife" },
  { name: "Diabetes Mellitus", wife: "w_diabetesMellitus", husband: "h_diabetesMellitus", column:"diabetesMellitusRemarkByMidwif"  },
  { name: "Hypercholesterolemia", wife: "w_hypercholesterolemia", husband: "h_hypercholesterolemia", column:"hypercholesterolemiaRemarkByMidwife"  },
  { name: "Asthma", wife: "w_asthma", husband: "h_asthma" , column:"asthmaRemarkByMidwife" },
  { name: "Thyroid diseases (Goiter)", wife: "w_thyroid", husband: "h_thyroid" , column:"thyroidRemarkByMidwife" },
  { name: "Untreated decayed teeth", wife: "w_untratedDecayedTeeth", husband: "h_untratedDecayedTeeth" , column:"untratedDecayedTeethRemarkByMidwife" },
  { name: "Conditions such as tooth decay and bleeding from the gums", wife: "w_toothDecayBleedingGums", husband: "h_toothDecayBleedingGums", column:"toothDecayBleedingGumsRemarkByMidwife"  },
  { name: "Mental Illnesses", wife: "w_mentalIllnesses", husband: "h_mentalIllnesses" , column:"mentalIllnessesRemarkByMidwife" },
  { name: "Rheumatic Fever", wife: "w_rheumaticFever", husband: "h_rheumaticFever", column:"rheumaticFeverRemarkByMidwife"  },
  { name: "Epilepsy", wife: "w_epilepsy", husband: "h_epilepsy" , column:"epilepsyRemarkByMidwife" },
  { name: "Allergies - Food", wife: "w_foodAllergies", husband: "h_foodAllergies" , column:"foodAllergiesRemarkByMidwife " },
  { name: "Allergies - Drugs", wife: "w_drugsAllergies", husband: "h_drugsAllergies" , column:"drugsAllergiesRemarkByMidwife" },
  // { name: "Long term medications", wife: "w_longTermMedicine", husband: "h_longTermMedicine", column:""  },
  // { name: "Other Surgeries", wife: "w_otherSurgeries", husband: "h_otherSurgeries", column:""  },
];

export default function MedicalConditionRemark({size,id}) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [medicalConditionsData, setMedicalConditionsData] = useState({});
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
        const response = await apiClient.get("/CoupleMedicalConditions/" + id);
        const userData = response?.data;
        setMedicalConditionsData(userData);
        console.log("Personal Info Information ", userData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

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
                {medicalConditionsData[row.wife] ? <DoneSharpIcon sx={{ color: 'green' }} /> : <ClearSharpIcon sx={{ color: 'red' }} />}
              </TableCell>
              <TableCell align="left">
                {medicalConditionsData[row.husband] ? <DoneSharpIcon sx={{ color: 'green' }} /> : <ClearSharpIcon sx={{ color: 'red' }} />}
              </TableCell>
              <TableCell align="left">
                {hoveredRow === index && (
                  <RemarkModal
                    name={row.name}
                    detail = {medicalConditionsData[row.wife].toString()+"     " + (medicalConditionsData[row.husband]?medicalConditionsData[row.husband].toString():"")}
                    size={size}
                    url="/midwifeRemark/"
                    id={id}
                    column={row.column}
                  />
                )}
              </TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>);
}
