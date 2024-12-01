import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element ={<Dashboard/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import HomePage from "./components/Home/HomePage";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <HomePage />
//     </div>
//   );
// }

// export default App;
