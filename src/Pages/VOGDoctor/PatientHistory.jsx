import "../../css/VOGDoctor/PatientHistory.css";
import React, { useState } from 'react';

const PatientHistory = () => {
  const [searchId, setSearchId] = useState('');
  const [patientDetails, setPatientDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle input change
  const handleSearchIdChange = (event) => {
    setSearchId(event.target.value);
  };

  // Function to handle search button click
  const handleSearchClick = async () => {
    try {
      // Perform the API call or database query to get patient details based on searchId
      // Replace the following with your actual API call or database query
      const response = await fetch(`your-api-endpoint/${searchId}`);
      const data = await response.json();

      if (data) {
        // If patient details are found, set them in the state
        setPatientDetails(data);
        setErrorMessage('');
      } else {
        // If no data is found, display an error message
        setErrorMessage('No patient registered with this ID.');
        setPatientDetails(null);
      }
    } catch (error) {
      console.error('Error fetching patient details:', error);
      setErrorMessage('Error fetching patient details. Please try again.');
      setPatientDetails(null);
    }
  };

  return (
    <div className="user-details">
    <label>
      Enter Patient ID:
      <input type="text" value={searchId} onChange={handleSearchIdChange} />
    </label>
    <button onClick={handleSearchClick}>Search</button>

    {errorMessage && <div className="error-message">{errorMessage}</div>}

    {patientDetails && (
      <div className="patient-details">
        <h2>Patient Details:</h2>
        {/* Display patient details here using patientDetails */}
        {/* Example: */}
        <p>Name: {patientDetails.fullName}</p>
        <p>NIC No.: {patientDetails.nicNo}</p>
        {/* Add other details accordingly */}
      </div>
    )}
  </div>
  );
};

export default PatientHistory;
