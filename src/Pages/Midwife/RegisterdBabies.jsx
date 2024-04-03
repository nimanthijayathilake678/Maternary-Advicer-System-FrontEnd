import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom"; // Import Link from React Router
import SideBar from "../../Components/SideBar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import DisplaySidebar from "../../Components/DisplaySidebar";
const VISIBLE_FIELDS = [
  "Baby Id",
  "Place",
  "Abnormalities",
  "Mode",
  "Immature",
  "Sex",
  "Age",
  "ViewProfile", // New field
];

const customDataset = [
  {
    id: 1,
    "Baby Id": 1,
    Place: "Mathara Hospital",
    Abnormalities: "None",
    Mode: "Natural",
    Immature: false,
    Sex: "Male",
    Age: 12,
    ViewProfile: "More", // Button label
  },
  {
    id: 2,
    "Baby Id": 2,
    Place: "Mathara Hospital",
    Abnormalities: "Yes",
    Mode: "Cesarean",
    Immature: true,
    Sex: "Female",
    Age: 1,
    ViewProfile: "More", // Button label
  },
  {
    id: 3,
    "Baby Id": 3,
    Place: "Mathara Hospital",
    Abnormalities: "Yes",
    Mode: "Cesarean",
    Immature: true,
    Sex: "Male",
    Age: 3,
    ViewProfile: "More", // Button label
  },
  {
    id: 4,
    "Baby Id": 4,
    Place: "Mathara Hospital",
    Abnormalities: "Yes",
    Mode: "Cesarean",
    Immature: true,
    Sex: "Female",
    Age: 2,
    ViewProfile: "More", // Button label
  },
  // Add more rows as needed
];

export default function BasicExampleDataGrid() {
  const handleViewProfileClick = (id) => {
    // Handle the click event for the ViewProfile button
    console.log(`ViewProfile button clicked for row with id ${id}`);
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
              Registered Babies
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
                      <Link to="/family/babyDashboard">
                        <button
                          onClick={() => handleViewProfileClick(params.row.id)}
                          style={{
                            padding: "6px 12px",
                            borderRadius: "4px",
                            backgroundColor: "#007bff",
                            color: "#ffffff",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          {params.value}
                        </button>
                      </Link>
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
