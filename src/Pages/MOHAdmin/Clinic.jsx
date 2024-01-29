
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const Clinic = () => {
  const [selectedOccupation, setSelectedOccupation] = useState('');
  const [occupationsData, setOccupationsData] = useState([]); // Data for occupation dropdown
  const [selectedRow, setSelectedRow] = useState(null);
  const [detailsData, setDetailsData] = useState([]); // Data for displaying details table

  // Fetch occupations data on component mount
  useEffect(() => {
    // Replace with your API call to fetch occupation data
    const fetchedOccupationsData = fetchDataForOccupationsDropdown();
    setOccupationsData(fetchedOccupationsData);
  }, []);

  // Fetch details data based on selected occupation
  useEffect(() => {
    if (selectedOccupation) {
      // Replace with your API call to fetch details data based on selected occupation
      const fetchedDetailsData = fetchDataForSelectedOccupation(selectedOccupation);
      setDetailsData(fetchedDetailsData);
    }
  }, [selectedOccupation]);

  const fetchDataForOccupationsDropdown = () => {
    // Replace this with your API call to fetch occupation data
    // For example, returning dummy data for now
    return ['MOH Doctor', 'Mid Wife', 'Dentist', 'VOG Doctor'];
  };

  const fetchDataForSelectedOccupation = (occupation) => {
    // Replace this with your API call to fetch details data based on selected occupation
    // For example, returning dummy data for now
    return [
      { id: 1, name: 'Nimali', contact_no: '0764518586', area:'Hittatiya' },
      { id: 2, name: 'Wasana', contact_no: '0765278849', area:'Walgama 1' },
      { id: 3, name: 'Nirmani', contact_no:'0748955582',area:'Pamburana' },
      { id: 4, name: 'Renuka', contact_no: '0765222277', area:'Meddewatta' },
      // Add more details based on your database structure
    ];
  };

  const handleOccupationChange = (event) => {
    setSelectedOccupation(event.target.value);
    setSelectedRow(null); // Reset selected row when changing occupation
  };

  const handleRowClick = (row) => {
    // Set the selected row when clicking on a row
    setSelectedRow(row);
  };

  const handleView = () => {
    // Implement view functionality here using the selectedRow data
    console.log('View:', selectedRow);
  };

  const handleUpdate = () => {
    // Implement update functionality here using the selectedRow data
    console.log('Update:', selectedRow);
  };

  const handleDelete = () => {
    // Implement delete functionality here using the selectedRow data
    console.log('Delete:', selectedRow);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Occupation Details 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Select Occupation
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="occupation-label">Occupation</InputLabel>
              <Select
                labelId="occupation-label"
                id="occupation"
                value={selectedOccupation}
                onChange={handleOccupationChange}
              >
                <MenuItem value="">Select</MenuItem>
                {occupationsData.map((occupation) => (
                  <MenuItem key={occupation} value={occupation}>
                    {occupation}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Details Table
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Contact_No</TableCell>
                    <TableCell>Area</TableCell>
                    <TableCell>status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {detailsData.map((row) => (
                    <TableRow
                      key={row.id}
                      onClick={() => handleRowClick(row)}
                      selected={selectedRow && selectedRow.id === row.id}
                      hover
                    >
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.contact_no}</TableCell>
                      <TableCell>{row.area}</TableCell>

                      <TableCell>
                        <Button color="primary" onClick={handleView}>
                          View
                        </Button>
                        <Button color="secondary" onClick={handleUpdate}>
                          Update
                        </Button>
                        <Button color="error" onClick={handleDelete}>
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Clinic;
