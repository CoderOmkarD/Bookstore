// import React from 'react';
// import { createTheme } from '@mui/material/styles';

// export const getTheme = (mode) =>
//   createTheme({
//     palette: {
//       mode,
//       ...(mode === 'light'
//         ? {
//             // Light mode colors
//             primary: { main: '#1976d2' },
//             secondary: { main: '#9c27b0' },
//             background: {
//               default: '#f5f5f5',
//               paper: '#ffffff',
//             },
//             text: {
//               primary: '#000000',
//               secondary: '#555555',
//             },
//           }
//         : {
//             // Dark mode colors
//             primary: { main: '#90caf9' },
//             secondary: { main: '#ce93d8' },
//             background: {
//               default: '#121212',
//               paper: '#1e1e1e',
//             },
//             text: {
//               primary: '#ffffff',
//               secondary: '#cccccc',
//             },
//           }),
//     },
//     typography: {
//       fontFamily: 'Roboto, Arial, sans-serif',
//     },
//     components: {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             borderRadius: 8,
//             textTransform: 'none',
//           },
//         },
//       },
//     },
//   });

//theme for the white and dark mode


//the gloal theme
// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5', // one color everywhere
      paper: '#f5f5f5',   // paper components match too
    },
    primary: {
      main: '#f5f5f5',    // even buttons can match (optional)
    },
    secondary: {
      main: '#f5f5f5',
    },
    text: {
      primary: '#333333', // optional text color (dark grey)
    },
  },
});

export default theme;

