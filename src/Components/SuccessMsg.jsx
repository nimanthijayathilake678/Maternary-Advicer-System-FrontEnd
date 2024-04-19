import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Theme from "./Theme";
import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircle from "@mui/icons-material/CheckCircleOutlineTwoTone";
const theme = Theme();

const Overly = styled(Stack)(({}) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, 0.7)",
  zIndex: 1000,
}));

const ModelStack = styled(Stack)(({}) => ({
  zIndex: 1000,
}));

export default function SuccessAlert({ setAlert }) {
  return ReactDOM.createPortal(
    <Overly>
      <Stack justifyContent="center" alignItems="center" sx={{}}>
        <ModelStack
          sx={{
            marginTop: 30,
            marginBottom: 45,
            backgroundColor: theme.palette.background.paper,
            width: 390,
            height: 180,
            borderRadius: theme.shape.borderRadius * 0.5,
            overflow: "hidden",
          }}
        >
          <Stack
            textAlign="center"
            alignItems="center"
            spacing={2}
            sx={{ marginTop: "15px" }}
          >
            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
              Successfully Updated !
            </Typography>
            <CheckCircle
              fontSize="large"
              sx={{ color: theme.palette.primary.main }}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{ width: "20%" }}
              onClick={() => setAlert(false)}
            >
              <Typography variant="subtitle2">Ok</Typography>
            </Button>
          </Stack>
        </ModelStack>
      </Stack>
    </Overly>,
    document.getElementById("portal-success")
  );
}
