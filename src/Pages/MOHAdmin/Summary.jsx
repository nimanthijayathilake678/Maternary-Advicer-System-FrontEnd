
import "../../css/MOHAdmin/Summary.css";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MonthlyReportForm = () => {
  const [selectedReport, setSelectedReport] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [summaryVisible, setSummaryVisible] = useState(false);

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    // Check if both report and date are selected
    if (selectedReport && selectedDate) {
      setSummaryVisible(true);
      // Here, you can make an API call to your backend with selectedReport and formattedDate
      // to retrieve and display summary details.
    } else {
      console.error("Please select both report type and date.");
    }
  };

  return (
    <div className="form">
      <div className="textbox">
        
        <div className="dropdown">
          <FormControl fullWidth>
            <InputLabel>Monthly Report</InputLabel>
            <Select value={selectedReport} onChange={handleReportChange}>
              <MenuItem value="H-524">H-524 Monthly Return of PHM</MenuItem>
              <MenuItem value="H-527">H-527 Monthly Return of PHM</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="date">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label={'"month" and "year"'}
                views={["month", "year"]}
                value={selectedDate}
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        
        <div className="button">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <div className="summarypart">
      {/* Display summary report here */}
      
      {summaryVisible && selectedReport && selectedDate && (
        <Box mt={3}>
          <Typography variant="h5">Summary Report</Typography>
          {/* Display summary report content here */}
        </Box>
        
      )}
      </div>
    </div>
  );
};

export default MonthlyReportForm;
