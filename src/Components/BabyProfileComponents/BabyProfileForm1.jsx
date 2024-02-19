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

function BabyProfileForm1({ babyDetails }) {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <Slide direction="up" in={isVisible} mountOnEnter unmountOnExit>
      <Card variant="outlined" style={{ maxWidth: "700px", margin: "auto" }}>
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <List style={{ width: "100%" }}>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Division of Regional MOH: Matara`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`MOH Area: Matara`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Pregnancy No: P039449`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Baby Registration No: B7484848`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Mother Registration No: M344553`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Baby Name: K M Sithul`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Mother Name: K M Malani`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Baby Birthday: 2000/09/09`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Baby Date of Registration: 2000/09/12`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Baby Age: 3 days`}
              />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ style: { marginLeft: "20px" } }}
                primary={`Baby Address: Mathara`}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Slide>
  );
}

export default BabyProfileForm1;
