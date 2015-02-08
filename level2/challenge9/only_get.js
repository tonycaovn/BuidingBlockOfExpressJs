module.exports = function(request,response,next){
    if(request.method == "GET")return next();
  else response.send('Method is not allowed');
};