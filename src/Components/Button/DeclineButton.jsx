import React from "react";
import Theme from "../Theme";
import { Button } from "@mui/material";

const theme = Theme();

const DeclineButton = (props) => {
  return (
    <>
      <Button
        style={{
          height: "35px",
        }}
        variant="outlined"
        color="error"
        size="small"
        onClick={props.onClick}
      >
        Decline
      </Button>
    </>
  );
};

export default DeclineButton;
