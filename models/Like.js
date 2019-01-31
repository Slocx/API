var db = require('../dbconnection'); //reference of dbconnection.js  
var Like = {  
    getAllLikes: function(callback) {  
        return db.query("SELECT id_picture_event, Count(id_user)as LIKES FROM webproject.`like`GROUP BY id_picture_event;", callback);  
    },  
    getLikesById: function(id_picture_event, callback) {  
        return db.query("SELECT id_picture_event, Count(id_user)as LIKES FROM webproject.`like` WHERE id_picture_event=? GROUP BY id_picture_event", [id_picture_event], callback);  
    },  
    addLike: function(Like, callback) {  
        return db.query("Insert into Like(id_user,id_picture_event) values(??)", [Like.id_user,Like.id_picture_event], callback);  
    },  
    deleteLike: function(id, callback) {  
        return db.query("delete from Like where id_user=?", [id], callback);  
    },  
    updateLike: function(id, Like, callback) {  
        return db.query("update Like set where id_Like=?", [id], callback);  
    }  
};  
module.exports = Like;  