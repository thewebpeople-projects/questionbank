var express = require('express');
var app = express();
var http=require('http').Server(app);
var ip = require('ip');

app.use(express.static('./')); 

require("./backend/controller")(app);

http.listen(8080,function(){
    console.log("Node Server is setup and it is listening on http://"+ip.address()+":8080");
});


