
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import EmployeeInfo from './pages/EmployeeInfo';
import About from './pages/About';
import Page404 from './pages/Page404';
import AppContextProvider from './context/AppContext';

export default function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/employee/:id" element={<EmployeeInfo />} />
          <Route path="/favorites/:index" element={<EmployeeInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}


