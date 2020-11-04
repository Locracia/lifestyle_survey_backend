const express = require('express');
const app = express();
var cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({ path: './.env' });

app.use(cors());

const analysisRoute = require('./routes/analsysis');
const candidateSurveyRoute = require('./routes/candidateInfo');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/analysis', analysisRoute);
app.use('/api/candidate', candidateSurveyRoute);

module.exports = app;
