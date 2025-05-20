// import React from 'react';
// import {Button} from '@mui/material';
// import Appbar from './component/Appbar';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login"; // If you have a login page
// import Register from "./pages/Register";



// function App() {

//   return (
//     <>
//     <Router>
//       <Appbar />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Home />}/>
//          <Route path="/register" element={<Register />} />
//       </Routes>
//     </Router>

      
    
//     </>
//   )
// }
// export default App


// main code


import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getTheme } from './component/Theme'; // <-- Import from theme.jsx

import Appbar from './component/Appbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import BookstoreFooter from './component/BookstoreFooter';
import LeafletMapInBox from './component/LeafletMapInBox';


function App() {
  // Load theme mode from localStorage or default to light
  const [mode, setMode] = useState(() =>
    localStorage.getItem('muiTheme') || 'light'
  );

  // Generate MUI theme based on mode
  const theme = useMemo(() => getTheme(mode), [mode]);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('muiTheme', mode);
  }, [mode]);

  // Toggle light/dark theme
  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Pass toggleTheme and mode to Appbar so it can toggle */}
        <Appbar toggleTheme={toggleTheme} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ThemeProvider>
    <LeafletMapInBox/>
    <BookstoreFooter/>
    </>
  );
}

export default App;

