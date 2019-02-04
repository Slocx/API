var db = require('../dbconnection'); //reference of dbconnection.js  
var Comment = {  
    getAllComments: function(callback) {  
        return db.query("Select * from comment", callback);  
    },

    getCommentsByStatus: function(comment, callback) {  
        return db.query("select * from comment where id_status_content=?", [comment.id_status_content], callback);  
    }, 

    getCommentsByIdPictureEvent: function(comment, callback) {  
        return db.query("select * from comment where id_picture_event=? && id_status_content=?", [comment.id_picture_event,comment.id_status_content], callback);  
    }, 

    getCommentsById: function(id, callback) {  
        return db.query("select * from Comment where id_comment=?", [id], callback);   
    },  
    addComment: function(Comment, callback) {  
        return db.query("Insert into Comment(comment_body, id_picture_event, id_user) values(?,?,?)", [Comment.comment_body, Comment.id_picture_event, Comment.id_user], callback);  
    },  
    deleteComment: function(id, callback) {  
        return db.query("delete from Comment where id_comment=?", [id], callback);  
    },  
    updateComment: function(Comment, callback) {  
        return db.query("update Comment set id_status_content=? where id_comment=?", [Comment.id_status_content, Comment.id_comment], callback);  
    }  
};  
module.exports = Comment;  