import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Map from '../components/Map';
import { BsArrowLeftCircle } from "react-icons/bs";

export default function EmployeeInfo() {
  const { id, index } = useParams();
  const navigate = useNavigate();

  const { searchResults, favs } = useContext(AppContext);

  let employee;
  if (index !== undefined) {
    employee = favs[+index];
  } else if (id) {
    employee = searchResults.find(emp => emp.login.uuid === id);
  }

  // אם לא נמצא עובד - תחזיר מסך שגיאה
  if (!employee) {
    return (
      <div className="container text-center mt-5">
        <h4>Employee not found</h4>
        <button className="btn btn-outline-primary mt-3" onClick={() => navigate(-1)}>
          <BsArrowLeftCircle style={{ fontSize: "20px" }} /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button className="btn btn-link mb-2" onClick={() => navigate(-1)}>
        <BsArrowLeftCircle style={{ fontSize: "24px" }} />
      </button>

      <div className="card shadow-sm p-4 mb-3 text-center">
        <img
          src={employee.picture?.large}
          alt={`${employee.name.first} ${employee.name.last}`}
          className="rounded-circle mx-auto mb-3"
          style={{ width: '130px', height: '130px', objectFit: 'cover' }}
        />
        <h3 className="mb-2">{employee.name.first} {employee.name.last}</h3>
        <p className="text-muted mb-1">{employee.email}</p>
        <p className="mb-1">{employee.phone}</p>
        <p className="mb-3">{employee.location.city}, {employee.location.country}</p>
      </div>

      <Map
        latitude={employee.location.coordinates.latitude}
        longitude={employee.location.coordinates.longitude}
        name={`${employee.name.first} ${employee.name.last}`}
      />
    </div>
  );
}
