var database = require("../data/database");

module.exports = function(req,res){
    var fileList = database.list();
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(fileList.length > 0 ? JSON.stringify(fileList) : "null");
};
