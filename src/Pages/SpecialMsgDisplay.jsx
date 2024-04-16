import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import SpecialMsgService, {
  getSpecialMsg,
} from "../Services/SpecialMsgService";
import DisplaySidebar from "../Components/DisplaySidebar";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const VISIBLE_FIELDS = [
  "babyNum",
  "msg_Content",
  "msg_Priority",
  "msg_Date",
  "msg_Topic",
];

export default function SpecialMsgDisplay() {
  const [customDataset, setCustomDataset] = useState([]);
  const authContext = useAuth();
  const { id } = useParams();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSpecialMsg(id);
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

  const getRowClassName = (params) => {
    const priority = params.row.msg_Priority;
    switch (priority) {
      case "Ug":
        return "urgency";
      case "Nr":
        return "normal";
      case "Med":
        return "medium";
      default:
        return "";
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <div style={{ display: "flex", height: "100vh", overflowX: "hidden" }}>
        <DisplaySidebar />
        <div style={{ flex: 1, overflowX: "hidden", paddingLeft: "40px" }}>
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
              Special Notes
            </Typography>
            <style>
              {`
                .urgency {
                  background-color: #FF6347; /* Red */
                }

                .normal {
                  background-color: #90EE90; /* Green */
                }

                .medium {
                  background-color: #FFD700; /* Yellow */
                }
              `}
            </style>
            <DataGrid
              autoHeight
              rows={customDataset}
              columns={VISIBLE_FIELDS.map((field) => ({
                field,
                headerName: field,
                width: 150, // Adjust width as needed
              }))}
              components={{ Toolbar: GridToolbar }}
              getRowClassName={getRowClassName}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
