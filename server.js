/*const express = require('express');
const cors = require('cors');

require('dotenv').config();*/

import express from 'express'
import cors from 'cors'

import 'dotenv/config.js'
import path from 'path'

const app = express();
const port = process.env.PORT || 8080;
process.env.__dirname = (() => {let x = path.dirname(decodeURI(new URL(import.meta.url).pathname)); return path.resolve( (process.platform == "win32") ? x.substr(1) : x ); })();

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

