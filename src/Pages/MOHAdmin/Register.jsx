import "../../css/MOHAdmin/Register.css";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import DisplaySidebar from "../../Components/DisplaySidebar";

const occupations = ["VOG Doctor", "MOH Doctor", "Dentist", "MidWife"];
const areas = [
  "Hittatiya Central",
  "Hittatiya East",
  "Kadeweediya",
  "Kotuwegoda",
  "Meddawatta",
  "Pamburana",
  "Polhena",
  "Thotamuna",
  "Thudawa",
  "Uyanwatta",
  "Walgama Meda",
  "Walgama North",
  "Walgama South",
  "Walpola 1",
  "Walpola 2",
  "Welegoda",
  "Welegoda East",
  "Weliweriya",
  "Weragampita",
];

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    nicNo: "",
    birthday: "",
    contactNo: "",
    email: "",
    sex: "male",
    marriedStatus: "single",
    occupation: "",
    area: "",
    username: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission/validation here
    console.log(formData);
  };

  return (
    <div className="form">
      <DisplaySidebar />
      <Container maxWidth="sm">
        <div className="font">
          <Typography variant="h4" align="center" gutterBottom>
            Registration Form
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="NIC No."
            name="nicNo"
            value={formData.nicNo}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Birthday"
            name="birthday"
            type="date"
            value={formData.birthday}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label="Contact No."
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            fullWidth
            margin="normal"
            inputProps={{
              pattern: "\\d{10}",
              title: "Please enter 10 digits",
            }}
            required
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Sex</FormLabel>
            <RadioGroup
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <div>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Married Status</FormLabel>
              <RadioGroup
                name="marriedStatus"
                value={formData.marriedStatus}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="single"
                  control={<Radio />}
                  label="Single"
                />
                <FormControlLabel
                  value="married"
                  control={<Radio />}
                  label="Married"
                />
                <FormControlLabel
                  value="divorced"
                  control={<Radio />}
                  label="Divorced"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="occupation">Occupation</InputLabel>
            <Select
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            >
              <MenuItem value="">Select Occupation</MenuItem>
              {occupations.map((occupation) => (
                <MenuItem key={occupation} value={occupation}>
                  {occupation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="area">Area</InputLabel>
            <Select
              label="Area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
            >
              <MenuItem value="">Select Area</MenuItem>
              {areas.map((area) => (
                <MenuItem key={area} value={area}>
                  {area}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            minLength="8"
            required
          />

          <TextField
            label="Password"
            name="password"
            type={formData.showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            title="Must contain at least one uppercase letter, one lowercase letter, and one number. Minimum 8 characters."
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {formData.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type={formData.showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            margin="normal"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            title="Must contain at least one uppercase letter, one lowercase letter, and one number. Minimum 8 characters."
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                    {formData.showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="button">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Register;
