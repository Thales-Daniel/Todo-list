const express = require('express');
const cors = require('cors');
require('dotenv').config();
const error = require('../middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

app.use(error);

module.exports = app;
