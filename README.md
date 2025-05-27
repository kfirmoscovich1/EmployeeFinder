# EmployeeFinder App

### Made by  
- Kfir Moscovich

## Introduction
EmployeeFinder is a modern React-based web application for browsing a directory of randomly generated employees.  
Users can search for employees using a company "seed", view detailed information, mark favorites, and view locations on a map.

## Requirements
- Node.js 18 or higher
- npm or yarn
- Internet connection (for accessing the RandomUser API)

## Installation

1. Clone the repository:
```sh
git clone https://github.com/your-username/employee-finder.git
cd employee-finder
```

2. Install dependencies:
```sh
npm install
```

3. Run the development server:
```sh
npm run dev
```

## Project Structure
```
src/
├── components/       
│   ├── Header.jsx
│   ├── EmployeeCard.jsx
│   └── Map.jsx
├── context/          
│   └── AppContext.jsx
├── pages/            
│   ├── HomePage.jsx
│   ├── FavoritesPage.jsx
│   ├── EmployeeInfo.jsx
│   ├── About.jsx
│   └── Page404.jsx
├── services/         
│   └── apiService.js
├── App.jsx           
├── main.jsx          
├── App.css           
└── index.css         
```

## Features
- Search employees using a dynamic seed
- Save and manage favorite employees
- View employee details: photo, name, email, phone, and location
- Display employee location on a live map (Leaflet)
- Navigate through pages using React Router
- Persistent favorites stored in localStorage

## Technologies Used
- React 19
- React Router DOM v7
- Context API
- Leaflet (via react-leaflet)
- Axios
- Bootstrap 5
- React Icons

## How to Use
1. Enter a company name (seed) in the homepage search bar.
2. View a list of employees matching that seed.
3. Click "View Details" to open the employee profile.
4. Click the star icon to add/remove favorites.
5. Visit the Favorites page to access saved employees.
6. View the employee's map location in their profile.

## Credits
Developed by Kfir Moscovich.  
This project demonstrates clean React architecture, component reuse, context-based state management, and a user-friendly interface.
