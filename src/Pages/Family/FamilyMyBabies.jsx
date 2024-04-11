import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import SideBar from "../../Components/SideBar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BabyRegistrationForm1Service, {
  getRegisterBabyByCoupleNum,
  getRegisterBaby,
} from "../../Services/BabyRegistrationForm1Service";
import DisplaySidebar from "../../Components/DisplaySidebar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const VISIBLE_FIELDS = [
  "pregnancy_id",
  "b_Name",
  "b_Reg_Num",
  "b_MOH_Division",
  "b_Mother_Age",
  "b_Reg_Date",
  "ViewProfile",
];

export default function FamilyMyBabies() {
  const [customDataset, setCustomDataset] = useState([]);
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        var registrationNum = authContext.user.regNum;
        //console.log(registrationNum);
        const response = await getRegisterBabyByCoupleNum(registrationNum);
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

  const handleViewProfileClick = (id) => {
    // Handle the click event for the ViewProfile button
    console.log(`ViewProfile button clicked for row with id ${id}`);
    navigate(`/family/babyDashboard/${id}`);
  };

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
              My Babies
            </Typography>

            <DataGrid
              autoHeight
              rows={customDataset}
              columns={VISIBLE_FIELDS.map((field) => {
                if (field === "ViewProfile") {
                  return {
                    field: "ViewProfile",
                    headerName: "View Profile",
                    width: 150,
                    renderCell: (params) => (
                      <button
                        onClick={() =>
                          handleViewProfileClick(params.row.b_Reg_Num)
                        }
                        style={{
                          padding: "6px 12px",
                          borderRadius: "4px",
                          backgroundColor: "#007bff",
                          color: "#ffffff",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        View
                        {params.value}
                      </button>
                    ),
                  };
                } else {
                  return {
                    field,
                    headerName: field,
                    width: 150, // Adjust width as needed
                  };
                }
              })}
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}

// <Box sx={{ display: "flex" }}>
//   <div style={{ display: "flex", height: "100vh", overflowX: "hidden" }}>
//     <DisplaySidebar />
//     <div style={{ flex: 1, overflowX: "hidden" }}>
//       <div style={{ height: "100vh", width: "100%" }}>
//         <Typography
//           variant="h5"
//           style={{
//             marginBottom: "10px",
//             color: "#2A777C",
//             paddingBottom: "60px",
//             paddingLeft: "10px",
//             paddingTop: "40px",
//           }}
//         >
//           My Babies
//         </Typography>

//         <DataGrid
//           autoHeight
//           rows={customDataset}
//           columns={VISIBLE_FIELDS.map((field) => ({
//             field,
//             headerName: field,
//             width: 150, // Adjust width as needed
//           }))}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </div>
//     </div>
//   </div>
// </Box>
