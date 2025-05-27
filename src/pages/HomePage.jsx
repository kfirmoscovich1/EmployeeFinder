import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import EmployeeCard from '../components/EmployeeCard';
import axios from 'axios';
import strip from '../assets/strip.png';

export default function HomePage() {
  const {
    searchResults,
    setSearchResults,
    loading,
    setLoading,
    searchQuery,
    setSearchQuery,
    favs,
    addToFavs,
    removeFromFavs,
    isInFavs
  } = useContext(AppContext);

  useEffect(() => {
    fetchEmployees();
  }, [searchQuery]);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://randomuser.me/api/?results=10&seed=${searchQuery || "default"}`);
      setSearchResults(res.data.results);
    } catch (err) {
      console.error("Failed to fetch employees", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <img src={strip} alt="Decorative strip" className="w-100 d-block" style={{ marginBottom: '2rem' }} />
      <div className="container">
        <h2 className="mb-4">Employee Directory</h2>
        <input
          className="form-control mb-4"
          placeholder="Search company seed..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {searchResults.map((employee, index) => (
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
                  origin="home"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
