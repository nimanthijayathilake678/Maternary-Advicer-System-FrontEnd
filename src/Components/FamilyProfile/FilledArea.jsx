import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import BloodDropDown from "./BloodDropdown";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SquareBox = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E4FEFF",
  height: "7em",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "black",
  fontWeight: "bold",
}));

export default function FilledArea() {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [bmi, setBMI] = React.useState("");
  const [status, setStatus] = React.useState("Enter weight and height");

  const handleWeightChange = (event) => {
    const newWeight = event.target.value;
    setWeight(newWeight);
  };

  const handleHeightChange = (event) => {
    const newHeight = event.target.value;
    setHeight(newHeight);
  };
  React.useEffect(() => {
    // Calculate BMI when weight or height changes
    if (weight && height) {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height) / 100; // Convert height to meters
      const bmiValue = weightNum / (heightNum * heightNum);
      const newBmi = bmiValue.toFixed(2);
      setBMI(newBmi);
      if (bmiValue >= 30) {
        setStatus(`BMI :${newBmi}  Bellow D`);
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setStatus(`BMI :${newBmi}  C & D`);
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setStatus(`BMI :${newBmi}  A & C`);
      } else {
        setStatus(`BMI :${newBmi}  A & B`);
      }
    } else {
      setBMI(""); // Clear BMI if weight or height is empty
      setStatus("Enter weight and height");
    }
  }, [weight, height]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <Grid container spacing={2} alignItems="center" direction="row">
              <Grid item xs={12} paddingBottom="4">
                <TextField
                  required
                  name="General Examination"
                  label="General Examination"
                  sx={{ width: "100%", paddingTop: "1em" }}
                />
              </Grid>

              <Grid item xs={6} paddingBottom="4">
                <TextField
                  required
                  name="Breast"
                  label="Breast"
                  sx={{ width: "100%", paddingTop: "1em" }}
                />
              </Grid>

              <Grid item xs={6} paddingBottom="4">
                <TextField
                  required
                  name="BP"
                  label="BP"
                  sx={{ width: "100%", paddingTop: "1em" }}
                />
              </Grid>

              <Grid item xs={6} paddingBottom="4">
                <TextField
                  required
                  name="CVS"
                  label="CVS"
                  sx={{ width: "100%", paddingTop: "1em" }}
                />
              </Grid>

              <Grid item xs={6} paddingBottom="4">
                  <TextField
                    required
                    name="RS"
                    label="RS"
                    sx={{ width: "100%", paddingTop: "1em" }}
                  />
              </Grid>

              <Grid item xs={6} paddingBottom="4">
                  <TextField
                    required
                    name="Abd"
                    label="Abd"
                    sx={{ width: "100%", paddingTop: "1em" }}
                  />
              </Grid>

              <Grid item xs={6} paddingBottom="4">
                  <TextField
                    required
                    name="CNS"
                    label="CNS"
                    sx={{ width: "100%", paddingTop: "1em" }}
                  />
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
