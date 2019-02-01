var db = require('../dbconnection'); //reference of dbconnection.js  
var Order = {  
    getAllOrders: function(callback) {  
        return db.query("Select * from `order`", callback);  
    },  
    getOrdersById: function(id, callback) {  
        return db.query("select * from `order` where id_order=?", [id], callback);  
    },  
    addOrder: function(Order, callback) {  
        db.query("Insert into `order`(order_price, id_user) values(?,?)", [Order.order_price, Order.id_user]);
        return db.query("SELECT LAST_INSERT_ID() as id_order", callback);
          
    },  
    deleteOrder: function(id, callback) {  
        return db.query("delete from `order` where id_order=?", [id], callback);  
    },  
    updateOrder: function(id, Order, callback) {  
        return db.query("update `order` set order_date=?,order_price=?,id_user=?,id_status_order=? where id_order=?", [Order.order_date, Order.order_price, Order.id_user, Order.id_status_order, id], callback);  
    }  
};  
module.exports = Order;  