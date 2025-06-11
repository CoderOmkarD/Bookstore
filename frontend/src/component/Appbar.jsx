
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,

} from "@mui/material";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LibraryBooksSharpIcon from '@mui/icons-material/LibraryBooksSharp';
//for the button to change the theme
//{toggleTheme, mode} 

const Appbar = () => {
  const pages = ["Home", "About", "Contact", "Books"];
  // const theme = useTheme(); // Access theme colors

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: "url(https://cdn.dribbble.com/userupload/6508147/file/original-11794da09cf2fda821918b0be52877cf.jpg?resize=400x0)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        

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
            color: "white", // Inherit from AppBar (theme-based)
            fontWeight: "bold",
            fontFamily: " Arial, sans-serif",
            
          }}
        >
          {/* added the icon of the book store */}
          <LibraryBooksSharpIcon sx={{ mr: 1, top: '-1px' }} />

          BookStore
        </Typography>

        {/* Page Links */}
        {pages.map((page) => (
          <Button
            key={page}
            color="inherit"
            component={Link}
            to={`/${page.toLowerCase()}`}
            sx={{

              color: 'black',
              ml: 0.5,
              mr: 0.5,
              '&:hover': {
                backgroundColor: 'black',

                color: 'white', // optional: change text color on hover
              },
            }}
          >
            {page}
          </Button>
        ))}

        {/* Login Button */}
        <Button color="inherit" component={Link} to="/login"

          sx={{
            color: 'black',
            ml: 0.5,
            mr: 0.5,
            '&:hover': {

              backgroundColor: 'black',

              color: 'white', // optional: change text color on hover
            },
          }}>
          Login
        </Button>


        {/* Theme Toggle
        <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
          <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip> */}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
