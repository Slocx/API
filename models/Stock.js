var db = require('../dbconnection'); //reference of dbconnection.js  
var Stock = {  
    getAllStocks: function(callback) {  
        return db.query("Select * from stock", callback);  
    },  
    getStocksById: function(id, callback) {  
        return db.query("select * from stock where id_stock=?", [id], callback);  
    },  
    addStock: function(Stock, callback) {  
        return db.query("Insert into stock(stock_quantity) values(?)", [stock.stock_quantity, stock.id_product], callback);  
    },  
    deleteStock: function(id, callback) {  
        return db.query("delete from stock where id_stock=?", [id], callback);  
    },  
    updateStock: function(id, Stock, callback) {  
        return db.query("update stock set stock_quantity=?,id_product=? where id_stock=?", [stock.stock_quantity, id_product, id], callback);  
    }  
};  
module.exports = Stock;  