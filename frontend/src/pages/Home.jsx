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

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Welcome Section */}
      <Paper elevation={3} sx={{ p: 5, mb: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Welcome to BookStore 📚
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Discover, Read, and Enjoy a world of books from your favorite authors.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }}
          href="/about"
        >
          Learn More About Us
        </Button>
      </Paper>

      {/* Featured Books Section */}
      <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
        Featured Books
      </Typography>
      <Grid container spacing={4}>
        {/* Book Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
              alt="Book 1"
            />
            <CardContent>
              <Typography variant="h6">The Great Adventure</Typography>
              <Typography variant="body2" color="textSecondary">
                An inspiring journey through time, fate, and friendship.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Book Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
              alt="Book 2"
            />
            <CardContent>
              <Typography variant="h6">Mysteries of the Mind</Typography>
              <Typography variant="body2" color="textSecondary">
                Dive deep into the human psyche and unlock the secrets of thought.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Book Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://as1.ftcdn.net/jpg/01/55/60/16/1000_F_155601656_lRZeta9aLJQ0yeqjrWSyWw4iXqsmTlF5.jpg"
              alt="Book 3"
            />
            <CardContent>
              <Typography variant="h6">Code & Creativity</Typography>
              <Typography variant="body2" color="textSecondary">
                A perfect guide for developers seeking creativity through coding.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Ready to start your reading journey?
        </Typography>
        <Button variant="contained" color="success" size="large" href="/login">
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
