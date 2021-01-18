const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
});

const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const indexRoute = require('./routes');
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api', indexRoute);

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));