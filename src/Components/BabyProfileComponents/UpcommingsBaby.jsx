import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const UpcomingsBaby = () => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState("");

  const handleEdit = () => {
    setEditMode(true);
    setEditedText(""); // Reset edited text
  };

  const handleSave = () => {
    // Handle save logic here
    setEditMode(false);
    // Update the item with editedText
    // You may need to implement a logic to save edited text for each item
  };

  const handleDelete = () => {
    // Handle delete logic here
    // You may need to remove the item from the list
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        {editMode ? (
          <>
            <TextField
              id="edited-text"
              label="Edit Text"
              multiline
              fullWidth
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
          </>
        ) : (
          <>
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
            <Button onClick={handleEdit} variant="contained" color="primary">
              Edit
            </Button>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </>
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
      {/* Repeat the same structure for other list items */}
    </List>
  );
};

export default UpcomingsBaby;
