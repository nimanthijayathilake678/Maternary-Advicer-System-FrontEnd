import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import MOHArea from "../../Components/MOHArea";
import PHMArea from "../../Components/PHMArea";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DisplaySidebar from "../../Components/DisplaySidebar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CreateAccountFormValidation() {
  const formik = useFormik({
    initialValues: {
      wifeName: "",
      husbandName: "",
      telephone: "",
      email: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log(values); // You can handle form submission logic here
    },
  });

  return (
    <Box sx={{ display: "flex" }}  className="w-full bg-white">
      <DisplaySidebar />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              paddingLeft: 10,
              paddingTop: 5,
              alignItems: "center",
            }}
          >
            <Item sx={{ width: "65%" }}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#00A9BB",
                    paddingBottom: 7,
                    paddingTop: 6,
                    alignItems: "center",
                  }}
                >
                  Create a New Account for Eligible Family
                </Typography>
              </Grid>

              <Grid container spacing={2}>
                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 1em 1em !important" }}
                >
                  <MOHArea />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 1em 1em !important" }}
                >
                  <PHMArea sx={{ padding: "1em 1em 1em 1em !important" }} />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 1em 1em !important" }}
                >
                  <TextField
                    required
                    placeholder="Wife's Name"
                    name="wifeName"
                    id="wifeName"
                    label="Wife's Name"
                    sx={{ width: "100%" }}
                    value={formik.values.wifeName}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 1em 1em !important" }}
                >
                  <TextField
                    required
                    placeholder="Husband's Name"
                    name="husbandName"
                    id="husbandName"
                    label="Husband's Name"
                    sx={{ width: "100%" }}
                    value={formik.values.wifeName}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 1em 1em !important" }}
                >
                  <TextField
                    required
                    placeholder="Email"
                    name="Email"
                    id="email"
                    label="Email"
                    sx={{ width: "100%" }}
                    value={formik.values.wifeName}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 1em 1em !important" }}
                >
                  <TextField
                    required
                    placeholder="Address"
                    name="Address"
                    id="Address"
                    label="Address"
                    sx={{ width: "100%" }}
                    value={formik.values.wifeName}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{ padding: "1em 1em 1em 1em !important" }}
                >
                  <TextField
                    required
                    placeholder="Telephone No"
                    name="Telephone No"
                    id="telephoneNo"
                    label="Telephone No"
                    sx={{ width: "100%" }}
                    value={formik.values.wifeName}
                    onChange={formik.handleChange}
                  />
                </Grid>

                {/* Repeat similar pattern for other form fields */}

                <Button
                  variant="contained"
                  sx={{
                    width: "95%",
                    mt: 2,
                    background: "#00A9BB",
                    alignItems: "center",
                    paddingLeft: "2",
                  }}
                  onClick={formik.handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Item>
          </Grid>
        </Box>
      </div>
    </Box>
  );
}

export default function MidwifeEligibleCoupleRegistrationForm() {
  return <CreateAccountFormValidation />;
}
