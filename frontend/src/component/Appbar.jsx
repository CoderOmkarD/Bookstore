

// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import Login from "../pages/Login";

// const Appbar = () => {
//   const pages = ["Home", "About", "Contact"];

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "	#212121" ,borderRadius:"15px" }}>
//       <Toolbar>
//         {/* Brand Title */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           BookStore
//         </Typography>

//         {/* Page Links */}
//         {pages.map((page) => (
//           <Button
//             key={page}
//             color="inherit"
//             component={Link}
//             to={`/${page.toLowerCase()}`}
//           >
//             {page}
//           </Button>
//         ))}

//         {/* Login Button */}
//         <Button color="inherit" component={Link} to="/login">
//   Login
// </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Appbar;



// main code before the dark mode

// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";

// const Appbar = ({ toggleTheme, mode }) => {
//   const pages = ["Home", "About", "Contact"];

//   return (
//     <AppBar
//       position="static"
//       sx={{ backgroundColor: "background.paper", borderRadius: "15px" }}
//     >
//       <Toolbar>
//         {/* Brand Title */}
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{
//             flexGrow: 1,
//             textDecoration: "none",
//             color: "inherit",
//             fontWeight: "bold",
//           }}
//         >
//           BookStore
//         </Typography>

//         {/* Page Links */}
//         {pages.map((page) => (
//           <Button
//             key={page}
//             color="inherit"
//             component={Link}
//             to={`/${page.toLowerCase()}`}
//           >
//             {page}
//           </Button>
//         ))}

//         {/* Login Button */}
//         <Button color="inherit" component={Link} to="/login">
//           Login
//         </Button>

//         {/* Theme Toggle Button */}
//         <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
//           <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
//             {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
//           </IconButton>
//         </Tooltip>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Appbar;
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';

const Appbar = ({ toggleTheme, mode }) => {
  const pages = ["Home", "About", "Contact"];
  const theme = useTheme(); // Access theme colors

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: "15px",
      }}
      elevation={2}
    >
      <Toolbar>
        {/* Brand Title */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit", // Inherit from AppBar (theme-based)
            fontWeight: "bold",
            fontFamily: " Arial, sans-serif",
          }}
        >
         {/* added the icon of the book store */}
            <LibraryBooksSharpIcon sx={{ mr: 1,top: '-1px' }} />
            
          BookStore
        </Typography>

        {/* Page Links */}
        {pages.map((page) => (
          <Button
            key={page}
            color="inherit"
            component={Link}
            to={`/${page.toLowerCase()}`}
          >
            {page}
          </Button>
        ))}

        {/* Login Button */}
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>

        {/* Theme Toggle */}
        <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
          <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
