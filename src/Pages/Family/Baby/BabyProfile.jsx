import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BabyProfileForm1 from "../../../Components/BabyProfileComponents/BabyProfileForm1";
import BabyProfileForm2 from "../../../Components/BabyProfileComponents/BabyProfileForm2";
import Typography from "@mui/material/Typography";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";

export default function BabyProfile() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#E4FEFF" : "#00A9BB",
    ...theme.typography.body2,
    padding: theme.spacing(0.03),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [profilePicture, setProfilePicture] = useState(
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5.webp"
  );

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const topicStyle = {
    fontSize: "24px", // Increased font size
    fontWeight: "bold", // Bold font weight
    color: "#2A777C", // Custom color
    marginBottom: "20px", // Added margin bottom for spacing
    paddingTop: "10px",
    paddingLeft: "10px",
  };
  const subtopicStyle = {
    fontSize: "16px", // Increased font size
    fontWeight: "bold", // Bold font weight
    color: "#FFFFF", // Custom color
    marginBottom: "10px", // Added margin bottom for spacing
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <Typography variant="h4" component="h2" style={topicStyle}>
          Baby Registration
        </Typography>
      </div>
      <Grid container spacing={2} sx={{ width: "100%", margin: "auto" }}>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Item>
                <Typography variant="h4" component="h2" style={subtopicStyle}>
                  Basic Details
                </Typography>
                <BabyProfileForm1 />
              </Item>
            </Grid>
            <HealthAndSafetyOutlinedIcon />
            <Grid item xs={6} md={6}>
              <Item>
                <Typography variant="h4" component="h2" style={subtopicStyle}>
                  Neonatal Examination
                </Typography>
                <BabyProfileForm2 />
              </Item>
            </Grid>
            <Grid item xs={6} md={6}>
              <Item>
                <Typography variant="h4" component="h2" style={subtopicStyle}>
                  Neonatal Examination
                </Typography>
                <BabyProfileForm2 />
              </Item>
            </Grid>
            <Grid item xs={6} md={6}>
              <Item>
                <Typography variant="h4" component="h2" style={subtopicStyle}>
                  Neonatal Examination
                </Typography>
                <BabyProfileForm2 />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
