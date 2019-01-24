var db = require('../dbconnection'); //reference of dbconnection.js  
var Vote = {  
    getAllVotes: function(callback) {  
        return db.query("Select * from Vote", callback);  
    },  
    getVotesById: function(id, callback) {  
        return db.query("select * from Vote where id_event=?", [id], callback);  
    },  
    addVote: function(Vote, callback) {  
        return db.query("Insert into Vote(id_event, id_user) values(?,?)", [Vote.id_event, Vote.id_user], callback);  
    },  
    deleteVote: function(id, callback) {  
        return db.query("delete from Vote where id_event=?", [id], callback);  
    },  
    updateVote: function(id, Vote, callback) {  
        return db.query("update Vote set id_event, id_user where id_event=?", [Vote.id_event, Vote.id_user, id], callback);  
    }  
};  
module.exports = Vote;  