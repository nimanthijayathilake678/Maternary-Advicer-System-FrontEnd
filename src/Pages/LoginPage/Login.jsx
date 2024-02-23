import { styled } from "@mui/system";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Theme from "../../Components/Theme"; //**** Special import*/
import { ThemeProvider } from "@mui/material";
import login from "../../Assest/login.jpg";
import login2 from "../../Assest/login2.jpg";
import { Padding, Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import Recovery from "./Recovery";
import Reset from "./Reset";
import SuccessAlert from "../../Components/SuccessAlert";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const theme = Theme();
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 900,
  maxHeight: "80vh",
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 4,
  boxShadow: theme.shadows[6],
  [theme.breakpoints.down("md")]: {
    width: "900",
    maxHeight: "70vh",
  },
}));

const UserTitleBox = styled(Stack)(({ theme }) => ({
  marginTop: "100px",
  marginBottom: "70px",
  width: 500,
  [theme.breakpoints.down("md")]: {
    width: 350,
  },
  textAlign: "center",
}));

const UserText = styled(Stack)(({ theme }) => ({
  textAlign: "left",
  width: 500,
  [theme.breakpoints.down("md")]: {
    width: 350,
  },
}));

const UserInputBox = styled(Stack)(({ theme }) => ({
  textAlign: "left",
  width: 500,
  [theme.breakpoints.down("md")]: {
    width: 350,
  },
}));

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [recoveryModel, setRecoveryModel] = useState(false);

  const [reset, setReset] = useState(false);

  const [resetPwd, setResetPwd] = useState(true);

  const [alert, setAlert] = useState(false);

  const [custom, setCustom] = useState(false);

  const [responseAlert, setResponseAlert] = useState(false);

  const [position, setPosition] = useState();

  const authContext = useAuth();

  const resetPasswordModelOn = () => {
    setReset(true);
    setRecoveryModel(false);
  };

  const openAlertSuccess = () => {
    if (resetPwd) {
      setAlert(true);
      setReset(false);
    }
  };

  const closeCustom = () => {
    setCustom(false);
  };

  const responseSuccessAlert = () => {
    setResponseAlert(true);
    setCustom(false);
  };

  //validations

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  async function onSubmit() {
    const response = await authContext.login(username, password);
    console.log(response.data.user);
    const position = response.data.user.position;
    if (response.status === 200) {
      if (position == "MOH") {
        navigate("/moh");
      } else if (position == "Midwife") {
        navigate("/midwife");
      } else if (position == "Family") {
        navigate("/family");
      } else if (position == "VogDoctor") {
        navigate("/vog");
      } else {
        navigate("/family/babyDashboard");
      }
    } else {
      console.log("Error: login credentials are wrong");
    }
  }

  // async function handleNavigate(position) {
  //   console.log("Check omside the login");
  //   console.log(await authContext.getPosition());
  //   console.log(authContext.position);
  //   if (position == "MOH") {
  //     navigate("/home");
  //   } else if (position == "Midwife") {
  //     navigate("/midwife");
  //   }
  //   // navigate("/midwife");
  //   return;
  // }

  return (
    <Box
      flex="45%"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: theme.shape.borderRadius * 4, //6
        borderBottomLeftRadius: theme.shape.borderRadius * 4, //6
        [theme.breakpoints.down("sm")]: {
          height: 300,
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <Stack
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: 6,
            marginBottom: 6,
            backgroundColor: theme.palette.background.normal,
          }}
        >
          <DemoPaper elevation={6}>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-between"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  display: "block",
                },
              }}
            >
              <Box
                flex="45%"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: theme.palette.primary.paper,
                  height: "80vh",
                  borderTopLeftRadius: theme.shape.borderRadius * 4, //6
                  borderBottomLeftRadius: theme.shape.borderRadius * 4, //6
                  [theme.breakpoints.down("sm")]: {
                    height: 300,
                  },
                }}
              >
                <img
                  src={login2}
                  alt="Login_image"
                  width="100%"
                  height="100%"
                  sx={{
                    [theme.breakpoints.down("md")]: {
                      width: "200px",
                      height: "160px",
                    },
                  }}
                ></img>
              </Box>

              <Box
                flex="55%"
                sx={{
                  height: "80vh",
                  borderTopRightRadius: theme.shape.borderRadius * 4,
                  borderBottomRightRadius: theme.shape.borderRadius * 4,
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <Stack display="flex" direction="column" alignItems="center">
                  <Box>
                    <UserTitleBox>
                      <Typography variant="h3" color="primary">
                        Welcome!
                      </Typography>
                    </UserTitleBox>

                    <Stack
                      display="flex"
                      direction="column"
                      spacing={2}
                      sx={{ paddingRight: "5px", paddingLeft: "4vh" }}
                    >
                      <UserText>
                        <Typography variant="h5" color="primary">
                          Username
                        </Typography>
                      </UserText>

                      <UserInputBox>
                        <TextField
                          id="username"
                          name="username"
                          variant="outlined"
                          placeholder="Enter your username"
                          size="small"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          helperText={error.uname}
                          FormHelperTextProps={{
                            style: { color: theme.palette.error.main },
                          }}
                          sx={{
                            size: "small",
                            width: "93%",
                            borderRadius: theme.shape.borderRadius,
                            "&:hover": {
                              borderBlockColor: theme.palette.success.main,
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <PersonIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </UserInputBox>

                      <UserText>
                        <Typography variant="h5" color="primary">
                          Password
                        </Typography>
                      </UserText>

                      <UserInputBox>
                        <TextField
                          id="pwd"
                          name="password"
                          variant="outlined"
                          size="small"
                          helperText={error.password}
                          FormHelperTextProps={{
                            style: { color: theme.palette.error.main },
                          }}
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          sx={{
                            placeholder: "Enter your password",
                            size: "small",
                            width: "93%",
                            borderRadius: theme.shape.borderRadius,
                            "&:hover": {
                              borderBlockColor: theme.palette.success.main,
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  edge="end"
                                  onClick={() => setShowPassword(true)}
                                  onBlur={() => setShowPassword(false)}
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </UserInputBox>
                    </Stack>

                    <Stack
                      display="flex"
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        width: 500,
                        marginTop: "10px",
                        marginBottom: "40px",
                        [theme.breakpoints.down("md")]: {
                          width: 350,
                        },
                      }}
                    >
                      <Box
                        flex="50%"
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <Button
                          variant="text"
                          sx={{ color: theme.palette.link.main }}
                          onClick={() => setRecoveryModel(true)}
                        >
                          <Typography variant="subtitle2">
                            Reset Password
                          </Typography>
                        </Button>

                        {recoveryModel && (
                          <Recovery
                            recoveryModel={recoveryModel}
                            setRecoveryModel={setRecoveryModel}
                            resetPasswordModelOn={resetPasswordModelOn}
                          />
                        )}
                        {reset && (
                          <Reset
                            reset={reset}
                            setReset={setReset}
                            openAlertSuccess={openAlertSuccess}
                          />
                        )}
                        {alert && <SuccessAlert setAlert={setAlert} />}
                      </Box>
                    </Stack>

                    <Stack sx={{ alignItems: "center" }}>
                      <Button
                        variant="contained"
                        sx={{
                          marginTop: "2px",
                          width: "60vh",
                          height: 40,
                          [theme.breakpoints.down("md")]: {
                            width: 350,
                            height: 35,
                          },
                          color: "White",
                          "&:hover": {
                            backgroundColor: theme.palette.secondary.main,
                          },
                        }}
                        onClick={onSubmit}
                      >
                        <Typography variant="h6">Login</Typography>
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </DemoPaper>
        </Stack>
      </ThemeProvider>
    </Box>
  );
};

export default Login;
