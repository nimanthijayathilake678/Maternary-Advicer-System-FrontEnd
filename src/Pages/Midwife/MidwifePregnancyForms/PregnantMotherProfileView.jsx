import React from "react";
import Header from "../../../Components/Header";
import Box from "@mui/material/Box";
import { InputBase,IconButton, Typography, Divider, Grid } from "@mui/material";
import { Search } from "@mui/icons-material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';


const PregnantMotherProfileView = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  // Use state to track whether forms have been filled
  const [formsFilled, setFormsFilled] = React.useState({
 
    screeningForm: true, // Example: Syphilis Screening form is not filled
    tetanusForm:true,

  });
  return (
    <Box paddingBottom={20}>
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Mother's Profile"/>

            </Box>
      

{/* Main content */}
<Box sx={{ display: "flex", flexDirection: "column",  bgcolor:"#e4feff"}} ml={5} mr={5}>
      <Grid container item spacing={2}  sx={{ flex: "20%"}} width={"100%"} >
        <Grid item xs={4}>
        <Typography color="#00a9bb" textAlign="left" fontWeight={"bold"}>Eligible Registration No - 121</Typography>

        </Grid>
        <Grid item xs={8}  >
        <Typography color="#00a9bb" textAlign="right" fontWeight={"bold"}>Division of Regional Ministry of Health Service - Matara<br/>MOH Area -Dickwella<br/>PHM Area - Dickwella</Typography>

        </Grid>

      </Grid>
      <Divider sx={{boxShadow: '0px 3px 5px rgba(0, 0, 0,0.1)'}}/>
      <Box sx={{ flex: "80%"}}>
            <Grid container item spacing={2}>
                {/* profile view */}
                <Grid item xs={4} border={1}  borderRadius={2} mt={0} m={5} bgcolor={'white'}>
                    <Typography>Profile View</Typography>
                </Grid>

                <Grid container  spacing={2} item xs={6} border={1}  borderRadius={2} mt={0} m={5}  bgcolor={'white'}>
                        <Grid item xs={6} width={'100%'}>
                            <List component="nav" aria-label="secondary mailbox folder">
                            <Typography variant='h6' color="#2a777c">On pregnancy Details</Typography>
                            
                                <ListItemButton
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}
                                >
                                    <Link to="/fieldClinicForm" style={{ textDecoration: 'none' , color: 'black'}}>
                                    <ListItemText primary="Field Clinic Information" />
                                    </Link>
                                </ListItemButton>
                            

                            <Divider/>
                            
                            <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                            >
                            <Link to="/screeningForm" style={{ textDecoration: 'none' , color: 'black'}}>

                            <ListItemText primary="Syphilis & HIV Screening Tests" />
                            </Link>
                            {formsFilled.screeningForm && ( 
                            <ListItemIcon>
                                <Checkbox checked color="primary" />
                            </ListItemIcon>
                            )}
                            </ListItemButton>
                            <Divider/>
                            
                            <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                            >
                            <Link to="/tetanusForm" style={{ textDecoration: 'none' , color: 'black'}}>
                            <ListItemText primary="Tetanus Toxoid immunization" />
                            </Link>
                            {formsFilled.tetanusForm && ( 
                            <ListItemIcon>
                                <Checkbox checked color="primary" />
                            </ListItemIcon>
                            )}
                            </ListItemButton>
                            <Divider/>

                            <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                            >
                            <Link to="/sessionAttendanceForm" style={{ textDecoration: 'none' , color: 'black'}}>
                            <ListItemText primary="Attendance at Antenatal Sessions" />
                            </Link>
                            {formsFilled.sessionAttendanceForm && ( 
                            <ListItemIcon>
                                <Checkbox checked color="primary" />
                            </ListItemIcon>
                            )}
                            </ListItemButton>

                            <Divider/>

                            <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                            >
                            <Link to="/materialForm" style={{ textDecoration: 'none' , color: 'black'}}>
                            <ListItemText primary="IEC Materials" />
                            </Link>
                            {formsFilled.materialForm && ( 
                            <ListItemIcon>
                                <Checkbox checked color="primary" />
                            </ListItemIcon>
                            )}
                            </ListItemButton>

                            <Divider/>
                            <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                            >
                            <Link to="/familyPlanningForm" style={{ textDecoration: 'none' , color: 'black'}}>
                            <ListItemText primary="Family Planning" />
                            </Link>
                            {formsFilled.familyPlanningForm && ( 
                            <ListItemIcon>
                                <Checkbox checked color="primary" />
                            </ListItemIcon>
                            )}
                            </ListItemButton>
                        </List>
                        
                </Grid>
                
                <Grid item xs={6} width={'100%'}>
                            <List component="nav" aria-label="secondary mailbox folder">
                            <Typography variant='h6' color="#2a777c">Post Pregnancy Details</Typography>
                            
                                <ListItemButton
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}
                                >
                                    <Link to="/deliveryCare" style={{ textDecoration: 'none' , color: 'black'}}>
                                    <ListItemText primary="Delivery & Postnatal Care" />
                                    </Link>
                                </ListItemButton>
                                <Divider/>

                                <ListItemButton
                                    selected={selectedIndex === 0}
                                    onClick={(event) => handleListItemClick(event, 0)}
                                >
                                    <Link to="/postpartumFieldCare" style={{ textDecoration: 'none' , color: 'black'}}>
                                    <ListItemText primary="Post Partum Field Care" />
                                    </Link>
                                </ListItemButton>
                            
                        </List>

                </Grid>
                
                </Grid>
                {/* <Divider sx={{boxShadow: '0px 3px 5px rgba(0, 0, 0,0.1)'}}/> */}

            </Grid>
      </Box>
    </Box>
        

    </Box>
    </Box>
  );
};

export default PregnantMotherProfileView;

