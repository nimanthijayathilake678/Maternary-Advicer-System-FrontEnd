import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DisplaySidebar from "../../../Components/DisplaySidebar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import BabyRegistrationForm1Service, {
  getRegisterBabyByBabyNum,
} from "../../../Services/BabyRegistrationForm1Service";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";

const VISIBLE_FIELDS_ONE = [
  "pregnancy_id",
  "b_Name",
  "b_Reg_Num",
  "b_MOH_Division",
  "b_Mother_Age",
  "b_Reg_Date",
  "ViewProfile",
];
export default function BabyDetails() {
  const [customDataset, setCustomDataset] = useState([]);
  const authContext = useAuth();
  const { id } = useParams();
  useEffect(() => {
    console.log("Fetching data for baby with ID:", id);
    const fetchData = async () => {
      try {
        const response = await getRegisterBabyByBabyNum(id);
        const data = response.data.map((row, index) => ({
          id: index + 1, // Generate unique id for each row
          ...row,
        }));
        setCustomDataset(data);
      } catch (error) {
        console.log("Error getting data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <div style={{ display: "flex", height: "100vh", overflowX: "hidden" }}>
        <DisplaySidebar />
        <div style={{ flex: 1, overflowX: "hidden" }}>
          <div style={{ height: "100vh", width: "100%" }}>
            <Typography
              variant="h5"
              style={{
                marginBottom: "10px",
                color: "#2A777C",
                paddingBottom: "60px",
                paddingLeft: "10px",
                paddingTop: "40px",
              }}
            >
              My Profile
            </Typography>

            <DataGrid
              autoHeight
              rows={customDataset}
              columns={VISIBLE_FIELDS_ONE.map((field) => {
                return {
                  field,
                  headerName: field,
                  width: 150, // Adjust width as needed
                };
              })}
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
