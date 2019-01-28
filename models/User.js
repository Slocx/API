var db = require('../dbconnection'); //reference of dbconnection.js  
var User = {  
    getAllUsers: function(callback) {  
        return db.query("Select * from User", callback);  
    },  
    getUsersById: function(id, callback) {  
        return db.query("select * from User where id_User=?", [id], callback);  
    },  
    addUser: function(User, callback) {  
        return db.query("Insert into User(first_name, last_name, email, password, profile_pic, token, id_status_user, id_school) values(?,?,?,?,?,?,?,?)", [User.first_name, User.last_name, User.email, User.password, User.profile_pic, User.token, User.id_status_user, User.id_school], callback);  
    },
    deleteUser: function(id, callback) {  
        return db.query("delete from User where id_User=?", [id], callback);  
    },  
    updateUser: function(id, User, callback) {  
        return db.query("update User set first_name=?,last_name=?,email=?,password=?,profile_pic=?,token=?,id_status_user=?,id_school=? where id_user=?", [User.first_name, User.last_name, User.email, User.password, User.profile_pic, User.token, User.id_status_user, User.id_school, id], callback);  
    }  
};  
module.exports = User;  