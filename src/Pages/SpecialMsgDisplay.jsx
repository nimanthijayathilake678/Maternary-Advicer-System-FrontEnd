import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import SpecialMsgService, {
  getSpecialMsg,
  deleteSpecialMsg,
} from "../Services/SpecialMsgService";
import DisplaySidebar from "../Components/DisplaySidebar";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Grid from "@mui/material/Grid";
import { Link, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const VISIBLE_FIELDS = ["id", "msg_Content", "msg_Date", "msg_Topic"];

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

  const handleDelete = async (id) => {
    try {
      await deleteSpecialMsg(id);
      console.log(id);
      const updatedDataset = customDataset.filter((row) => row.id !== id);
      setCustomDataset(updatedDataset);
    } catch (error) {
      console.error("Error deleting message:", error);
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
            <div>
              <Grid container spacing={6} justifyContent="center">
                <Grid item>
                  <div className="legend">
                    <span className="urgency-color"></span>{" "}
                    <span className="legend-text">Urgent</span>
                  </div>
                </Grid>
                <Grid item>
                  <div className="legend">
                    <span className="normal-color"></span>{" "}
                    <span className="legend-text">Normal</span>
                  </div>
                </Grid>
                <Grid item>
                  <div className="legend">
                    <span className="medium-color"></span>{" "}
                    <span className="legend-text">Medium</span>
                  </div>
                </Grid>
              </Grid>
            </div>

            <style>
              {`
                .urgency {
                  background-color:#FFA07A; /* Red */
                }

                .normal {
                  background-color: #87E892; /* Green */
                }

                .medium {
                  background-color:  #ece75f; /* Yellow */
                }
                .legend {
                  margin-right: 10px;
                  display: inline-flex;
                  align-items: center;
                }

                .legend span {
                  width: 20px;
                  height: 20px;
                  display: inline-block;
                  margin-right: 5px;
                  border-radius: 50%;
                }

                .urgency-color {
                  background-color: #FFA07A;
                }

                .normal-color {
                  background-color: #87E892;
                }

                .medium-color {
                  background-color:  #ece75f;
                }
                .legend-text {
                  color: black;
                }

              `}
            </style>
            <DataGrid
              autoHeight
              rows={customDataset}
              columns={[
                ...VISIBLE_FIELDS.map((field) => ({
                  field,
                  headerName: field,
                  width: 250, // Adjust width as needed
                })),
                {
                  field: "delete",
                  headerName: "Delete",
                  width: 100,
                  renderCell: (params) => (
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(params.row.id)}
                    >
                      Delete
                    </Button>
                  ),
                },
              ]}
              components={{ Toolbar: GridToolbar }}
              getRowClassName={getRowClassName}
            />
          </div>
        </div>
        <div style={{ marginTop: "20px", color: "black" }}>
          {/* Add phone number and email here */}
          <Typography variant="h8" style={{ color: "black" }}>
            Emergency Contact - Midwife
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <IconButton
                component={Link}
                href="tel:+94767087009"
                style={{ color: "#2A777C" }}
              >
                <PhoneIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Link href="tel:+94767087009" style={{ color: "#2A777C" }}>
                  +94767087009
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <IconButton
                component={Link}
                href="mailto:nimanthijayathilaka99@gmail.com"
                style={{ color: "#2A777C" }}
              >
                <EmailIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Link
                  href="mailto:nimanthijayathilaka99@gmail.com"
                  style={{ color: "#2A777C" }}
                >
                  nimanthijayathilaka99@gmail.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </div>
        ;
      </div>
    </Box>
  );
}
