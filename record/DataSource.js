var Datastore = require('nedb');

var DB = {};
DB.create = function (fileName) { 
    DB.db = new Datastore({
        filename: fileName,
        autoload: true
    });
};

DB.insert = function (doc,callback ) {
    DB.db.insert(doc, callback);
};
DB.query =  function (doc,callback ) {
    DB.db.find(doc, callback);
};

DB.count =  function (doc,callback ) {
    DB.db.count({}, callback);
};

DB.update =function (query, update, options, callback){
    DB.db.update(query, update, options, callback);
}

DB.delete = function (query, options, callback){
    DB.db.remove(query, options, callback);
}

DB.ensureIndex = function (options, callback){
    DB.db.ensureIndex(options, callback);
}

module.exports = DB;