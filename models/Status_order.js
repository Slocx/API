var db = require('../dbconnection'); //reference of dbconnection.js  
var Status_order = {  
    getAllStatuses_order: function(callback) {  
        return db.query("Select * from Status_order", callback);  
    },  
    getStatuses_orderById: function(id, callback) {  
        return db.query("select * from Status_order where id_status_order=?", [id], callback);  
    },  
    addStatus_order: function(Status_order, callback) {  
        return db.query("Insert into Status_order(status_order_name) values(?)", [Status_order.status_order_name], callback);  
    },  
    deleteStatus_order: function(id, callback) {  
        return db.query("delete from Status_order where id_status_order=?", [id], callback);  
    },  
    updateStatus_order: function(id, Status_order, callback) {  
        return db.query("update Status_order set status_order_name=? where id_status_order=?", [Status_order.status_order_name, id], callback);  
    }  
};  
module.exports = Status_order;  