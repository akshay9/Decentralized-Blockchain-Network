const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');


const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET ENTIRE BLOCKCHAIN
app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

// CREATE A NEW TRANSACTION
app.post('/transaction', function (req, res) {
   
});

// MINE A BLOCK
app.get('/mine', function (req, res) {
   
});



app.listen(4000, function () {
});