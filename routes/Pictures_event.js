var express = require('express');
var router = express.Router();
var Picture_event = require('../models/Picture_event');

router.get('/:id?', function(req, res, next) {  
    if (req.params.id) {  
        Picture_event.getPictures_eventById(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else if(req.body.id_event){
        Picture_event.getPictures_Picture_eventByIdEvent(req.body, function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
    });
    } else if(req.body.id_status_content){
        Picture_event.getPicturesByStatus(req.body, function(err,rows){
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }
    });
    } else {  
        Picture_event.getAllPictures_event(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  

router.post('/', function(req, res, next) {  
    Picture_event.addPicture_event(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  

router.delete('/', function(req, res, next) {
    if(req.body.id_picture_event){
        Picture_event.deletePicture_event(req.body, function(err, count) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(count);  
            }  
        });  
    }
});  
router.put('/', function(req, res, next) {  
    Picture_event.updatePicture_event(req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  


module.exports = router;
