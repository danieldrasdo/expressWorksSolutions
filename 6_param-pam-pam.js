var express = require('express'),
    crypto = require('crypto'),
    app = express(),
    port = process.argv[2];

app.put('/message/:id', function(req, res) {
    var dateAndID = crypto
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex');
    
    res.end(dateAndID);
});

app.listen(port);
