var database = require("../data/database");

module.exports = function(req,res){
    var _file = {"name": "linxl", "size": 800};
    database.add(_file);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("add OK");
};
