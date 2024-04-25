import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemarkModal from "./RemarkModal";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";

const rows = [
  { name: "Date of Birth", wife: "w_dob", husband: "h_dob", column:"dobRemarkByMidwife" },
  { name: "Educational Level", wife: "w_educationalLevel", husband: "h_educationalLevel", column:"educationalLevelRemarkByMidwife"  },
  { name: "Occupation", wife: "w_occupation", husband: "h_occupation", column:"occupationRemarkByMidwife" },
  { name: "Married Date", wife: "marriedDate",husband:null, column:"marriedDateRemarkByMidwife" },
  { name: "Address", wife: "address", husband:null,column:"addressRemarkByMidwife" },
];

export default function FamilyHealthInformationRemark({size,id}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [personalInformationData, setPersonalInformationData] = useState({});
  const auth = useAuth();

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await apiClient.get("/personalInfo/" + id);
        const userData = response?.data;
        setPersonalInformationData(userData);
        console.log("Personal Info Information ", userData);
      } catch (err) {
        console.error(err);
      }
    };
    getFormData();
  }, [id]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left" sx={{ color: "#00A9BB" }}>
              Wife
            </TableCell>
            <TableCell align="left" sx={{ color: "#00A9BB" }}>
              Husband
            </TableCell>
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
              <TableCell align="left">
                {personalInformationData[row.wife]}
              </TableCell>
              <TableCell align="left">
                {personalInformationData[row.husband]}
              </TableCell>
              <TableCell align="left">
                {hoveredRow === index && (
                  <RemarkModal
                    name={row.name}
                    detail = {personalInformationData[row.wife]+"     " + (personalInformationData[row.husband]?personalInformationData[row.husband]:"")}
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
    </TableContainer>
  );
}
