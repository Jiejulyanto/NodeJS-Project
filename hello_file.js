var http = require('http');
var fileSys = require('fs');

var server = http.createServer(function(req,res){
    fileSys.readFile('pages1/index.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end();
    })
});

server.listen(8000)