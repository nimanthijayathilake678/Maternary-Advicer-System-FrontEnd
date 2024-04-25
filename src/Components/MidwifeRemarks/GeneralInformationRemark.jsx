import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemarkModal from "./RemarkModal";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";
import Theme from "../../Components/Theme";

const rows = [
  { name: "Registration No", key: "id" ,column:"registrationRemarkByMidwife"}, // Assuming "id" is the correct property for Registration No
  { name: "MOH Area", key: "area",column:"mohRemarkByMidwife" },
  { name: "Telephone No", key: "contactNo", column:"telephoneRemarkByMidwife" },
  { name: "Email", key: "email" , column:"emailRemarkByMidwife"},
];

export default function GeneralInformationRemark({size,id}) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [generalInformationData, setGeneralInformationData] = useState({});
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
        const response = await apiClient.get("/newuser/" + id);
        const userData = response?.data;
        setGeneralInformationData(userData);
        console.log("General Information ", userData);
      } catch (err) {
        console.error(err);
      }
    };
    getFormData();
  }, [id]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
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
                {generalInformationData[row.key]}
              </TableCell>
              <TableCell align="left">
                {hoveredRow === index && (
                  <RemarkModal
                    name={row.name}
                    detail={generalInformationData[row.key]}
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
