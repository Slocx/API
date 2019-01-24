var db = require('../dbconnection'); //reference of dbconnection.js  
var Include = {  
    getAllIncludes: function(callback) {  
        return db.query("Select * from Include", callback);  
    },  
    getIncludesById: function(id, callback) {  
        return db.query("select * from Include where id_order=?", [id], callback);  
    },  
    addInclude: function(Include, callback) {  
        return db.query("Insert into Include(quantity) values(?)", [Include.quantity], callback);  
    },  
    deleteInclude: function(id, callback) {  
        return db.query("delete from Include where id_order=?", [id], callback);  
    },  
    updateInclude: function(id, Include, callback) {  
        return db.query("update Include set quantity=? where id_order=?", [Include.quantity, id], callback);  
    }  
};  
module.exports = Include; 