import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

function ClinicDateViewer() {
    const [clinicDates, setClinicDates] = useState([]);

    useEffect(() => {
        loadClinicDates();
    }, []);

    const loadClinicDates = async () => {
        try {
            const response = await axios.get("http://localhost:8080/clinicDate");
            if (response.status === 302) {
                setClinicDates(response.data);
            } else {
                // Handle other status codes if needed
            }
        } catch (error) {
            console.error("Error loading clinic dates:", error);
            // Handle error, display message to user, etc.
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/clinicDate/${id}`);
            loadClinicDates(); // Reload clinic dates after deletion
        } catch (error) {
            console.error("Error deleting clinic date:", error);
            // Handle error, display message to user, etc.
        }
    };

    return (
        <section>
            <table className="table table-bordered table-hover shadow">
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Area</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th colSpan="3">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {clinicDates.map((clinicDate) => (
                        <tr key={clinicDate.id}>
                            <td>{clinicDate.id}</td>
                            <td>{clinicDate.area}</td>
                            <td>{clinicDate.description}</td>
                            <td>{clinicDate.date}</td>
                            <td>{clinicDate.starttime}</td>
                            <td className="mx-2">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(clinicDate.id)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ClinicDateViewer;
