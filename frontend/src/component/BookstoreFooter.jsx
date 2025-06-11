import React from 'react';
import { Box, Typography, Link, Stack, Container, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const BookstoreFooter = () => {
  return (
    <Box sx={{ backgroundColor: '#1e1e1e', color: 'white', pt: 5, pb: 3 , mb: 3,
      width: '100%',      // Increase width (px or %)
        height: '100%',     
    }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* About */}
          <Box flex={1}>
            <Typography variant="h5" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              BookNest is your favorite neighborhood bookstore with a curated collection of books
              from every genre. Explore the joy of reading with us.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box flex={1}>
            <Typography variant="h5" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" underline="hover">Home</Link>
              <Link href="/about" color="inherit" underline="hover">About Us</Link>
              <Link href="/login" color="inherit" underline="hover">Login</Link>
              <Link href="/contact" color="inherit" underline="hover">Contact Us</Link>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box flex={1}>
            <Typography variant="h5" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">BookNest Bookstore</Typography>
            <Typography variant="body2">123 Book Street, Pune, MH 411001</Typography>
            <Typography variant="body2">Phone: +91 98765 43210</Typography>
            <Typography variant="body2">Email: support@booknest.com</Typography>
          </Box>

          {/* Social Media */}
          <Box flex={1}>
            <Typography variant="h5" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="https://facebook.com" target="_blank" color="inherit"><FacebookIcon  fontSize="large" sx={{ color: '#4267B2' }}/></Link>
              <Link href="https://instagram.com" target="_blank" color="inherit"><InstagramIcon  fontSize="large"  sx={{ color: '#E1306C' }}  /></Link>
              <Link href="https://twitter.com" target="_blank" color="inherit"><XIcon  fontSize="large"  sx={{ color: 'white' }}/> </Link>
            </Stack>
          </Box>
        </Stack>

        {/* Divider and Copyright */}
        <Divider sx={{ my: 4, borderColor: '#444' }} />
        <Typography variant="body2" align="center" color="gray">
          © {new Date().getFullYear()} BookNest Bookstore. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default BookstoreFooter;
