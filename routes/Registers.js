var express = require('express');
var router = express.Router();
var Register = require('../models/Register');

router.get('/', function(req, res, next) {  
    if (req.body.id_user && req.body.id_event) {  
        Register.getRegistersById(req.body, function(err, rows) { 
            if(JSON.stringify(rows.length)==1) { 
            if (err) {  
                res.json(err);  
            } else {  
                res.send({isRegistered:1});  
            }  
        }else{
            res.send({isRegistered:0});
        }
    });  
    }else if(req.body.id_event) {  
        Register.getUserByEvent(req.body.id_event, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Register.getAllRegisters(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  

router.post('/', function(req, res, next) {  
    Register.addRegister(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  

router.delete('/:id', function(req, res, next) {  
    Register.deleteRegister(req.params.id, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id', function(req, res, next) {  
    Register.updateRegister(req.params.id, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  


module.exports = router;
