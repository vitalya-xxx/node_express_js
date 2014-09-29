var express     = require('express')
    fs          = require("fs"),
    formidable  = require("formidable"),
    app         = express(),
    server      = require('http').createServer(app),
    port        = 8888,
    doc         = {'title' : 'NamePage'};

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.get('/', function (req, res) { 
    doc.title = 'Upload File Page'
    res.render('includes/upload', {'doc' : doc}); 
});

app.get('/start', function (req, res) { 
    doc.title = 'Upload File Page'
    res.render('includes/upload', {'doc' : doc}); 
});

app.post('/upload', function (req, res) { 
    console.log(req.body);
});


