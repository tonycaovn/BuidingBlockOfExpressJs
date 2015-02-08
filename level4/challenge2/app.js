var express = require('express');
var app = express();


app.post('/cities', function (request, response) {
  var city;
});

app.listen(3000);

var createCity = function(name, description){
  cities[name] = description;
  return name; 
};
