var express = require('express');
var app = express();
var routes = require('./routes');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var swig = require('swig');
swig.setDefaults({cache:false});

var path = require('path');
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(process.env.PORT, function(){
    console.log('listening on ' + process.env.PORT);
});