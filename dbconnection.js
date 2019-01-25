// DataBase 
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "banana",
  database: "webproject"
});

module.exports = connection;