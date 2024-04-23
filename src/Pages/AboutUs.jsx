import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material";
import { Container } from "@mui/material";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import hospital from "./About/image/BaseHospital.jpg";
import special from "./About/image/special campaigns.jpg";
import moh from "./About/image/moh.png";
import primary from "./About/image/primary medical care unit.jpg";
import baseHospital from "./About/image/BaseHospital.jpg";
import DivitionalHospital from "./About/image/divisional hospital.jpg";
import map from "./About/image/Image of The Digital Map.jpg";
import babylogo from "../Assest/msteee.png";
import "./About/about.css";
import { PaddingTwoTone } from "@mui/icons-material";
import Nav from "../Components/Nav";

export default function Janith() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Nav />
      <div class="grid-container-about">
        <div class="grid-item item1"></div>
        <div class="grid-item item2">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  style={{ paddingLeft: "35vw" }}
                >
                  <Tab label="OVERVIEW" value="1" />
                  <Tab label="INSTITUTES" value="2" />
                  <Tab label="DISTRIBUTION" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box
                  sx={{
                    m: 1,
                    p: 1,
                    bgcolor: (theme) =>
                      theme.palette.mode === "dark" ? "#101010" : "#fff",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                    border: "1px solid",
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    //  maxWidth:'70vw',
                    // height:'90vh',
                    padding: "20px",
                  }}
                >
                  <div
                    className="grid-aboutHeader"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h1
                        style={{
                          fontFamily: "Garamond",
                          color: "#2A777C",
                          fontSize: "32px",
                          margin: 0,
                        }}
                      >
                        MATERNITY ADVISOR SYSTEM
                      </h1>
                    </div>
                    <img
                      src={babylogo}
                      alt="Login_image"
                      style={{ flex: 1, maxWidth: "300px", height: "auto" }}
                    />
                  </div>

                  <p
                    className="text-about"
                    style={{
                      color: "#002828",
                      fontFamily: "monospace",
                      paddingTop: "70px",
                    }}
                  >
                    The Maternity Advisor System project aims to address the
                    challenges faced in maternal and baby healthcare by
                    developing a comprehensive digital solution. The goals
                    include improving data management, medical record keeping,
                    pregnancy tracking, and communication among midwives,
                    parents, and health officials. The project seeks to enhance
                    the efficiency and quality of care by transitioning from
                    manual procedures to a computerized system.
                    <br></br>
                    <br></br>
                    The system will consist of a cross-platform mobile
                    application and web application. The mobile app will cater
                    to parents, providing them with access to information,
                    updates, and resources related to pregnancy and baby care.
                    The web interface will be used for data monitoring by health
                    officials and for retrieving specific data.
                    <br></br>
                    <br></br>
                    Key functionalities of the system include user
                    authentication, role-based access control, registration and
                    management of mothers and babies, tracking of pregnancy
                    milestones and baby growth, direct communication between
                    midwives and parents, and generation of monthly summary
                    reports for health officials. The system aims to streamline
                    processes, reduce paperwork, improve data accuracy, and
                    enhance communication and accessibility of healthcare
                    information.
                    <br></br>
                    <br></br>
                    Some aspects that will not be addressed in the project
                    include integration with private medical services beyond the
                    babies' first five years, integration with hospital systems
                    for prescription administration, and integration with the
                    World Health Organization (WHO) system for data
                    representation.
                    <br></br>
                    <br></br>
                    Overall, the Maternity Advisor System project seeks to
                    revolutionize maternal and baby healthcare by leveraging
                    digital technologies to overcome the limitations of manual
                    processes, ensuring better care and outcomes for mothers and
                    babies.
                  </p>
                </Box>
              </TabPanel>

              <TabPanel value="2">
                <div class="grid-container-about">
                  <div class="grid-item item5">
                    <Container maxWidth="lg">
                      <h1
                        style={{
                          fontFamily: "Garamond",
                          color: "#2A777C",
                          fontSize: "32px",
                          margin: 0,
                        }}
                      >
                        Health Institutes in Matara District
                      </h1>
                      <div class="flex-container">
                        <div class="flex-item">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image={hospital}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                District General Hospitals
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <ul class="list">
                                  <li>DGH Matara</li>
                                  <li>New DGH Matara (kamburugamuwa)</li>
                                </ul>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>
                          </Card>
                        </div>

                        <div class="flex-item">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image={special}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                Special campaigns
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <ul class="list">
                                  <li>Anti Filaria Unit</li>
                                  <li>Anti Malaria Unit</li>
                                  <li>Anti-Rabies Unit</li>
                                  <li>Leprosy Unit</li>
                                  <li>STD Unit</li>
                                  <li>Chest Clinic</li>
                                </ul>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>
                          </Card>
                        </div>

                        <div class="flex-item">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image={moh}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                MOH
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <ul class="list">
                                  <li>
                                    Akuressa,Athuraliya,Dewinuwara,Dickwella
                                  </li>
                                  <li>
                                    Hakmana,Kotapola,Kamburupitiya,Kirinda
                                  </li>
                                  <li>
                                    Puhulwella,Malimbada, Matara MC, Morawaka
                                  </li>
                                  <li>
                                    Mulatiyana,Pasgoda,Thihagoda, Weligama
                                  </li>
                                  <li>STD Unit</li>
                                  <li>Chest Clinic</li>
                                </ul>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>
                          </Card>
                        </div>
                      </div>

                      <div class="flex-container">
                        <div class="flex-item">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image={primary}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                Primary Medical Care Unit
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <ul class="list">
                                  <li>
                                    Kotapola,Galbokka,Kamburugamuwa,Horagoda
                                  </li>
                                  <li>Dewinuwara,Mirissa,Midigama,Kapugama </li>
                                  <li>Rotumba,Denipitiya, Hakmana</li>
                                  <li>Kakanadura,Dehigaspe Beralapanathara</li>
                                  <li>
                                    Makandura,Thelijjawila,Yatiyana,Kirinda
                                  </li>
                                  <li>
                                    Deranagala,Maramba,Thihagoda,Pallegama
                                  </li>
                                </ul>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>
                          </Card>
                        </div>

                        <div class="flex-item">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image={baseHospital}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                Base Hospitals
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <ul class="list">
                                  <li>
                                    Base Hospital (Type A) - Kamburupitiya
                                  </li>
                                  <li>Base Hospital (Type B) - Deniyaya</li>
                                </ul>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>
                          </Card>
                        </div>

                        <div class="flex-item">
                          <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              image={DivitionalHospital}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                Divisional Hospital
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                <ul class="list">
                                  <h6>Divisional Hospital Type A</h6>

                                  <li>Divisional Hospital - Akuressa</li>
                                  <li>Divisional Hospital - Mawarala</li>
                                  <br></br>

                                  <h6>Divisional Hospital Type B</h6>

                                  <li>Divisional Hospital - Dickwella</li>
                                  <li>Divisional Hospital -Weligama</li>
                                  <li>Divisional Hospital - Gangodagama</li>
                                  <li>Divisional Hospital - Narawelpita</li>
                                  <li>Divisional Hospital - Morawaka</li>
                                  <li>Divisional Hospital - Urubokka</li>
                                  <li>Divisional Hospital - Deniyaya</li>
                                  <br></br>

                                  <h6>Divisional Hospital Type C</h6>

                                  <li>Divisional Hospital - Talalla</li>
                                  <li>Divisional Hospital - Urugamuwa</li>
                                  <li>Divisional Hospital - Ruhunugamuwa</li>
                                </ul>
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small">Share</Button>
                              <Button size="small">Learn More</Button>
                            </CardActions>
                          </Card>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value="3">
                <div class="grid-container-about">
                  <div class="grid-item item6">
                    <Figure>
                      <Figure.Image
                        src={map}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Figure>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
}
