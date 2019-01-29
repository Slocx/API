var db = require('../dbconnection'); //reference of dbconnection.js  
var Category = {  
    getAllCategories: function(callback) {  
        return db.query("Select * from Category", callback);  
    },  
    getCategoriesById: function(id, callback) {  
        return db.query("select * from Category where id_category=?", [id], callback);  
    },  
    addCategory: function(Category, callback) {  
        return db.query("Insert into Category(category_name) values(?)", [Category.category_name], callback);  
    },  
    deleteCategory: function(id, callback) {  
        return db.query("delete from Category where id_category=?", [id], callback);  
    },  
    updateCategory: function(id, Category, callback) {  
        return db.query("update Category set category_name=? where id_category=?", [Category.category_name, id], callback);  
    }  
};  
module.exports = Category;  