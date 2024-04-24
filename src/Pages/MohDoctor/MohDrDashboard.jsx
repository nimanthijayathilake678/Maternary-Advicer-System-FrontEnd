import React from "react";
import { Box, IconButton } from "@mui/material";
import Header from "../../Components/Header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Upcomings from "../../Components/Upcomings";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import HappyFamily from "../../Assest/Lottie/HappyFamily.json";
import referal from '../../Assest/Lottie/referal.json';
import baby from '../../Assest/Lottie/baby.json';
import medicare from '../../Assest/Lottie/medicare.json';
import reports from '../../Assest/Lottie/reports.json';
import pregnant from '../../Assest/Lottie/pregnant.json';
import Lottie from 'lottie-react';
import "../../css/MohDoctor/MohDrDash.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const MohDrDashboard = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState("one");
    const { id } = useParams();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleNavigation = (url) => {
      navigate(url);
    };
  
    return (
        <Box ml="20px"  >
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Hello - MOH Dr" subtitle="Welcome to your dashboard" />

                {/* SEARCH BOX */}
            <Box display="flex" bgcolor={"#e4e5e2"} borderRadius={"3px"} marginRight={"20px"}>
                <InputBase sx={{ml:1,flex:1}} placeholder="Search"></InputBase>
                <IconButton type="button" sx={{p:1}}> 
                    <Search />
                </IconButton>
            </Box>
            </Box>
            
            {/* Main boxes */}
            <div className="main-cards">
                <div>
                    <Lottie animationData={medicare} />
                </div>

                <div className="cards">
                    <div className="card-inner">
                        <h6>ELIGIBLE FAMILIES</h6>
                        <Lottie style={{height:80}} animationData={HappyFamily}/>
                    </div>
                </div>
                

                <div className="cards">
                    <div className="card-inner">
                        <h6 
                            onClick={() =>
                                handleNavigation("/mohdrdash/pregnat_moms")
                              }
                        >REGISTERED PREGNANT MOTHERS</h6>
                        <Lottie style={{height:80}} animationData={pregnant}/>
                    </div>
                </div>
                
                <div className="cards">
                    <div className="card-inner">
                        <h6>BABIES</h6>
                        <Lottie style={{height:90}} animationData={baby}/>
                    </div>
                </div>
                <div className="cards">
                    <div className="card-inner">
                        <h6>REFERALS</h6>
                        <Lottie style={{height:80}} animationData={referal}/>
                    </div>
                </div>

                
            </div>

            <div className="second">
            
                <div className="calendar">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </div>
             

            </div>

        </Box>
    );

};
export default MohDrDashboard;
