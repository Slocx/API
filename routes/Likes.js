var express = require('express');
var router = express.Router();
var Like = require('../models/Like');

router.get('/', function(req, res, next) {
    if (req.body.id_picture_event,req.body.id_user) {  
        Like.HasLiked(req.body, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else if (req.body.id_picture_event) {  
        Like.getLikesById(req.body.id_picture_event, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Like.getAllLikes(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  

router.post('/', function(req, res, next) {
    Like.addLike(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  

router.delete('/', function(req, res, next) {
    if (req.body.id_picture_event,req.body.id_user) {  
        Like.deleteLike(req.body, function(err, count) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(req.body); //or return count for 1 & 0  
            }  
        });
    }  
});  

router.put('/:id', function(req, res, next) {  
    Like.updateLike(req.params.id, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  


module.exports = router;
