var db = require('../dbconnection'); //reference of dbconnection.js  
var Comment = {  
    getAllComments: function(callback) {  
        return db.query("Select * from Comment", callback);  
    },  
    getCommentsById: function(id, callback) {  
        return db.query("select * from Comment where id_comment=?", [id], callback);  
    },  
    addComment: function(Comment, callback) {  
        return db.query("Insert into Comment(id_picture_event, id_user, comment_body) values(?,?,?)", [Comment.id_picture_event, Comment.id_user, Comment.comment_body], callback);  
    },  
    deleteComment: function(id, callback) {  
        return db.query("delete from Comment where id_comment=?", [id], callback);  
    },  
    updateComment: function(id, Comment, callback) {  
        return db.query("update Comment set id_picture_event=?, id_user=?,comment_body=? where id_picture_event=?", [Comment.id_picture_event, Comment.id_user, Comment.comment_body,id], callback);  
    }  
};  
module.exports = Comment;  