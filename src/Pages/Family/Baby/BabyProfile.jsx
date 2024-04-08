import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Import Grid from Material-UI
import Lottie from "react-lottie";
import babyProfile from "../../../Assest/Lottie/babyProfile.json";
import BabyDash from "../../../Assest/Lottie/BabyDash.json";
import BabyProfileForm1 from "../../../Components/BabyProfileComponents/BabyProfileForm1";
import SideBar from "../../../Components/SideBar";
import { Margin } from "@mui/icons-material";
import BabyGirl from "../../../Assest/Lottie/BabyGirl.json";
import BabyItem from "../../../Assest/Lottie/BabyItem.json";
import DisplaySidebar from "../../../Components/DisplaySidebar";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        flexDirection="column"
      >
        <Grid container spacing={3}>
          <Grid item xs={3} display={"flex"}>
            <DisplaySidebar />
          </Grid>
          <Grid
            item
            xs={9}
            style={{ paddingTop: "100px", paddingRight: "120px" }}
          >
            <div>
              <span className="text-xl text-[#2A777C] text-center font-bold">
                Baby Health
              </span>
            </div>
            <Box
              sx={{
                width: "100%",
                border: "1px solid #ccc",
                padding: "80px",
                display: "flex",
              }}
            >
              <Grid display={"flex"}>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                      }}
                    >
                      <Tabs value={value} onChange={handleChange}>
                        <Tab label="Basic Details" {...a11yProps(0)} />
                        <Tab label="Birth Infromation" {...a11yProps(1)} />
                        <Tab label="Neonatal Examination" {...a11yProps(2)} />
                        <Tab label="Special care " {...a11yProps(3)} />
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                      <BabyProfileForm1 />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <BabyProfileForm1 />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                      <BabyProfileForm1 />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                      <BabyProfileForm1 />
                    </CustomTabPanel>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
