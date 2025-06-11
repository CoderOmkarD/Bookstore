import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
} from "@mui/material";

// Home file
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1470&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: '70vh',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />
        {/* Heading */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            zIndex: 2,
            fontWeight: "bold",
            fontSize: { xs: "4rem", md: "5rem" },
            fontFamily: "'Poppins', sans-serif",
           
          }}
        >
          Welcome to BookStore
        </Typography>
      </Box>

      
    
    </>
  );
};

export default Home;
