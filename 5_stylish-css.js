var express = require('express'),
    stylus = require('stylus'),//you need to npm install stylus
    app = express(),
    suppliedPort = process.argv[2],
    suppliedPath = process.argv[3];

app.use(stylus.middleware(suppliedPath));

app.use(express.static(suppliedPath));

app.listen(suppliedPort);
