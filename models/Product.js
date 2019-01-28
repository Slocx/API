var db = require('../dbconnection'); //reference of dbconnection.js  
var Product = {  
    getAllProducts: function(callback) {  
        return db.query("Select * from Product", callback);  
    },
    getAllProductsByOrder: function(callback){
        return db.query("SELECT Product.id_Product,Product_name,id_order as TotOrder FROM `order` inner join product ON `order`.id_product = product.id_product GROUP BY `order`.id_product ORDER BY TotOrder DESC",callback);
    },

    getProductsById: function(id, callback) {  
        return db.query("select * from Product where id_Product=?", [id], callback);  
    },  
    addProduct: function(Product, callback) {  
        return db.query("Insert into Product(Product_name, Product_price, id_stock, id_category) values(?,?,?,?)", [Product.Product_name, Product.Product_body, Product.Product_date, Product.Product_location, Product.id_user_create, Product.id_status_Product, Product.id_user_validate], callback);  
    },  
    deleteProduct: function(id, callback) {  
        return db.query("delete from Product where id_Product=?", [id], callback);  
    },  
    updateProduct: function(id, Product, callback) {  
        return db.query("update Product set Product_name=?,Product_price=?,id_stock,id_category=? where id_Product=?", [Product.Product_name, Product.Product_price, id_stock, id_category, id], callback);  
    }  
};  
module.exports = Product;  