var db = require('../dbconnection'); //reference of dbconnection.js  
var login = {  
    getUsersByEmail: function(User, callback) {  
        return db.query("select * from User where email=? && password=?", [User.email, User.password], callback);  
    },
      
};  
module.exports = login;  