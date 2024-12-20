require('dotenv').config();
const express = require('express');
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurantRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/restaurants', restaurantRoutes);

// Error Handler
app.use(errorHandler);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Export the app for Vercel
module.exports = app;
