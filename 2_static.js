var path = require('path'),
    express = require('express'),
    app = express(),
    suppliedPortNumber = process.argv[2],
    suppliedPath = process.argv[3];

app.use(express.static( suppliedPath || path.join(__dirname, 'public') ));

app.listen(suppliedPortNumber);
