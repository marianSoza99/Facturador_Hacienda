/*const express = require('express');
const cors = require('cors');

require('dotenv').config();*/

import express from 'express'
import cors from 'cors'

import 'dotenv/config.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

/*const billRouter = require('./routes/BillRouter');
const personRouter = require('./routes/PersonRouter');*/
import billRouter from './routes/BillRouter.js'
import personRouter from './routes/PersonRouter.js'


app.use('/bill', billRouter);

app.use('/per', personRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

