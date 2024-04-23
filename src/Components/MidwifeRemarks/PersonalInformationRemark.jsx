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
  { name: "Date of Birth", wife: "w_dob", husband: "h_dob" },
  { name: "Educational Level", wife: "w_educationalLevel", husband: "h_educationalLevel" },
  { name: "Occupation", wife: "w_occupation", husband: "h_occupation" },
  { name: "Married Date", wife: "marriedDate" },
  { name: "Address", wife: "address"},
];

export default function FamilyHealthInformationRemark(prop) {
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
        const response = await apiClient.get("/personalInfo/" + auth.user.id);
        const userData = response?.data;
        setPersonalInformationData(userData);
        console.log("Personal Info Information ", userData);
      } catch (err) {
        console.error(err);
      }
    };
    getFormData();
  }, [auth.user.id]);

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
                    wife={personalInformationData[row.wife]}
                    husband={personalInformationData[row.husband]}
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
