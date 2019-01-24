var db = require('../dbconnection'); //reference of dbconnection.js  
var Comment = {  
    getAllComments: function(callback) {  
        return db.query("Select * from comment", callback);  
    },  
    getCommentsById: function(id, callback) {  
        return db.query("select * from comment where id_comment=?", [id], callback);  
    },  
    addComment: function(Comment, callback) {  
        return db.query("Insert into comment(comment_body) values(?)", [comment.comment_body], callback);  
    },  
    deleteComment: function(id, callback) {  
        return db.query("delete from comment where id_comment=?", [id], callback);  
    },  
    updateComment: function(id, Comment, callback) {  
        return db.query("update comment set comment_body=? where id_comment=?", [comment.comment_body,id], callback);  
    }  
};  
module.exports = Comment;  