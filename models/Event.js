var db = require('../dbconnection'); //reference of dbconnection.js  
var Event = {  
    getAllEvents: function(callback) {  
        return db.query("Select * from event", callback);  
    },  
    getEventsById: function(id, callback) {  
        return db.query("select * from event where id_event=?", [id], callback);  
    },  
    addEvent: function(Event, callback) {  
        return db.query("Insert into event(event_name, event_body, event_date, event_location, picture_presentation_event, id_user_create, id_status_event, id_user_validate) values(?,?,?,?,?,?,?,?)", [Event.event_name, Event.event_body, Event.event_date, Event.event_location, Event.picture_presentation_event, Event.id_user_create, Event.id_status_event, Event.id_user_validate], callback);  
    },  
    deleteEvent: function(id, callback) {  
        return db.query("delete from event where id_event=?", [id], callback);  
    },  
    updateEvent: function(id, Event, callback) {  
        return db.query("update event set event_name=?,event_body=?,event_date=?,event_location=?,picture_presentation_event=?,id_user_create=?,id_status_event=?,id_user_validate=? where id_event=?", [Event.event_name, Event.event_body, Event.event_date, Event.event_location, Event.picture_presentation_event, Event.id_user_create, Event.id_status_event, Event.id_user_validate, id], callback);  
    }  
};  
module.exports = Event;  