import { Button } from "@mui/material";
import React from "react";
import Theme from "../Theme";

const theme = Theme();

const DefaultButton = (props) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: theme.palette.secondary.main,
          height: props.height,
          width: props.width,
        }}
        variant="contained"
        size="small"
        onClick={props.onClick}
      >
        {props.title}
      </Button>
    </>
  );
};

export default DefaultButton;
