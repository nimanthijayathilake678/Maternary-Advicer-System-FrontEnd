import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const Upcomings = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        {/* <Message/> */}
        <ListItemText
          primary="Upcoming Prenatal Clinic"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Kumudu Dissanake
              </Typography>
              {
                " - Hello, it's time for your next prenatal clinic! Our upcoming session is scheduled for 2nd February 2024 at 9.00 am at Meddawatta PHM. We'll be discuss...."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        {/* <Message/> */}
        <ListItemText
          primary="Baby's Upcaming Vaccination"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Kumudu Dissanayake
              </Typography>
              {
                " — Hi, it's time to review your baby's vaccination schedule. I've attached a summary of upcoming vaccines and their ..."
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        {/* <Message/> */}
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default Upcomings;
