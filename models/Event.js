var db = require('../dbconnection'); //reference of dbconnection.js  
var Event = {  
    getAllEvents: function(callback) {  
        return db.query("Select * from event ORDER BY event_date DESC ", callback);  
    },
    getEventsByStatus: function(id_status, callback) {  
        return db.query("Select * from event WHERE id_status_event=? ORDER BY event_date DESC ",[id_status], callback);  
    },
    
    getEventsById: function(id, callback) {  
        return db.query("select * from event where id_event=?", [id], callback);  
    },  
    addEvent: function(Event, callback) {  
        return db.query("Insert into event(event_name, event_body, event_date, event_location, picture_presentation_event, id_user_create) values(?,?,?,?,?,?)", [Event.event_name, Event.event_body, Event.event_date, Event.event_location, Event.picture_presentation_event, Event.id_user_create], callback);  
    },  
    deleteEvent: function(id, callback) {  
        return db.query("delete from event where id_event=?", [id], callback);  
    },  
    updateEvent: function(id, Event, callback) {  
        return db.query("update event set event_name=?,event_body=?,event_date=?,event_location=?,picture_presentation_event=?,id_user_create=?,id_status_event=?,id_user_validate=? where id_event=?", [Event.event_name, Event.event_body, Event.event_date, Event.event_location, Event.picture_presentation_event, Event.id_user_create, Event.id_status_event, Event.id_user_validate, id], callback);  
    }  
};  
module.exports = Event;  