var database = require("../data/database");

module.exports = function(req, res){
    database.clear();
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("clear Ok");
};