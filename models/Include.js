var db = require('../dbconnection'); //reference of dbconnection.js  
var Include = {  
    getAllIncludes: function(callback) {  
        return db.query("Select * from Include", callback);  
    },  
    getIncludesById: function(id, callback) {  
        return db.query("select * from Include where id_order=? && id_product=?", [id, id], callback);  
    },  
    addInclude: function(Include, callback) {  
        return db.query("Insert into Include(id_order, id_product, quantity) values(?,?,?)", [Include.id_order, Include.id_product, Include.quantity], callback);  
    },  
    deleteInclude: function(id, callback) {  
        return db.query("delete from Include where id_order=? && id_product=?", [id, id], callback);  
    },  
    updateInclude: function(id, Include, callback) {  
        return db.query("update Include set id_order=?,id_product=?,quantity=? where id_order=? && id_product=?", [Include.id_order, Include.id_product, Include.quantity, id, id], callback);  
    }  
};  
module.exports = Include; 