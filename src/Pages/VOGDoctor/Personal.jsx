

// UserList.js
//import "../../css/VOGDoctor/Personal.css";
import React, { useState, useEffect } from "react";

const Personal = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: "Namali Wasana",
      nicNo: "803456789V",
      birthday: "1980-01-01",
      contactNo: "0745456789",
      email: "namaliwasana@example.com",
      sex: "Female",
      marriedStatus: "married",
      occupation: "Vog Doctor",
      area: "Matara Hospital",
      username: "nimali80",
      password: "password123",
    },

    // Add more dummy users as needed
  ]);

  const handleUpdate = () => {
    // Add logic to handle the update action
    console.log("Update button clicked");
  };

  return (
    <div className="main">
      <div className="title">
        <h1>Personal Information</h1>
      </div>
      <div className="view">
        {users.map((user) => (
          <form key={user.id}>
            <fieldset>
              <label>Full Name:{user.fullName}</label>
              <br />
              <label>NIC: {user.nicNo}</label>
              <br />
              <label>Birthday: {user.birthday}</label>
              <br />
              <label>Contact No: {user.contactNo}</label>
              <br />
              <label>Email: {user.email}</label>
              <br />
              <label>Sex: {user.sex}</label>
              <br />
              <label>Married Status: {user.marriedStatus}</label>
              <br />
              <label>Occupation: {user.occupation}</label>
              <br />
              <label>Area: {user.area}</label>
            
            </fieldset>
          </form>
        ))}
        <button className="update-button" onClick={handleUpdate}>
        Update
      </button>
      </div>
    </div>
  );
};

export default Personal;

/*


import React, { useState, useEffect } from 'react';
import "../../css/VOGDoctor/Personal.css";

function Personal() {
    const [userData, setUserData] = useState({
        id: '',
        fullName: '',
        nicNo: '',
        birthday: '',
        contactNo: '',
        email: '',
        sex: '',
        marriedStatus: '',
        occupation: '',
        area: '',
        username: ''
    });

    useEffect(() => {
        // Fetch user details from the database
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            // Assuming you have an API endpoint to fetch user details by ID
            const response = await fetch('/api/userDetails?id=1');
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    return (
        <div className='container'>
        <div className="title">
            <h2>Personal Informations</h2>
            </div>
            <p>ID: {userData.id}</p>
            <p>Full Name: {userData.fullName}</p>
            <p>NIC No: {userData.nicNo}</p>
            <p>Birthday: {userData.birthday}</p>
            <p>Contact No: {userData.contactNo}</p>
            <p>Email: {userData.email}</p>
            <p>Sex: {userData.sex}</p>
            <p>Married Status: {userData.marriedStatus}</p>
            <p>Occupation: {userData.occupation}</p>
            <p>Area: {userData.area}</p>
            <p>Username: {userData.username}</p>
        </div>
    );
}

export default Personal;


*/