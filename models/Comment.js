var db = require('../dbconnection'); //reference of dbconnection.js  
var Comment = {  
    getAllComments: function(callback) {  
        return db.query("Select * from Comment", callback);  
    },  
    getCommentsById: function(id, callback) {  
        return db.query("select * from Comment where id_comment=?", [id], callback);  
    },  
    addComment: function(Comment, callback) {  
        return db.query("Insert into Comment(comment_body, comment_date, id_picture_event, id_user) values(?,?,?,?)", [Comment.comment_body, Comment.comment_date, Comment.id_picture_event, Comment.id_user], callback);  
    },  
    deleteComment: function(id, callback) {  
        return db.query("delete from Comment where id_comment=?", [id], callback);  
    },  
    updateComment: function(id, Comment, callback) {  
        return db.query("update Comment set comment_body=?, comment_date=?, id_picture_event=?, id_user=? where id_comment=?", [Comment.comment_body, Comment.comment_date, Comment.id_picture_event, Comment.id_user, id], callback);  
    }  
};  
module.exports = Comment;  