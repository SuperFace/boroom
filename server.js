var  http = require('http');
var url = require('url');

http.createServer(function(request, response){
    console.log(url.parse(request.url));
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("hello,world!");
}).listen(8888);