var express = require('express'),
    app = express(),
    suppliedPort = process.argv[2],
    suppliedPathToJade = process.argv[3];

app.set('view engine', 'jade');
app.set('views', suppliedPathToJade);

app.get('/home', function(req, res) {
    res.render('index', { date: new Date().toDateString() });
});

app.listen(suppliedPort);
