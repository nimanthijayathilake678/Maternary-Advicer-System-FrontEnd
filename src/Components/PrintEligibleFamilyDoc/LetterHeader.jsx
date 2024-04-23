import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Logo from "../../Assest/logo.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
}));

const LetterHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="w-full bg-white text-black">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            sx={{ backgroundColor: "#00A9BB", opacity: 0.7, color: "white" }}
          >
            <Grid container>
              <Grid xs={1.5} sx={{ alignItems: "right" }}>
                <img src={Logo} alt="logo" />
              </Grid>
              <Grid xs={10.5}>
                <Grid xs={12} sx={{ textAlign: "center", paddingTop: 5 }}>
                  <Typography variant="h4">
                    Eligible Family Details Report{" "}
                  </Typography>
                  <Typography variant="h5">
                    Ministry of Health Office, Dikwalla
                  </Typography>
                  <Typography variant="h6">Mathara</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6} sx={{ textAlign: "left", paddingTop: 1 }}>
                <Typography sx={{ paddingLeft: 2, paddingBottom: 1 }}>
                  <b>Name : </b>K. G. Binishi Piyumika
                </Typography>
                <Typography sx={{ paddingLeft: 2, paddingBottom: 1 }}>
                  <b>Eligible No : </b>12
                </Typography>

                <Typography sx={{ paddingLeft: 2, paddingBottom: 2 }}>
                  <b>Email : </b>mataramoh@gmail.com
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ textAlign: "right", paddingRight: "4", paddingTop: 1 }}
              >
                <Typography sx={{ paddingRight: 2, paddingBottom: 1 }}>
                  <b>Date: </b>
                  {currentDateTime.toLocaleDateString()}
                </Typography>
                <Typography sx={{ paddingRight: 2, paddingBottom: 1 }}>
                  <b>Time : </b>
                  {currentDateTime.toLocaleTimeString()}
                </Typography>

                <Typography sx={{ paddingRight: 2, paddingBottom: 1 }}>
                  <b>Telephone No : </b>036 1234567
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid sx={12}>
            <Divider
              sx={{
                backgroundColor: "white",
                borderBottomWidth: 4,
                borderColor: "rgba(0, 169, 187, 0.7)",
                paddingBottom: 2,
              }}
            />
          </Grid>

          <Grid container></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LetterHeader;
