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
  { name: "Registration No", key: "id" }, // Assuming "id" is the correct property for Registration No
  { name: "NIC", key: "nic" },
  { name: "MOH Area", key: "area" },
  { name: "Telephone No", key: "contactNo" },
  { name: "Email", key: "email" },
];

export default function GeneralInformationRemark(prop) {
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
        const response = await apiClient.get("/newuser/" + auth.user.id);
        const userData = response?.data;
        setGeneralInformationData(userData);
        console.log("General Information ", userData);
      } catch (err) {
        console.error(err);
      }
    };
    getFormData();
  }, [auth.user.id]);

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
