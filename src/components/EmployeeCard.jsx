import React from 'react';
import { Link } from 'react-router-dom';
import { BsStar, BsStarFill } from 'react-icons/bs';

export default function EmployeeCard({ employee, isFavorite, onToggleFavorite, index, origin = "home" }) {
  const getDetailsUrl = () => {
    if (origin === "favorites") {
      return `/favorites/${index}`;
    } else {
      return `/employee/${employee.login.uuid}`;
    }
  };

  return (
    <div className="card h-100 shadow-sm rounded p-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="m-0">{employee.name.first} {employee.name.last}</h5>
        <button
          className="btn btn-link p-0"
          onClick={() => onToggleFavorite(employee)}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? <BsStarFill color="#FFD700" /> : <BsStar />}
        </button>
      </div>
      <div className="text-muted">{employee.location.city}, {employee.location.country}</div>
      <img
        src={employee.picture.medium}
        alt={`${employee.name.first} ${employee.name.last}`}
        className="rounded-circle mt-3 mb-2 mx-auto d-block"
        style={{ width: '80px', height: '80px' }}
      />
      <Link to={getDetailsUrl()} className="btn btn-outline-primary mt-2 w-100">
        View Details
      </Link>
    </div>
  );
}
