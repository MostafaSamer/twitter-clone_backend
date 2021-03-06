const express = require('express');
const cors = require('cors');

const app = express();

// Connect DB
require('./app/data/conn')

// POST REQ
app.use(express.json())


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
let index = require('./app/router/index');
let userRouter = require('./app/router/userRouter');
app.use('/', index);
app.use('/user', userRouter);

const port = process.env.PORT || 8000
app.listen(port, ()=> {
    console.log("App is running at port ", port)
})