import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SideBar from "../../Components/SideBar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BabyRegistrationForm1Service, {
  getRegisterBaby,
} from "../../Services/BabyRegistrationForm1Service";
import DisplaySidebar from "../../Components/DisplaySidebar";
const VISIBLE_FIELDS = [
  "id",
  "couple_id",
  "pregnancy_id",
  "b_Name",
  "b_Reg_Num",
  "b_MOH_Division",
  "b_Mother_Age",
  "b_Reg_Date",
  "b_FSHO_Division",
];

export default function VogRegisterdBabies() {
  const [customDataset, setCustomDataset] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRegisterBaby();
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
              Registered Babies
            </Typography>

            <DataGrid
              autoHeight
              rows={customDataset}
              columns={VISIBLE_FIELDS.map((field) => ({
                field,
                headerName: field,
                width: 150, // Adjust width as needed
              }))}
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
