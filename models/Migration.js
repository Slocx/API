var db = require('../dbconnection'); //reference of dbconnection.js  
var Migration = {  
    getAllMigrations: function(callback) {  
        return db.query("Select * from Migration", callback);  
    },  
    getMigrationsById: function(id, callback) {  
        return db.query("select * from Migration where id=?", [id], callback);  
    },  
    addMigration: function(Migration, callback) {  
        return db.query("Insert into Migration(Migration, batch) values(?,?)", [Migration.Migration, Migration.batch], callback);  
    },  
    deleteMigration: function(id, callback) {  
        return db.query("delete from Migration where id=?", [id], callback);  
    },  
    updateMigration: function(id, Migration, callback) {  
        return db.query("update Migration set Migration=?,batch=? where id=?", [Migration.Migration, Migration.batch, id], callback);  
    }  
};  
module.exports = Migration;  