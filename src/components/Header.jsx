import React from 'react';
import { Link } from 'react-router-dom';
import { BsPeople, BsStar, BsInfoCircle } from 'react-icons/bs';

export default function Header() {
  return (
    <header>
      <div className="header d-flex justify-center align-items-center">
        <nav>
          <Link to="/"><BsPeople /> Employees</Link>
          <Link to="/favorites"><BsStar /> Favorites</Link>
          <Link to="/about"><BsInfoCircle /> About</Link>
        </nav>
      </div>
    </header>
  );
}
