import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="body1" paragraph>
          Have a question, suggestion, or need support? We'd love to hear from
          you! Reach out to us using the information below, and we'll get back
          to you as soon as possible.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <List>
            <ListItem>
              <ListItemText
                primary="📧 Email"
                secondary="support@bookstoreapp.com"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="📞 Phone"
                secondary="+91 98765 43210"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="🏢 Address"
                secondary="BookStore HQ, 3rd Floor, Phoenix Tech Park, Pune, Maharashtra - 411001"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="💬 Social Media"
                secondary={
                  <>
                    Instagram: @bookstore_app <br />
                    Twitter: @BookStoreOnline <br />
                    Facebook: fb.com/BookStoreApp
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>

        <Typography variant="body1" sx={{ mt: 4 }}>
          Customer support is available from <strong>Monday to Saturday</strong>, 10:00 AM – 6:00 PM.
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          📚 Thank you for choosing <strong>BookStore</strong> — we're always here to help!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Contact;
