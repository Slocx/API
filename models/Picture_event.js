var db = require('../dbconnection'); //reference of dbconnection.js  
var Picture_event = {  
    getAllPictures_event: function(callback) {  
        return db.query("Select * from Picture_event", callback);  
    },  
    getPictures_Picture_eventById: function(id, callback) {  
        return db.query("select * from Picture_event where id_Picture_event=?", [id], callback);  
    },
    getPictures_Picture_eventByIdEvent: function(id_event, callback) {  
        return db.query("select * from Picture_event where id_event=? Order by created_at DESC", [id_event], callback);  
    },    
    addPicture_event: function(Picture_event, callback) {  
        return db.query("Insert into Picture_event(Picture_event_name, id_user, id_event) values(?,?,?)", [Picture_event.Picture_event_name, Picture_event.id_user, Picture_event.id_event], callback);  
    },  
    deletePicture_event: function(id, callback) {  
        return db.query("delete from Picture_event where id_Picture_event=?", [id], callback);  
    },  
    updatePicture_event: function(id, Picture_event, callback) {  
        return db.query("update Picture_event set Picture_event_name=?, id_user=?, id_event=? where id_Picture_event=?", [Picture_event.Picture_event_name, Picture_event.id_user, Picture_event.id_event, id], callback);  
    }  
};  
module.exports = Picture_event;  