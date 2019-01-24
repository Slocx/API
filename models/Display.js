var db = require('../dbconnection'); //reference of dbconnection.js  
var Display = {  
    getAllDisplays: function(callback) {  
        return db.query("Select * from display", callback);  
    },  
    getDisplaysById: function(id, callback) {  
        return db.query("select * from display where id_display=?", [id], callback);  
    },  
    addDisplay: function(Display, callback) {  
        return db.query("Insert into display(id_product) values(?)", [display.id_product], callback);  
    },  
    deleteDisplay: function(id, callback) {  
        return db.query("delete from display where id_display=?", [id], callback);  
    },  
    updateDisplay: function(id, Display, callback) {  
        return db.query("update display set id_product=? where id_display=?", [display.id_product, id], callback);  
    }  
};  
module.exports = Display;  