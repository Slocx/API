var db = require('../dbconnection'); //reference of dbconnection.js  
var Product = {  
    getAllProducts: function(callback) {  
        return db.query("Select * from Product", callback);  
    },
    getAllProductsByOrder: function(callback){
        return db.query("SELECT include.id_product, product_name, product_desc, product_price, id_category, stock, COUNT(include.id_product) as indice FROM webproject.include inner join product on include.id_product = product.id_product GROUP BY include.id_product ORDER BY indice DESC;",callback);
    },
    getProductsById: function(id, callback) {  
        return db.query("select * from Product where id_product=?", [id], callback);  
    },  
    addProduct: function(Product, callback) {  
        db.query("Insert into Product(product_name, product_desc, product_price, stock, id_category) values(?,?,?,?,?)", [Product.product_name, Product.product_desc, Product.product_price, Product.stock, Product.id_category]);  
        return db.query("SELECT LAST_INSERT_ID() as id_product", callback);

    },  
    deleteProduct: function(id, callback) {  
        return db.query("delete from Product where id_product=?", [id], callback);  
    },  
    updateProduct: function(id, Product, callback) {  
        return db.query("update Product set Product_name=?, Product_desc=?,Product_price=?,stock=?,id_category=? where id_Product=?", [Product.Product_name, Product.Product_desc, Product.Product_price, Product.stock, Product.id_category, id], callback);  

    }  
};  
module.exports = Product;  