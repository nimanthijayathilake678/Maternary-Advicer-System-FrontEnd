import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Theme from "../../Components/Theme";
import Autocomplete from "@mui/material/Autocomplete";
import { apiClient } from "../../API/ApiServer";
import useAuth from "../../Hooks/useAuth";
import Button from "@mui/material/Button";
export default function PersonalInformation({handleNext,handleBack}) {
  const auth = useAuth();
  const [personalInfo, setPersonalInfo] = useState({
    "w_dob": "",
    "w_educationalLevel": "",
    "w_occupation": "",
    "h_name": "",
    "h_dob": "",
    "h_educationalLevel": "",
    "h_occupation": "",
    "marriedDate": "",
    "address": "",
  });
  
  const [method,setMethod] = useState("post");
  const url = "/personalInfo/";
  const inputRef = useRef(null);
  const [user,setUser] = useState(auth.user.id)
  useEffect(() => {
    const getFormData = async () => {
      try {
        const response = await apiClient.get("/personalInfo/" + auth.user.id);
        setPersonalInfo(response?.data);
        if(response.data.h_name){
          setMethod("put")
        }
        console.log("Personal Information " + response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getFormData();
  }, [auth.user.id]);

  useEffect(() => {
    if (inputRef.current && inputRef.current.value !== "") {
      inputRef.current.focus();
    }
  }, [personalInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]:value
    })
  };

  const edu = [
    { label: "No Education" , value:"No Education"},
    { label: "Until 0-5 years" , value:"Until 0-5 years" },
    { label: "Until 6-11 years" , value:"Until 6-11 years"},
    { label: "Over 11 years" , value:"Over 11 years"},
    { label: "Higher Education (Graduate or Diploma)" , value:"Higher Education (Graduate or Diploma)" },
  ];

  const handleClick = () => {
    handleNext(url,method,personalInfo,user)
  }


  const handleValueChange = (e,newValue) =>{
    setPersonalInfo({
      ...personalInfo,
      w_educationalLevel:newValue
    })

  }
  const handleValue1Change = (e,newValue1) =>{
    setPersonalInfo({
      ...personalInfo,
      h_educationalLevel:newValue1
    })
  }
  const theme = Theme();
  console.log("User id :"+auth.user.id);
  return (
    <div>
      {/* Personal Information Form */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
          paddingY: 10,
        }}
        noValidate
        autoComplete="off"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="auto"
        flexDirection="column"
      >
        <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em" }}>
                      Wife Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%", marginY: 1 }}>
          {/* Wife Information */}
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              type="date"
              id="w_date_of_birth"
              name="w_dob"
              label="Date of Birth"
              sx={{ width: "100%" }}
              value={personalInfo?.w_dob}
              onChange={handleChange}
              ref={inputRef}
            />
          </Grid>
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              placeholder="Occupation"
              name="w_occupation"
              label="Occupation"
              value={personalInfo?.w_occupation}
              sx={{ width: "100%" }}
              onChange={handleChange}
              ref={inputRef}
            />
          </Grid>
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              placeholder="Educational Level"
              name="w_educationalLevel"
              onChange={handleChange}
              value={personalInfo?.w_educationalLevel}
              label="Educational Level"
              sx={{ width: "100%" }}
              ref={inputRef}
            />
          </Grid>
        </Grid>

        {/* Husband Information */}
        <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em", paddingTop: "3em"  }}>
                      Husband Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%", marginY: 1 }}>
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              ref={inputRef}
              placeholder="Husband Name"
              name="h_name"
              label="Husband Name"
              value={personalInfo?.h_name}
              onChange={handleChange}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              placeholder="Date of Birth"
              type="date"
              id="h_date_of_birth"
              name="h_dob"
              label="Date of Birth"
              value={personalInfo?.h_dob}
              onChange={handleChange}
              sx={{ width: "100%" }}
              ref={inputRef}
            />
          </Grid>
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              placeholder="Occupation"
              name="h_occupation"
              onChange={handleChange}
              label="Occupation"
              value={personalInfo?.h_occupation}
              sx={{ width: "100%" }}
              ref={inputRef}
            />
          </Grid>
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              placeholder="Occupation"
              name="h_educationalLevel"
              onChange={handleChange}
              value={personalInfo?.h_educationalLevel}
              label="Educational Level"
              sx={{ width: "100%" }}
              ref={inputRef}
            />
          </Grid>
         
        </Grid>

        {/* Other Information */}
        <Typography sx={{ fontWeight: "bold", color: "#00A9BB",paddingBottom:"1em", paddingTop: "3em"  }}>
                      Other Information
        </Typography>
        <Grid container spacing={6} sx={{ width: "90%", marginY: 1 }}>
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              ref={inputRef}
              placeholder="Date of Married"
              onChange={handleChange}
              id="o_married_date"
              name="marriedDate"
              label="Date of Married"
              value={personalInfo?.marriedDate}
              type="date"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} sx={{ padding: "1em 1em 0em 1em !important" }}>
            <TextField
              required
              ref={inputRef}
              placeholder="Address"
              id="o_address"
              name="address"
              value={personalInfo?.address}
              onChange={handleChange}
              label="Address"
              type="text"
              sx={{ width: "100%" }}
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
                              onClick={handleBack}
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
    </div>
  );
}
