
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from '@mui/material';

const AddBooks = () => {
  const [bookName, setBookName] = useState('');
  const [bookCover, setBookCover] = useState(null);
  const [bookDescription, setBookDescription] = useState('');
  const [bookPdf, setBookPdf] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Book Name:', bookName);
    console.log('Book Cover:', bookCover);
    console.log('Book Description:', bookDescription);
    console.log('Book PDF:', bookPdf);

    const formData = new FormData();
    formData.append('bookName', bookName);
    formData.append('bookCover', bookCover);
    formData.append('bookDescription', bookDescription);
    formData.append('bookPdf', bookPdf);

    // Example: Axios post request
    // axios.post('YOUR_BACKEND_API_URL', formData);

    // Reset the form
    setBookName('');
    setBookCover(null);
    setBookDescription('');
    setBookPdf(null);

    alert('Book added successfully!');
  };

  return (
    <Box sx={{backgroundImage:'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)', backgroundSize: 'cover'}}>

    
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: 'auto', mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Add a New Book
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2, // space between fields
          mt: 2,
        }}
      >
        {/* Book Name */}
        <TextField
          label="Book Name"
          variant="outlined"
          fullWidth
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />

        {/* Book Cover */}
       

        {/* Book Description */}
        <TextField
          label="Book Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={bookDescription}
          onChange={(e) => setBookDescription(e.target.value)}
          required
        />
         <Box>
          <Button
            variant="outlined"
            component="label"
            fullWidth
          >
            Upload Book Cover Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => setBookCover(e.target.files[0])}
            />
          </Button>
          {bookCover && (
            <Typography variant="body2" mt={1}>
              Selected: {bookCover.name}
            </Typography>
          )}
        </Box>

        {/* Book PDF */}
        <Box>
          <Button
            variant="outlined"
            component="label"
            fullWidth
          >
            Upload Book PDF
            <input
              type="file"
              hidden
              accept="application/pdf"
              onChange={(e) => setBookPdf(e.target.files[0])}
            />
          </Button>
          {bookPdf && (
            <Typography variant="body2" mt={1}>
              Selected: {bookPdf.name}
            </Typography>
          )}
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Add the Book
        </Button>
      </Box>
    </Paper>
    </Box>
  );
};

export default AddBooks;
