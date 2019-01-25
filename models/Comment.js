var db = require('../dbconnection'); //reference of dbconnection.js  
var Comment = {  
    getAllComments: function(callback) {  
        return db.query("Select * from Comment", callback);  
    },  
    getCommentsById: function(id, callback) {  
        return db.query("select * from Comment where id_Comment=?", [id], callback);  
    },  
    addComment: function(Comment, callback) {  
        return db.query("Insert into Comment(Comment_body) values(?)", [Comment.Comment_body], callback);  
    },  
    deleteComment: function(id, callback) {  
        return db.query("delete from Comment where id_Comment=?", [id], callback);  
    },  
    updateComment: function(id, Comment, callback) {  
        return db.query("update Comment set Comment_body=? where id_Comment=?", [Comment.Comment_body,id], callback);  
    }  
};  
module.exports = Comment;  