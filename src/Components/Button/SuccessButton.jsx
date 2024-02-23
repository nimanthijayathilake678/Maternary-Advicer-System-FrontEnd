import { Button } from "@mui/material";
import React from "react";
import Theme from "../Theme";

const theme = Theme();

const SuccessButton = (props) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: theme.palette.success.main,
          height: props.height,
          width: props.width,
          color: "white",
        }}
        onClick={props.onClick}
        variant="contained"
      >
        {props.title}
      </Button>
    </>
  );
};

export default SuccessButton;
