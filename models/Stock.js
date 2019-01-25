var db = require('../dbconnection'); //reference of dbconnection.js  
var Stock = {  
    getAllStocks: function(callback) {  
        return db.query("Select * from stock", callback);  
    },  
    getStocksById: function(id, callback) {  
        return db.query("select * from Stock where id_stock=?", [id], callback);  
    },  
    addStock: function(Stock, callback) {  
        return db.query("Insert into Stock(stock_quantity, id_product) values(?,?)", [Stock.stock_quantity, Stock.id_product], callback);  
    },  
    deleteStock: function(id, callback) {  
        return db.query("delete from Stock where id_stock=?", [id], callback);  
    },  
    updateStock: function(id, Stock, callback) {  
        return db.query("update Stock set stock_quantity=?,id_product=? where id_stock=?", [Stock.stock_quantity, Stock.id_product, id], callback);  
    }  
};  
module.exports = Stock;  