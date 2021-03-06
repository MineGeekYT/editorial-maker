var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

const PATH = require('path');
const PORT = process.env.PORT || 5000;
const views  = PATH.join(__dirname, "views");

// Express initialization

app.use(express.static(PATH.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/load', function(req, res){
  
})

app.listen(PORT, function(){
  console.log("app up on port: " + PORT);
});