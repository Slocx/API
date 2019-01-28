var db = require('../dbconnection'); //reference of dbconnection.js  
var Product = {  
    getAllProducts: function(callback) {  
        return db.query("Select * from Product", callback);  
    },  
    getProductsById: function(id, callback) {  
        return db.query("select * from Product where id_product=?", [id], callback);  
    },  
    addProduct: function(Product, callback) {  
        return db.query("Insert into Product(product_name, product_desc, product_price, stock, id_category) values(?,?,?,?,?)", [Product.product_name, Product.product_desc, Product.product_price, Product.stock, Product.id_category], callback);  
    },  
    deleteProduct: function(id, callback) {  
        return db.query("delete from Product where id_product=?", [id], callback);  
    },  
    updateProduct: function(id, Product, callback) {  
        return db.query("update Product set product_name=?,product_desc=?,product_price=?,stock=?,id_category=? where id_product=?", [Product.product_name, Product.product_desc, Product.product_price, Product.stock, Product.id_category, id], callback);  
    }  
};  
module.exports = Product;  