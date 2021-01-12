const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
const app = express();
app.use(cors())
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
const userRoute  = require('./routes/api/users')
const PORT = 4000;

///connect to db
dbConnect();

///to start app
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})
app.use('/api/users', userRoute)