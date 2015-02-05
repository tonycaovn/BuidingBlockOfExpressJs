var fs = require('fs');
var file = fs.createReadStream("fruits.txt");
file.on('readable',function(){
    var chuck = file.read( );
  while(chuck !== null){
    console.log(chuck.toString( ));
    chuck = file.read( );
  }
});