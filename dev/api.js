var express = require('express');
var app = express();
var port = 2000;
app.get('/',function(req,res){
    res.send("hello World");
});

app.listen(port);