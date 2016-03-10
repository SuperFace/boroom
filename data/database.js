var fs = require('fs');
const filePath = __dirname + "\\data.json";
var list, temp_list;
try{
    list = JSON.parse(fs.readFileSync(filePath, "utf-8"));
}catch(e){
    list  = [];
}
/*数据库增、删、改、查*********************/
module.exports = {
    add: function(file){
        temp_list = list.slice();
        if(file) list.push(file);
        this._store(function(){
            list = temp_list.slice();
        })
    },
    dele: function(index){
        temp_list = list.slice();
        if(index >=0) list.splice(index,1);
        this._store(function(){
            list = temp_list.slice();
        })
    },
    update: function(index, file){
        temp_list = list.slice();
        if(index >= 0 && file) list.splice(index,1, file);
        this._store(function(){
            list = temp_list.slice();
        })
    },
    list: function(){
        if(list instanceof Array) return list;
        else return [];
    },
    clear: function(){
        temp_list = list.slice();
        try{
            list.length = 0;
            fs.writeFileSync(filePath, JSON.stringify(list), "utf-8");
        }catch(e){
            list = temp_list.slice();
        }
    },
    _store: function(fn){
        if(list && list.length > 0){
          try{
              fs.writeFileSync(filePath, JSON.stringify(list), "utf-8");
          }catch(e){
              if(fn && typeof fn == "function") fn();
          }
        }
    },
};