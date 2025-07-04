const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');



// Middleware
// Middleware
app.use(cors());
app.use(bodyParser.json());



// Routes
app.use('/api/contact', contactRoutes);
app.use('/api', authRoutes);



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
