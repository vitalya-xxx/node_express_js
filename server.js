var express = require('express');
var app = require('./app');
var port = 8888;

app.configure(function(){
    var oneYear = 31557600000;

    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.errorHandler()); 
});

app.listen(port);
console.log('Server listening on port '+port);
