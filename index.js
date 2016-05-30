var express = require('express');
var app = express();

var consolidate = require('consolidate');

app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');

// var data = {value: 'Hi'};
var data = require('./data/data');
var product = require('./data/product');
app.get('/', function (req, res) {
  res.render('main', data);
});
app.get('/products', function (req, res) {
  res.render('products', product);
});


app.listen(5000, function () {
  console.log('Приклад застосунку, який прослуховує 5000-ий порт!');
});
