require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/app.routes');

const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

const db_connection = "mongodb+srv://viridian:viridian123@cluster0.6iyvc8y.mongodb.net/viridian?retryWrites=true&w=majority";

mongoose.connect(db_connection, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("BD connect"))
.catch((e) => console.log(e));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/',routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});