const path = require('path');
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
});

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const indexRoute = require('./routes');
const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Connect Database
connectDB();

// Allow body params
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Allow cors
app.use(cors());

// Define Routes
app.use('/api', indexRoute);

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));