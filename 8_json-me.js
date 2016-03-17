var express = require('express'),
    fs = require('fs'),
    app = express(),
    port = process.argv[2],
    fileName = process.argv[3];

app.get('/books', function(req, res) {
    fs.readFile(fileName, function(err, data) {
        if (err) {
            console.log(err);
            res.send(500);
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port);
