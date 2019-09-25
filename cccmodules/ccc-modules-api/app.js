const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const db = 'mongodb://admin:jamsembilan50@localhost:27017/cccmodules';
const books = require('./routes/book.route');
const cors = require('cors');
mongoose.connect(db);
mongoose.connection.on('connected',err=>console.log('Database was connected...'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())


app.use('/ccc-services', books);


const repodoc = require('./repo')
app.get('/', function(req, res){
    res.send(repodoc)
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});