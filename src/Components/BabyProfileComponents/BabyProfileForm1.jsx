import React from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Slide,
} from "@mui/material";

function BabyProfileForm1() {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <Slide direction="up" in={isVisible} mountOnEnter unmountOnExit>
      <Card variant="outlined">
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5.webp"
            alt="Baby Image"
            style={{ width: "100px", marginRight: "20px" }}
          />
          <List style={{ width: "600px" }}>
            <ListItem>
              <ListItemText primary="Division of MOH" />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText primary="MOH area" />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText primary="Mother Registration Number" />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText primary="Baby Registration Number" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Slide>
  );
}

export default BabyProfileForm1;
