import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="mb-4">About This Project</h2>
      <p className="lead">
        Employee search system.
      </p>
      <p>
        React pro course final project.
      </p>
      <p>
        The app allows users to search for employees using seed values,
        view detailed information, and save favorite employees locally.
      </p>
      <p>
        Developed by Kfir Moscovich.
      </p>
      <button className="btn btn-outline-primary mt-4" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}
