var db = require('../dbconnection'); //reference of dbconnection.js  
var Status_user = {  
    getAllStatuses_user: function(callback) {  
        return db.query("Select * from Status_user", callback);  
    },  
    getStatuses_userById: function(id, callback) {  
        return db.query("select * from Status_user where id_Status_user=?", [id], callback);  
    },  
    addStatus_user: function(Status_user, callback) {  
        return db.query("Insert into Status_user(Status_user_name) values(?)", [Status_user.Status_user_name], callback);  
    },  
    deleteStatus_user: function(id, callback) {  
        return db.query("delete from Status_user where id_Status_user=?", [id], callback);  
    },  
    updateStatus_user: function(id, Status_user, callback) {  
        return db.query("update Status_user set Status_user_name=? where id_Status_user=?", [Status_user.Status_user_name, id], callback);  
    }  
};  
module.exports = Status_user;  