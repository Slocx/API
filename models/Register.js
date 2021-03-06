var db = require('../dbconnection'); //reference of dbconnection.js  
var Register = {  
    getAllRegisters: function(callback) {  
        return db.query("Select * from Register", callback);  
    },
    getUserByEvent: function(id_event,callback) {  
        return db.query("SELECT event_name,first_name,last_name,email,event_date,event_location FROM webproject.register INNER JOIN `user` on `register`.id_user = `user`.id_user INNER JOIN `event` on `register`.id_event = `event`.id_event WHERE `register`.id_event = ?", id_event, callback);  
    },
    getRegistersById: function(Register, callback) {  
        return db.query("select * from Register where id_user=? && id_event=?", [Register.id_user,Register.id_event], callback);  
    },  
    addRegister: function(Register, callback) {  
        return db.query("Insert into Register(id_user,id_event) values(?,?)", [Register.id_user,Register.id_event], callback);  
    },  
    deleteRegister: function(id, callback) {  
        return db.query("delete from Register where id_user=?", [id], callback);  
    },  
    updateRegister: function(id, Register, callback) {  
        return db.query("update Register set id_user=? where id_user=?", [Register.id_user, id], callback);  
    }  
};  
module.exports = Register; 