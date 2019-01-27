var express = require('express');
var router = express.Router();
var User = require('../models/User');
var School = require('../models/School');

router.get('/:id?', function(req, res, next) {  
    if (req.params.id) {  
        User.getUsersById(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        User.getAllUsers(function(err, rows) {  
            if (err) {  
                res.json(err);   
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});


router.post('/', function(req, res, next) {
    School.getIdSchoolsByName(req.body.School_name, function (err, school){ 
    User.addUser(req.body,school[0].id_school, function(err) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    })
    });  
});  

router.delete('/:id', function(req, res, next) {  
    User.deleteUser(req.params.id, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id', function(req, res, next) {  
    User.updateUser(req.params.id, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  


module.exports = router;
