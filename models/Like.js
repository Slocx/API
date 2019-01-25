var db = require('../dbconnection'); //reference of dbconnection.js  
var Like = {  
    getAllLikes: function(callback) {  
        return db.query("Select * from Like", callback);  
    },  
    getLikesById: function(id, callback) {  
        return db.query("select * from Like where id_user=?", [id], callback);  
    },  
    addLike: function(Like, callback) {  
        return db.query("Insert into Like(id_user) values(?)", [Like.id_user], callback);  
    },  
    deleteLike: function(id, callback) {  
        return db.query("delete from Like where id_user=?", [id], callback);  
    },  
    updateLike: function(id, Like, callback) {  
        return db.query("update Like set where id_Like=?", [id], callback);  
    }  
};  
module.exports = Like;  