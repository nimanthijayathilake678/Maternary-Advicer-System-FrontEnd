import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function LetterFooter() {
  return (
    <Root>
      <Grid container>
        <Grid item xs={12}>
          <Item sx={{color:'white',backgroundColor: "#00A9BB", opacity: 0.7}}>
            <Divider>&copy; 2024, Maternity Advisor System</Divider>
          </Item>
        </Grid>
      </Grid>
    </Root>
  );
}
