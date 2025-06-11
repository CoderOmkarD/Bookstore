import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: 'url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1470&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay
            zIndex: 1,
          }}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            zIndex: 2,
            fontSize: { xs: '3rem', md: '5rem' },
          }}
        >
          ABOUT US
        </Typography>
      </Box>
    
      {/* Content Section */}
      <Container>
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, sm: 5 },
          backgroundColor: '#fefefe',
     
          fontFamily: '"Poppins", sans-serif',
        }}
      > 
       
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
        >
          Welcome to <strong>BookStore</strong> — your one-stop digital library
          to explore, browse, and buy your favorite books. Whether you're a
          casual reader, an academic learner, or a passionate bibliophile, our
          platform is designed to bring the joy of reading right to your screen.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
        >
          Our collection includes a wide range of genres including Fiction,
          Non-Fiction, Educational, Technology, History, Self-Help, and more.
          We partner with top publishers and indie authors to ensure our users
          get access to the best and latest reads.
        </Typography>

        <Typography
          variant="h5"
          sx={{ mt: 4, mb: 2, fontWeight: 600 }}
        >
          🚀 Why Choose BookStore?
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          {[
            'Thousands of books across all categories',
            'User-friendly and responsive design',
            'Affordable pricing and special student discounts',
            'Secure checkout and fast delivery',
          ].map((item, i) => (
            <Typography key={i} component="li" variant="body1" sx={{ mb: 1 }}>
              {item}
            </Typography>
          ))}
        </Box>

        <Typography
          variant="h5"
          sx={{ mt: 4, mb: 2, fontWeight: 600 }}
        >
          📚 Our Mission
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
        >
          At BookStore, our mission is to encourage reading by making books
          more accessible, affordable, and enjoyable for everyone. We believe in
          the power of knowledge and storytelling to transform lives.
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
        >
          Thank you for choosing BookStore — happy reading! 📖
        </Typography>
      </Paper>
      </Container>
    </>
  );
};

export default AboutUs;
