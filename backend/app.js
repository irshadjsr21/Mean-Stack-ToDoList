// Importing Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3000;

//Initializing app
let app = express();

//Adding Middlewares
app.use(cors());
app.use(bodyParser.json());

//Connecting to Database
mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser:true });

let db = mongoose.connection;

db.once('open', ()=> {
    console.log('Connected to MongoDB');
});

db.on('error', (error)=>{
    console.log(error);
});

//Adding Routes
app.use('/items', require('./routes/items'));

app.listen(PORT, ()=>{
    console.log('Listening on port : ' + PORT);
});