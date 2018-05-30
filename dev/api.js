var express = require('express');
var app = express();
const bodyParser = require('body-parser')
// this checks for the json format response first
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
    extended: false
}))
var port = 4000;

app.get('/blockchain', function (req, res) {
    /**
     * It will return all blockchain nodes
     * 
     */

});
app.post('/transaction', function (req, res) {
    /**
     * this will create a new transaction on blockchain
     */

});
app.get('/mine', function (req, res) {
    /**
     * it will mine/create a new block for us
     */
});


app.listen(port, function () {
    console.log('Listerning in ' + port);
});