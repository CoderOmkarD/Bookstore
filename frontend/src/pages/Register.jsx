import React, { useState } from "react";
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";
const intialFormdata = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
}
const Register = () => {
  const [formData, setFormData] = useState(
    
    intialFormdata);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleRegister = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;
  
    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Send data to the backend API using Axios
    axios.post('http://localhost:5000/api/register', {
      fullName,
      email,
      password,
    })
    .then(res => {
      alert(res.data.msg); 
      setFormData(intialFormdata);
       // Show success message from the backend
    })
    .catch(err => {
      alert(err.response?.data?.msg || "Registration failed");  // Show error message if something goes wrong
    });
  };
  
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register for BookStore
        </Typography>

        <Box component="form" onSubmit={handleRegister} sx={{ mt: 3 }}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? <a href="/login">Login</a>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
