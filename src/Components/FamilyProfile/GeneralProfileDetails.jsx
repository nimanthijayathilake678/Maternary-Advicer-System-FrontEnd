import {useState,useEffect} from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {apiClient} from "../../API/ApiServer";

export default function GeneralProfileDetails({data}) {
    const [personalInfo,setPersonalInfo] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await apiClient.get("/personalInfo/" + data.id);
            setPersonalInfo(response?.data);
            console.log("Personal Information " + response.data);
          } catch (err) {
            console.error(err);
          }
        };
        fetchData();
      }, [data?.id]);

      const calculateAge = (dob) => {
        const dobDate = new Date(dob);
        const currentDate = new Date();
    
        let age = currentDate.getFullYear() - dobDate.getFullYear();
    
        // Check if the birthday has occurred this year
        if (
          currentDate.getMonth() < dobDate.getMonth() ||
          (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())
        ) {
          age--;
        }
    
        return age;
      };
  
  return (
    <Box sx={{ width: "100%", boxShadow:' rgba(0, 0, 0, 0.16) 0px 1px 4px' , backgroundColor:'white'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={12}>
            <Grid container spacing={2} direction="column" sx={{alignItems:'center'}}>
                <Grid item xs={6} sx={{paddingTop:5}}>
                    <center>
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                    </center>
                </Grid>
                <Grid item xs={6} sx={{color: "#00A9BB" , fontWeight:'bold' , paddingBottom: 2}}>
                    Mrs . {data?.fullName}
                </Grid>    
            </Grid>

            <Grid container spacing={2} direction="column" sx={{color:'black'}}>
            <Grid item xs={12} sx={{textAlign: 'left' , paddingLeft:4}}> 
                    <span><b>Age - </b>{calculateAge(personalInfo?.w_dob)} years</span>
                </Grid>

                <Grid item xs={12} sx={{textAlign: 'left' , paddingLeft:4}}> 
                    <span><b>Husband's Name - </b>{personalInfo?.h_name}</span>
                </Grid>
                <Grid item xs={12} sx={{textAlign: 'left', paddingLeft:4}}> 
                    <span><b>Address - </b>{personalInfo?.address}</span>
                </Grid>
                <Grid item xs={12} sx={{textAlign: 'left' , paddingLeft:4}}> 
                    <span><b>Telephone No - </b>{data?.contactNo}</span>
                </Grid>
                <Grid item xs={12} sx={{textAlign: 'left' , paddingLeft:4, paddingBottom:5}}> 
                    <span><b>Email - </b>{data?.email}</span>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
