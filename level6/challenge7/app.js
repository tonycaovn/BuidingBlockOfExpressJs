var url = require('url');
var request = require('request');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);
var app = require('express')( ); // Create server here
app.get('/',function(req,res){request(searchURL).pipe(res);});
app.listen(8080);