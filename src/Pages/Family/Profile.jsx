import {useState,useEffect} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import GeneralProfileDetails from "../../Components/FamilyProfile/GeneralProfileDetails";
import OtherInformation from "../../Components/FamilyProfile/OtherInformation";
import DisplaySidebar from "../../Components/DisplaySidebar";
import { Link,useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { apiClient } from "../../API/ApiServer";


export default function Profile() {
  const {id} = useParams();
  const [generalData,setGeneralData]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/newuser/" + id);
        setGeneralData(response?.data);
        console.log("General data " + response.data);

      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="text-black bg-white w-full ">
      <Box sx={{ paddingLeft: 6, display: "flex", alignItems: "center" }}>
        <Grid>
          <DisplaySidebar />
        </Grid>
        <Grid>
          <Grid
            container
            spacing={2}
            sx={{ color: "#00A9BB", alignItems: "center" }}
          >
            <Grid item xs={6}>
              <Typography
                variant="h4"
                sx={{
                  paddingBottom: 4,
                  paddingTop: 6,
                  alignItems: "center",
                }}
              >
                My Profile
              </Typography>
            </Grid>

            <Grid className=" absolute top-10 right-12">
              <Button
                to="./print"
                component={Link}
                variant="contained"
                sx={{ backgroundColor: "#00A9BB" }}
              >
                Print Document
              </Button>
            </Grid>
            <Grid
              item
              xs={11}
              sx={{ boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px " }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  height: "15rem",
                  backgroundColor: "#E4FEFF",
                  zIndex: "50",
                  fontWeight: "bold",
                }}
              >
                <Grid item xs={6}>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      textAlign: "left",
                      alignItems: "center",
                      color: "#00A9BB",
                    }}
                  >
                    <Grid item xs={12} sx={{ paddingLeft: 3 }}>
                       Eligible Registration No - {generalData?.id}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      textAlign: "right",
                      color: "#00A9BB",
                      paddingRight: 3,
                    }}
                  >
                    <Grid item xs={12}>
                      Division of Regional Ministry of Health Service - Matara
                    </Grid>
                    <Grid item xs={12}>MOH Area - Matara</Grid>
                    <Grid item xs={12}>PHM Area - {generalData?.area}</Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                sx={{ position: "relative", top: "-8rem" }}
                alignItems="stretch"
              >
                <Grid
                  item
                  xs={3}
                  sx={{ paddingTop: 3, paddingBottom: 3, paddingLeft: 1 }}
                >
                  <GeneralProfileDetails data={generalData}/>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{
                    paddingTop: 3,
                    paddingBottom: 3,
                    paddingLeft: 2,
                    paddingRight: 3,
                  }}
                >
                  <OtherInformation id={id} data={generalData?.fullName} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
