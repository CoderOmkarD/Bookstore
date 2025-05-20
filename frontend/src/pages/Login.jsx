// import React, { useState } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Box,
// } from "@mui/material";


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   // Basic validation
//   //   if (!email || !password) {
//   //     alert("Please enter both email and password.");
//   //     return;
//   //   }

//   //   // Simulate login logic
//   //   console.log("Logging in with:", { email, password });
//   //   alert("Login successful (simulated)!");
//   // };

//   const handleLogin = (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!email || !password) {
//       alert("Please enter both email and password.");
//       return;
//     }
  
//     // Use Axios to send login request to the backend
//     axios.post('http://localhost:5000/api/login', {
//       email,
//       password,
//     })
//     .then(res => {
//       // Handle successful login (e.g., show a message or redirect)
//       alert(res.data.msg);  // Assuming the backend sends a message in res.data.msg
//     })
//     .catch(err => {
//       // Handle error if login fails
//       alert(err.response?.data?.msg || "Login failed");
//     });
//   };
  
//   return (
//     <Container maxWidth="sm" sx={{ mt: 8 }}>
//       <Paper elevation={3} sx={{ p: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Login to Your Account
//         </Typography>

//         <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             type="email"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             fullWidth
//             type="password"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
            
//           >
//             Login
//           </Button>

//           <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//             Don't have an account? <Link to="/register">Register</Link>
//           </Typography>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;

// code i change for the login

import React, { useState } from "react";
import axios from 'axios';
import { Link,useNavigate} from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    // Use Axios to send login request to the backend
    axios.post('http://localhost:5000/api/login', {
      email,
      password,
    })
    .then(res => {
      // Handle successful login (e.g., show a message or redirect)
      // alert(res.data.msg);  // Assuming the backend sends a message in res.data.msg

    navigate('/home');
      // Clear form after successful login
      setEmail('');
      setPassword('');
    })
    .catch(err => {
      // Handle error if login fails
      alert(err.response?.data?.msg || "Login failed");
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login to Your Account
        </Typography>

        <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            
          >
            Login
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
