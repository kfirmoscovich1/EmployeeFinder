import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import EmployeeCard from '../components/EmployeeCard';

export default function FavoritesPage() {
  const {
    favs,
    removeFromFavs,
    addToFavs,
    isInFavs
  } = useContext(AppContext);

  return (
    <div className="container">
      <h2 className="mb-4">Your Favorite Employees</h2>
      {favs.length === 0 ? (
        <p>No favorite employees yet.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {favs.map((employee, index) => (
            <div key={employee.login.uuid} className="col">
              <EmployeeCard
                employee={employee}
                isFavorite={isInFavs(employee.login.uuid)}
                onToggleFavorite={(emp) =>
                  isInFavs(emp.login.uuid)
                    ? removeFromFavs(emp.login.uuid)
                    : addToFavs(emp)
                }
                index={index}
                origin="favorites"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
