import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Container } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const books = [
  {
    title: 'Bhagavad Gita',
    description: 'A 700-verse Hindu scripture providing philosophical and spiritual guidance from Lord Krishna.',
    image: 'https://m.media-amazon.com/images/I/81HR0LQ5ZmL._UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'Atomic Habits',
    description: 'A powerful guide on building good habits and breaking bad ones, by bestselling author James Clear.',
    image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'The Alchemist',
    description: 'An inspiring tale about following your dreams, by Paulo Coelho.',
    image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'Ikigai',
    description: 'A Japanese concept for finding purpose and meaning in life.',
    image: 'https://m.media-amazon.com/images/I/818g6hX7z5L._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'Rich Dad Poor Dad',
    description: 'Personal finance classic on the mindset of wealth, by Robert Kiyosaki.',
    image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'Think and Grow Rich',
    description: 'Timeless lessons on success and wealth building by Napoleon Hill.',
    image: 'https://m.media-amazon.com/images/I/81pZksE8PBL._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'The Psychology of Money',
    description: 'Insights on how people think about money and how to make better financial decisions.',
    image: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'Deep Work',
    description: 'A guide to focused success in a distracted world, by Cal Newport.',
    image: 'https://m.media-amazon.com/images/I/71HMyqG6MRL._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'Do It Today',
    description: 'A motivational book to stop procrastinating and take action.',
    image: 'https://m.media-amazon.com/images/I/61mWefUuXlL._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
  {
    title: 'Start with Why',
    description: 'How great leaders inspire action, by Simon Sinek.',
    image: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UF1000,1000_QL80_.jpg',
    pdf: 'pdfs/Cv.pdf'
  },
];

const Books = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        {books.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 500, width: '100%', objectFit: 'cover' }}
                image={book.image}
                title={book.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {book.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button
                  size="small"
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  href={book.pdf}
                  download
                >
                  Download
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Books;
