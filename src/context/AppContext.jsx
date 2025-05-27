import { createContext, useLayoutEffect, useState } from "react";

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
    const saved = localStorage.getItem("favs");
    if (saved) {
      setFavs(JSON.parse(saved));
    }
  }, []);

  const addToFavs = (employee) => {
    const newFavs = [...favs, employee];
    saveToLocal(newFavs);
  };

  const removeFromFavs = (employeeId) => {
    const newFavs = favs.filter(emp => emp.login.uuid !== employeeId);
    saveToLocal(newFavs);
  };

  const isInFavs = (employeeId) => {
    return favs.some(emp => emp.login.uuid === employeeId);
  };

  const saveToLocal = (favsData) => {
    localStorage.setItem("favs", JSON.stringify(favsData));
    setFavs(favsData);
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
