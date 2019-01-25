var db = require('../dbconnection'); //reference of dbconnection.js  
var School = {  
    getAllSchools: function(callback) {  
        return db.query("Select * from School", callback);  
    },  
    getSchoolsById: function(id, callback) {  
        return db.query("select * from School where id_school=?", [id], callback);  
    },  
    addSchool: function(School, callback) {  
        return db.query("Insert into School(school_name) values(?)", [School.school_name], callback);  
    },  
    deleteSchool: function(id, callback) {  
        return db.query("delete from School where id_school=?", [id], callback);  
    },  
    updateSchool: function(id, School, callback) {  
        return db.query("update School set school_name=? where id_school=?", [School.school_name, id], callback);  
    }  
};  
module.exports = School;  