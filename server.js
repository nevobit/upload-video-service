const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

app.use('/upload',routes)

app.use(bodyParser.urlencoded({extended: true}));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);