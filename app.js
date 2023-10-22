const express = require('express');
const fs = require('fs');

const movieRoute = require('./Routes/carRoute');
const morgan = require('morgan');

const app = express();
app.use(express.json())
app.use(morgan('dev'))

let cars = JSON.parse(fs.readFileSync('./Data/carCollection.json'));

app.use('/api/v1/cars', movieRoute)

module.exports = app;