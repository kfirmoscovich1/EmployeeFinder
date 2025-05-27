import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsExclamationTriangle } from 'react-icons/bs';

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <div className="display-1 text-danger mt-5"><BsExclamationTriangle /></div>
      <h2 className="mt-3">404 - Page Not Found</h2>
      <p className="text-muted">The page you're looking for doesn't exist.</p>
      <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>
        Go Back Home
      </button>
    </div>
  );
}
