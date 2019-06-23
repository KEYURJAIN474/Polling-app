require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const handel = require('./handlers');
const routes = require('./routes');
 
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>res.json({hello:"world"}));
app.use('/api/auth',routes.auth)
app.use('/api/polls',routes.poll);

//error message
app.use(handel.notFound);
app.use(handel.errors);




app.listen(port,console.log("server started"));