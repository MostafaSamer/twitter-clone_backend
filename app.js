const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

// POST REQ
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Access Api
app.use(cors({
    origin:['http://localhost:3000','http://127.0.0.1:3000'],
    credentials:true
}));
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

// Routers
let index = require('./router/index');
let userRouter = require('./router/userRouter');
app.use('/', index);
app.use('/user', userRouter);

const port = process.env.PORT || 8000
app.listen(port, ()=> {
    console.log("App is running at port ", port)
})