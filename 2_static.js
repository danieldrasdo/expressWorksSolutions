var path = require('path'),//Oh my gosh this 'require' took me forever to figure out!
    express = require('express'),
    app = express(),
    suppliedPort = process.argv[2],
    suppliedPath = process.argv[3];

app.use(express.static(suppliedPath || path.join(__dirname, 'public')));

app.listen(suppliedPort);
