import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Theme from "../../Components/Theme";

function GeneralInformation({handleNext}) {
  const [generalInformationData, setGeneralInformationData] = useState({
    id: "",
    nic: "",
    contactNo: "",
    email: "",
    area: "",
  });
  const inputRef = useRef(null);
  const [user,setUser] = useState("");
  const auth = useAuth();
  const state = false;

  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = validateForm(generalInformationData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Perform signup logic here with signupData
    console.log("Signup data:", generalInformationData);
  };

  

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [method,setMethod] = useState("post");
  const url = "/newuser/";
  const theme = Theme();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOpen(true);
   

    // Clear validation errors when the user starts typing
    setErrors({});
  };

  const validateForm = (data) => {
    let errors = {};

    // Perform your validations here
    if (!data.babyRegNum) {
      errors.babyRegNum = "Baby Registration Number is required";
    }

    // Add validations for other fields...

    return errors;
  };

  
  //onSubmit={handleSubmit}
  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await apiClient.get("/newuser/" + auth.user.id);
        setGeneralInformationData(response?.data);
        if(response.data.id){
          setMethod("put")
          setUser(response.data.id)
        }
        console.log("General Information " + response.data);

      } catch (err) {
        console.error(err);
      }
    };
    getFormData();
  }, []);

  const handleClick = () =>{
    handleNext(url,method,generalInformationData,user,state)
  }

  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== "") {
      inputRef.current.focus();
    }
  }, [generalInformationData]);

  //onSubmit={handleSubmit}
  return (
    <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
            paddingY:10
          }}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="auto"
          flexDirection="column"
        >
          <Grid container spacing={6} sx={{ width: "90%" }}>
            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="MOH Area"
                name="area"
                label="MOH Area"
                value={generalInformationData?.area}
                sx={{ width: "100%" }}
                ref={inputRef}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Telephone"
                name="contactNo"
                value={generalInformationData?.contactNo}
                label="Telephone"
                sx={{ width: "100%" }}
                ref={inputRef}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Eligible Registration No"
                name="id"
                label="Eligible Registration No"
                value={generalInformationData?.id}
                sx={{ width: "100%" }}
                ref={inputRef}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
              <TextField
                required
                placeholder="Email"
                name="email"
                label="Email"
                sx={{ width: "100%" }}
                value={generalInformationData?.email}
                ref={inputRef}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={handleClick}
                              sx={{
                                mt: 1,
                                mr: 1,
                                color: "White",
                                "&": {
                                  backgroundColor: theme.palette.primary.main,
                                },
                                "&:hover": {
                                  backgroundColor: theme.palette.secondary.main,
                                },
                              }}
                            >
                              Continue
                            </Button>
                            <Button
                              disabled
                              sx={{
                                mt: 1,
                                mr: 1,
                                color: "White",
                                "&": {
                                  backgroundColor: theme.palette.primary.main,
                                },
                                "&:hover": {
                                  backgroundColor: theme.palette.secondary.main,
                                },
                              }}
                            >
                              Back
                            </Button>
                          </div>
                        </Box>
        <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical:"top" , horizontal:"right" }}
    >
      <Alert
        onClose={handleClose}
        severity="warning"
        variant="filled"
        sx={{ width: "100%" }}
      >
        You have no access to edit this field!<br></br>
        Click continue to proceed to next form
      </Alert>
    </Snackbar>
    </div>
    
  );
}

export default GeneralInformation;
