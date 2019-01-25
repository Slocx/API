var db = require('../dbconnection'); //reference of dbconnection.js  
var Register = {  
    getAllRegisters: function(callback) {  
        return db.query("Select * from Register", callback);  
    },  
    getRegistersById: function(id, callback) {  
        return db.query("select * from Register where id_user=?", [id], callback);  
    },  
    addRegister: function(Register, callback) {  
        return db.query("Insert into Register(id_user) values(?)", [Register.id_user], callback);  
    },  
    deleteRegister: function(id, callback) {  
        return db.query("delete from Register where id_user=?", [id], callback);  
    },  
    updateRegister: function(id, Register, callback) {  
        return db.query("update Register set id_user=? where id_user=?", [Register.id_user, id], callback);  
    }  
};  
module.exports = Register; 