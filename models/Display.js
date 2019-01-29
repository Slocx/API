var db = require('../dbconnection'); //reference of dbconnection.js  
var Display = {  
    getAllDisplays: function(callback) {  
        return db.query("Select * from Display", callback);  
    },  
    getDisplaysById: function(id, callback) {  
        return db.query("select * from Display where id_Display=?", [id], callback);  
    },  
    addDisplay: function(Display, callback) {  
        return db.query("Insert into Display(id_product) values(?)", [Display.id_product], callback);  
    },  
    deleteDisplay: function(id, callback) {  
        return db.query("delete from Display where id_Display=?", [id], callback);  
    },  
    updateDisplay: function(id, Display, callback) {  
        return db.query("update Display set id_product=? where id_Display=?", [Display.id_product, id], callback);  
    }  
};  
module.exports = Display;  