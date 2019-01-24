var db = require('../dbconnection'); //reference of dbconnection.js  
var Category = {  
    getAllCategories: function(callback) {  
        return db.query("Select * from category", callback);  
    },  
    getCategoriesById: function(id, callback) {  
        return db.query("select * from category where id_category=?", [id], callback);  
    },  
    addCategory: function(Category, callback) {  
        return db.query("Insert into category(category_name) values(?)", [category.category_name], callback);  
    },  
    deleteCategory: function(id, callback) {  
        return db.query("delete from category where id_category=?", [id], callback);  
    },  
    updateCategory: function(id, Category, callback) {  
        return db.query("update category set category_name=? where id_category=?", [category.category_name, id], callback);  
    }  
};  
module.exports = Category;  