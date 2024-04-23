import { Box, IconButton } from "@mui/material";
import Header from "../../Components/Header";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Upcomings from "../../Components/Upcomings";
import InputBase from "@mui/material/InputBase";
import { Search } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import "./DentalDrDash.css";

const DentistDashbord = () => {
    
  
    return (
        <Box ml="20px"  >
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Header title="Hello - Dental Dr" subtitle="Welcome to your dashboard" />

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
            
                <NavLink to="/DentalCare">
                <div className="cards">
                    <div className="card-inner">
                        <h8>ADD DENTAL CARE DETAILS</h8>
                        {/* <Lottie style={{height:110}} animationData={HappyFamily}/> */}
                    </div>
                </div>
                </NavLink>

                <NavLink to="/DentalShow">
                <div className="cards">
                    <div className="card-inner">
                        <h8>SHOW DENTAL CARE DETAILS</h8>
                        {/* <Lottie style={{height:120}} animationData={pregnant}/> */}
                    </div>
                </div>
                </NavLink>
                
                <div className="cards">
                    <div className="card-inner">
                        <h8>MORE</h8>
                        {/* <Lottie style={{height:90}} animationData={baby}/> */}
                    </div>
                </div>
                
                
                
            </div>

            <div className="second">
            <div className="calendar">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </div>
                
                <div className="upcomingClinics">
                    <div marginLeft= "20px">
                    <h3 > Upcoming Clinics</h3>
                    </div>
                    <div><Upcomings/></div>
                  
                </div> 

            </div>

        </Box>
    );

};
export default DentistDashbord;