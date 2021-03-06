var express = require('express');
var router = express.Router();
var Product = require('../models/Product');


router.get('/top', function(req, res, next) {  
    Product.getAllProductsByOrder(function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);
        }  
    });  
});  


router.get('/:id?', function(req, res, next) {  
    if (req.params.id) {  
        Product.getProductsById(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Product.getAllProducts(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  



router.post('/', function(req, res, next) {  
    Product.addProduct(req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows); //or return count for 1 & 0  
        }  
    });  
});  

router.delete('/:id', function(req, res, next) {  
    Product.deleteProduct(req.params.id, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:id', function(req, res, next) {  
    Product.updateProduct(req.params.id, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  


module.exports = router;
