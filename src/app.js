// src/app.js

const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

module.exports = app;
