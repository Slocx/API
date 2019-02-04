var express = require('express');
var router = express.Router();
var Comment = require('../models/Comment');

router.get('/:id?', function(req, res, next) {  
    if (req.params.id) {  
        Comment.getCommentsById(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } 
    else if (req.body.id_picture_event && req.body.id_status_content) {  
        Comment.getCommentsByIdPictureEvent(req.body, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else if (req.body.id_status_content) {  
        Comment.getCommentsByStatus(req.body, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } 
    else {  
        Comment.getAllComments(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  

router.post('/', function(req, res, next) {  
    Comment.addComment(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  

router.delete('/', function(req, res, next) {  
    Comment.deleteComment(req.body.id_comment, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/', function(req, res, next) {  
    Comment.updateComment(req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  


module.exports = router;
