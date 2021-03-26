const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const billRouter = require('./routes/BillRouter');

app.use('/bill', billRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

