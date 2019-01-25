var db = require('../dbconnection'); //reference of dbconnection.js  
var School = {  
    getAllSchools: function(callback) {  
        return db.query("Select * from School", callback);  
    },  
    getSchoolsById: function(id, callback) {  
        return db.query("select * from School where id_School=?", [id], callback);  
    },  
    addSchool: function(School, callback) {  
        return db.query("Insert into School(School_name) values(?)", [School.School_name], callback);  
    },  
    deleteSchool: function(id, callback) {  
        return db.query("delete from School where id_School=?", [id], callback);  
    },  
    updateSchool: function(id, School, callback) {  
        return db.query("update School set School_name=? where id_School=?", [School.School_name, id], callback);  
    }  
};  
module.exports = School;  