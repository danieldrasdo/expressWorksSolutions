var express = require('express'),
    bodyParser = require('body-parser'),//you need to npm install body-parser
    app = express(),
    suppliedPort = process.argv[2];

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''));//when using post, use res.send
});

app.listen(suppliedPort);