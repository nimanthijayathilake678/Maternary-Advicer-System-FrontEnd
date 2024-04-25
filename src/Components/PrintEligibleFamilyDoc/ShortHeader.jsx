import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ShortHeader = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Item
            sx={{ color: "white", backgroundColor: "#00A9BB", opacity: 0.7 }}
          >
            <Grid container>
                <Grid item xs={6} sx={{textAlign:'left' , paddingLeft: 2}}>
                    {currentDateTime.toLocaleDateString()}
                </Grid>

                <Grid item xs={6} sx={{textAlign:'right' ,  paddingRight: 2}}>Page 2</Grid>

            </Grid>
            
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShortHeader;
