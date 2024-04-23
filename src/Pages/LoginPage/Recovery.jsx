import {
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import Theme from "../../Components/Theme";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import { validationSchemaRecoveryEmail } from "../../Pages/LoginPage/Validation";
import { validationSchemaOtp } from "../../Pages/LoginPage/Validation";
import { sendMail } from "../../Services/SendEmail";

const theme = Theme();

const Overly = styled(Stack)(({}) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, 0.7)",
  zIndex: 1000,
}));
export const BtnTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const ModelStack = styled(Stack)(({}) => ({
  zIndex: 1000,
}));

const UserTitleBox = styled(Stack)(({ theme }) => ({
  marginTop: "50px",
  marginBottom: "30px",
  width: 500,
  [theme.breakpoints.down("md")]: {
    width: 350,
  },
  textAlign: "center",
}));

const Styledstack = styled(Stack)(({ theme }) => ({
  width: 500,
  [theme.breakpoints.down("md")]: {
    width: 350,
  },
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Recovery({
  recoveryModel,
  setRecoveryModel,
  resetPasswordModelOn,
}) {
  const [email, setEmail] = useState(true);

  const [mobile, setMobile] = useState(false);

  const emailHandle = () => {
    setEmail(true);
    setMobile(false);
  };

  const mobileHandle = () => {
    setEmail(false);
    setMobile(true);
  };

  //define initial values
  const initialValuesEmail = {
    email: "",
    mobileNo: "",
  };

  //define onsubmit on send Otp
  const onSubmitEmail = (values) => {
    console.log(values);
    sendMail(values)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          resetPasswordModelOn();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //formik define send OTP
  const formik = useFormik({
    initialValues: initialValuesEmail,
    onSubmit: onSubmitEmail,
    validationSchema: validationSchemaRecoveryEmail,
  });

  return ReactDOM.createPortal(
    <Overly>
      <Stack justifyContent="center" alignItems="center" sx={{}}>
        <ModelStack
          sx={{
            backgroundColor: theme.palette.background.paper,
            marginTop: 11,
            marginBottom: 11,
            width: 600,
            height: 600, //725
            borderRadius: theme.shape.borderRadius,
            overflow: "hidden",
          }}
        >
          <Stack display="flex" direction="row" justifyContent="end">
            <Button variant="contained" onClick={() => setRecoveryModel(false)}>
              <Typography variant="h7">X</Typography>
            </Button>
          </Stack>

          <Stack alignItems="center" spacing={3}>
            <UserTitleBox>
              <Typography variant="h5" color="black">
                Recover Password
              </Typography>
            </UserTitleBox>
            <Styledstack>
              <Typography variant="h7" color="black">
                Select a recovery method to proceed
              </Typography>
            </Styledstack>
            <Styledstack direction="row">
              <ButtonGroup>
                <Button
                  variant={email ? "contained" : "outlined"}
                  sx={{
                    width: 150,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.main,
                    },
                  }}
                  onClick={emailHandle}
                >
                  <Typography variant="h7">Email</Typography>
                </Button>

                <Button
                  variant={mobile ? "contained" : "outlined"}
                  sx={{
                    width: 150,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.main,
                    },
                  }}
                  onClick={mobileHandle}
                >
                  <Typography variant="h7">Mobile</Typography>
                </Button>
              </ButtonGroup>
            </Styledstack>
            <Styledstack>
              {email && (
                <Typography variant="h8" color="black">
                  You will recieve an OTP to your email,to recover your account
                </Typography>
              )}
              {mobile && (
                <Typography variant="h8" color="black">
                  You will recieve an OTP to your Mobile number,to recover your
                  account
                </Typography>
              )}
            </Styledstack>

            <form onSubmit={formik.handleSubmit}>
              <Stack
                spacing={1.5}
                sx={{
                  width: 500,
                  alignItems: "center",
                }}
              >
                <Stack
                  sx={{
                    width: "80%",
                    [theme.breakpoints.down("md")]: {
                      width: "50%",
                    },
                  }}
                >
                  {email && (
                    <TextField
                      id="email"
                      name="email"
                      variant="outlined"
                      size="small"
                      placeholder="Enter your email"
                      helperText={formik.errors.email}
                      FormHelperTextProps={{
                        style: { color: theme.palette.error.main },
                      }}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      type="text"
                      sx={{
                        size: "small",
                        width: "100%",
                        borderRadius: theme.shape.borderRadius,
                        "&:hover": {
                          borderBlockColor: theme.palette.success.main,
                        },
                      }}
                    />
                  )}

                  {mobile && (
                    <TextField
                      id="mobile-no"
                      name="mobileNo"
                      variant="outlined"
                      size="small"
                      placeholder="Enter your mobile number"
                      helperText={formik.errors.mobileNo}
                      FormHelperTextProps={{
                        style: { color: theme.palette.error.main },
                      }}
                      value={formik.values.mobileNo}
                      onChange={formik.handleChange}
                      type="text"
                      sx={{
                        size: "small",
                        width: "100%",
                        borderRadius: theme.shape.borderRadius,
                        "&:hover": {
                          borderBlockColor: theme.palette.success.main,
                        },
                      }}
                    />
                  )}
                </Stack>

                <Stack
                  sx={{
                    width: "80%",
                    [theme.breakpoints.down("md")]: {
                      width: "50%",
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      width: "100%",
                      "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                      },
                    }}
                  >
                    <BtnTypography>Send OTP</BtnTypography>
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </ModelStack>
      </Stack>
    </Overly>,
    document.getElementById("portal-recovery")
  );
}

{
  /* <Styledstack>
              {email && (
                <TextField
                  id="email"
                  name="email"
                  variant="outlined"
                  size="small"
                  placeholder="Enter your email"
                  helperText={emailError}
                  FormHelperTextProps={{
                    style: { color: theme.palette.error.main },
                  }}
                  value={otpEmail}
                  onChange={(event) => setOtpEmail(event.target.value)}
                  type="text"
                  sx={{
                    size: "small",
                    width: "100%",
                    borderRadius: theme.shape.borderRadius,
                    "&:hover": {
                      borderBlockColor: theme.palette.success.main,
                    },
                  }}
                />
              )}

              {mobile && (
                <TextField
                  id="mobile-no"
                  name="mobile-no"
                  variant="outlined"
                  size="small"
                  placeholder="Enter your mobile number"
                  helperText={mobileError}
                  FormHelperTextProps={{
                    style: { color: theme.palette.error.main },
                  }}
                  value={otpMobile}
                  onChange={(event) => setOtpMobile(event.target.value)}
                  type="text"
                  sx={{
                    size: "small",
                    width: "100%",
                    borderRadius: theme.shape.borderRadius,
                    "&:hover": {
                      borderBlockColor: theme.palette.success.main,
                    },
                  }}
                />
              )}
            </Styledstack>

            <Styledstack>
              <Button
                variant="contained"
                onClick={sendOTPHandle}
                sx={{
                  width: "100%",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                <Typography variant="h7">Send OTP</Typography>
              </Button>
            </Styledstack>

            <Stack
              spacing={2}
              textAlign="left"
              sx={{
                width: 500,
                [theme.breakpoints.down("md")]: {
                  width: 350,
                },
              }}
            >
              <Typography variant="h7" color="black">
                Enter OTP
              </Typography>
            </Stack>

            <Styledstack>
              <TextField
                id="otp"
                name="otp"
                variant="outlined"
                size="small"
                placeholder="xxx-xxx"
                type="text"
                helperText={otpError}
                FormHelperTextProps={{
                  style: { color: theme.palette.error.main },
                }}
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                sx={{
                  size: "small",
                  width: "100%",
                  borderRadius: theme.shape.borderRadius,
                  "&:hover": {
                    borderBlockColor: theme.palette.success.main,
                  },
                }}
              />
            </Styledstack>

            <Styledstack sx={{}}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
                onClick={() => recoveryHandle()}
              >
                <Typography variant="h7">Recovery Password</Typography>
              </Button>
            </Styledstack>
          </Stack>
        </ModelStack>
      </Stack>
    </Overly>,
    document.getElementById("portal-recovery")
  );
} */
}
