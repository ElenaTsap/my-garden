const express= require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
/* const cors = require('cors') */
const plants = require('./router/plants');

const port = process.env.PORT || 8080;

connectDB();

/* app.use(express.static(__dirname+ '/public'));
app.use(cors()); */
app.use(express.json());

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    next();
} 
app.use(allowCrossDomain);

app.use('/plants', plants);

app.listen(port, () => console.log(`Server started to run on ${port}`));