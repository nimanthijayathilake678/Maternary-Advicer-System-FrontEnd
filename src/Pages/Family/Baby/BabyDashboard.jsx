import React from "react";
import { Box, IconButton } from "@mui/material";
import Header from "../../Components/Header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Upcomings from "../../Components/Upcomings";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import baby3 from '../../Assest/Lottie/baby3.json';
import baby from '../../Assest/Lottie/baby.json';
import baby2 from '../../Assest/Lottie/baby2.json';
import Lottie from 'lottie-react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link } from "react-router-dom";
import test from "../dashboard/test";
import "../../css/Baby/BabyDash.css";

const BabyDashboard = () => {
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    

    return (
        <Box ml="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Hello - Baby" subtitle="Welcome to your dashboard" />

                {/* SEARCH BOX */}
                <Box display="flex" bgcolor={"#e4e5e2"} borderRadius={"3px"} marginRight={"20px"}>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"></InputBase>
                    <IconButton type="button" sx={{ p: 1 }}>
                        <Search />
                    </IconButton>
                </Box>
            </Box>

            {/* Main boxes */}
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(5,1fr)',
                gap:'5px',
                margin:'15px 15px 0',
                justifyContent:'center'}}>
            <div>
                <Lottie style={{ height: 200 }} animationData={baby2} />
            </div>

            
            

            <div className="cards">
                <div className="card-inner">
                    <h8>BASIC INFORMATION</h8>
                    <Lottie style={{ height: 100 }} animationData={baby} />
                </div>
            </div>
            <div className="cards">
                <div className="card-inner">
                    <h8>BIRTH INFORMATION</h8>
                    <Lottie style={{ height: 70 }} animationData={baby3} />
                </div>
            </div>

        </div>

        <Box sx={{width:"100%"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="Neonatal Examination" label="Neonatal Examination" LinkComponent={Link} to='/test'/>
        <Tab value="Reasons for spaecial care" label="Reasons for spaecial care" />
        <Tab value="Immunization" label="Immunization" />
        <Tab value="Vitamins" label="Vitamins" />
        <Tab value="Micro Nutritions" label="Micro Nutritions" />
        <Tab value="Baby Growth-weight chart" label="Baby Growth-weight chart" />
        <Tab value="Baby eye sight" label="Baby eye sight" />
        <Tab value="Baby Hearing" label="Baby Hearing" />
        <Tab value="Baby Development" label="Baby Development" />   
        <Tab value="Baby Health Record" label="Baby Health Record" /> 
        <Tab value="Baby Allergies" label="Baby Allergies" />   

      </Tabs>
    </Box>

        {/* second row */}
        <div style={{
                display:'grid',
                gridTemplateColumns:'1fr 2fr 2fr',
                gap:'5px',
                margin:'5px 15px 0',
                justifyContent:'center'}}>

            
                <div className="calendar" style={{gridRow:'1/span 2'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </div>  
                <div className="upcomingClinics" style={{gridRow:'1/span 5'}}>
                    <div marginLeft="20px">
                        <h3> Upcoming Clinics</h3>
                    </div>
                    <div><Upcomings /></div>

                </div>    


        


                

            </div>

        </Box>
    );

};
export default BabyDashboard;
