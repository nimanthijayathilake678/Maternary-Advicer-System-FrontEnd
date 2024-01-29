// UserList.js
import "../../css/VOGDoctor/Personal.css";
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
              {/* Include additional user details as needed */}
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
