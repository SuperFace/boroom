var  http = require('http');
var url = require('url');

var handlers = {};
var list = require("./actions/list");
var add = require("./actions/add");
var clear = require("./actions/clear");
handlers['/'] = list;
handlers['/add'] = add;
handlers['/clear'] = clear;

/**********用户请求跳转****************/
http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;
    if(handlers.hasOwnProperty(pathName)){
        handlers[pathName](request, response);
    }else{
        response.writeHead(404, {"Content-Type": "text/html"});
        response.end("<html><body><h1>404</h1></body></html>");
    }
}).listen(8888);