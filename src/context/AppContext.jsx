import { createContext, useLayoutEffect, useEffect, useState } from "react";

export const AppContext = createContext({
  favs: [],
  addToFavs: (employee) => { },
  removeFromFavs: (employeeId) => { },
  isInFavs: (employeeId) => false,
  searchResults: [],
  setSearchResults: (results) => { },
  loading: false,
  setLoading: (loading) => { },
  searchQuery: "",
  setSearchQuery: (query) => { }
});

export default function AppContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useLayoutEffect(() => {
    const savedFavs = localStorage.getItem("favs");
    if (savedFavs) {
      setFavs(JSON.parse(savedFavs));
    }

    const savedResults = localStorage.getItem("searchResults");
    if (savedResults) {
      setSearchResults(JSON.parse(savedResults));
    }
  }, []);

  // שמירה אוטומטית של מועדפים בלוקאל
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  // שמירה אוטומטית של תוצאות חיפוש בלוקאל
  useEffect(() => {
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
  }, [searchResults]);

  const addToFavs = (employee) => {
    const newFavs = [...favs, employee];
    setFavs(newFavs);
  };

  const removeFromFavs = (employeeId) => {
    const newFavs = favs.filter(emp => emp.login.uuid !== employeeId);
    setFavs(newFavs);
  };

  const isInFavs = (employeeId) => {
    return favs.some(emp => emp.login.uuid === employeeId);
  };

  const val = {
    favs,
    addToFavs,
    removeFromFavs,
    isInFavs,
    searchResults,
    setSearchResults,
    loading,
    setLoading,
    searchQuery,
    setSearchQuery
  };

  return (
    <AppContext.Provider value={val}>
      {children}
    </AppContext.Provider>
  );
}
