import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Slide,
} from "@mui/material";
import { Box } from "@mui/material";

function BabyProfileForm1({ babyDetails }) {
  const [isVisible, setIsVisible] = useState(true);
  const [babyData, setBabyData] = useState(null); // State to store retrieved data

  useEffect(() => {
    // Fetch data from backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("your_backend_endpoint_here");
        const data = await response.json();
        setBabyData(data); // Store retrieved data in state
      } catch (error) {
        console.error("Error fetching baby data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <Box
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Slide direction="up" in={isVisible} mountOnEnter unmountOnExit>
        <Card variant="outlined" style={{ maxWidth: 400 }}>
          <CardContent>
            <List>
              {babyData && (
                <>
                  <ListItem>
                    <ListItemText
                      primary={`Division of Regional MOH: ${babyData.regionalMOH}`}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary={`MOH Area: ${babyData.mohArea}`} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary={`Pregnancy No: ${babyData.pregnancyNo}`}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary={`Baby Registration No: ${babyData.babyRegistrationNo}`}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary={`Mother Registration No: ${babyData.motherRegistrationNo}`}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText primary={`Baby Name: ${babyData.babyName}`} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary={`Mother Name: ${babyData.motherName}`}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary={`Baby Date of Registration: ${babyData.babyDateOfRegistration}`}
                    />
                  </ListItem>
                </>
              )}
            </List>
          </CardContent>
        </Card>
      </Slide>
    </Box>
  );
}

export default BabyProfileForm1;
