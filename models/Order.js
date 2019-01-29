var db = require('../dbconnection'); //reference of dbconnection.js  
var Order = {  
    getAllOrders: function(callback) {  
        return db.query("Select * from Order", callback);  
    },  
    getOrdersById: function(id, callback) {  
        return db.query("select * from Order where id_order=?", [id], callback);  
    },  
    addOrder: function(Order, callback) {  
        return db.query("Insert into Order(order_date, order_price, id_user, id_status_order) values(?,?,?,?)", [Order.order_date, Order.order_price, Order.id_user, Order.id_status_order], callback);  
    },  
    deleteOrder: function(id, callback) {  
        return db.query("delete from Order where id_order=?", [id], callback);  
    },  
    updateOrder: function(id, Order, callback) {  
        return db.query("update Order set order_date=?,order_price=?,id_user=?,id_status_order=? where id_order=?", [Order.order_date, Order.order_price, Order.id_user, Order.id_status_order, id], callback);  
    }  
};  
module.exports = Order;  