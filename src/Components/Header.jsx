import { Typography, Box, createTheme } from "@mui/material";
import React from 'react';


const Header = ({title, subtitle}) => {
    const theme = createTheme();
  return (
    <Box mb="20px">
          <Typography
            variant="h5"
            color={"#000"}
            fontWeight="bold"
            sx={{ m: "0 0 5px 0" }}
          >
            {title}
          </Typography>
          <Typography variant="h8" color={theme.palette.primary.main}>
            {subtitle}
          </Typography>
        </Box>
  )
}

export default Header