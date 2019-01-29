var db = require('../dbconnection'); //reference of dbconnection.js  
var Status_event = {  
    getAllStatuses_event: function(callback) {  
        return db.query("Select * from Status_event", callback);  
    },  
    getStatuses_eventById: function(id, callback) {  
        return db.query("select * from Status_event where id_status_event=?", [id], callback);  
    },  
    addStatus_event: function(Status_event, callback) {  
        return db.query("Insert into Status_event(status_event_name) values(?)", [Status_event.status_event_name], callback);  
    },  
    deleteStatus_event: function(id, callback) {  
        return db.query("delete from Status_event where id_status_event=?", [id], callback);  
    },  
    updateStatus_event: function(id, Status_event, callback) {  
        return db.query("update Status_event set status_event_name=? where id_status_event=?", [Status_event.status_event_name, id], callback);  
    }  
};  
module.exports = Status_event;  