import React from "react";
import { Container, Typography, Box, Divider, Paper } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const About = () => {
  return (
    <Container fixed sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ fontFamily: ' sans-serif', fontWeight: 'bold' }}>
          About BookStore
        </Typography>

        <Divider sx={{ mb: 2 }} />



        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mb: 4 }}>
          {/* Bhagavad Gita */}

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 500, width: "100%" }}
              image="https://m.media-amazon.com/images/I/81HR0LQ5ZmL._UF1000,1000_QL80_.jpg"
              title="Bhagavad Gita"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bhagavad Gita
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                A 700-verse Hindu scripture providing philosophical and spiritual guidance from Lord Krishna.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 500, width: "100%" }}
              image="data:image/jpeg;base64,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"
              title="The Power of Habit"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Power of Habit
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Charles Duhigg’s exploration of how habits are formed and how they can be changed for success.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 500, width: "100%" }}
              image="data:image/png;base64,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"
              title="Thinking, Fast and Slow"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Thinking, Fast and Slow
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Daniel Kahneman's book on the two systems of thought: fast, intuitive thinking and slow, deliberate thinking.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          {/* Atomic Habits */}

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 500, width: "100%" }}
              image="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
              title="Atomic Habits"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Atomic Habits
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                James Clear’s bestselling book on how small changes make big differences in building good habits.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          {/* Rich Dad Poor Dad */}

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 500, width: "100%" }}
              image="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg"
              title="Rich Dad Poor Dad"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rich Dad Poor Dad
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Robert Kiyosaki’s personal finance classic that compares financial mindsets of his rich and poor dads.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 500, width: " 100%" }}
              image="https://cdn.kobo.com/book-images/3873f2bd-f1f3-4712-aa76-051b1125d4ea/1200/1200/False/wings-of-fire-an-autobiography-digital-exclusive-edition.jpg"
              title="Wings of Fire"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wings of Fire
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Wings of Fire, is the autobiography of the Missile Man of India and the former President of India, Dr. A. P. J. Abdul Kalam. It was written by him and Arun Tiwari. Wikipedia
                Originally published: 1999
                Authors: A. P. J. Abdul Kalam, Arun Tiwari

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>


        </Box>

        <Typography variant="body1" paragraph>
          Welcome to <strong>BookStore</strong> — your one-stop digital library
          to explore, browse, and buy your favorite books. Whether you're a
          casual reader, an academic learner, or a passionate bibliophile, our
          platform is designed to bring the joy of reading right to your screen.
        </Typography>

        <Typography variant="body1" paragraph>
          Our collection includes a wide range of genres including Fiction,
          Non-Fiction, Educational, Technology, History, Self-Help, and more.
          We partner with top publishers and indie authors to ensure our users
          get access to the best and latest reads.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>
          🚀 Why Choose BookStore?
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Thousands of books across all categories
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              User-friendly and responsive design
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Affordable pricing and special student discounts
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Secure checkout and fast delivery
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" sx={{ mt: 3 }}>
          📚 Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At BookStore, our mission is to encourage reading by making books
          more accessible, affordable, and enjoyable for everyone. We believe in
          the power of knowledge and storytelling to transform lives.
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for choosing BookStore — happy reading! 📖
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
