var mysql = require('mysql');

//establishing the connection to the database.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "burger_db"
});
//connection function that handles the error and show the id that we connected too.
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

//exporting the connection to the connection file to use it
module.exports = connection;

