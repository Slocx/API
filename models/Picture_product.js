var db = require('../dbconnection'); //reference of dbconnection.js  
var Picture_product = {  
    getAllPictures_product: function(callback) {  
        return db.query("Select * from Picture_product", callback);  
    },  
    getPictures_productById: function(id, callback) {  
        return db.query("select * from Picture_product where id_picture_product=?", [id], callback);  
    },  
    addPicture_product: function(Picture_product, callback) {  
        return db.query("Insert into Picture_product(picture_product_name) values(?)", [Picture_product.picture_product_name], callback);  
    },  
    deletePicture_product: function(id, callback) {  
        return db.query("delete from Picture_product where id_picture_product=?", [id], callback);  
    },  
    updatePicture_product: function(id, Picture_product, callback) {  
        return db.query("update Picture_product set picture_product_name=? where id_picture_product=?", [Picture_product.picture_product_name, id], callback);  
    }  
};  
module.exports = Picture_product;  