const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

const billRouter = require('./routes/BillRouter');
const personRouter = require('./routes/PersonRouter');

app.use('/bill', billRouter);

app.use('/per', personRouter);

/*
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
*/

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

