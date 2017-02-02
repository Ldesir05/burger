var connection = require('./connection.js');

var ORM = {
    selectAll: function(callback) {
        connection.query('SELECT * FROM `burgers`', callback)
    },

    insertOne: function(burgername, callback) {
        connection.query('INSERT INTO burgers (burger_name) VALUES (?)', burgername, callback)
    },

    updateOne: function(id, callback) {
        connection.query('UPDATE burgers SET devoured = 1 WHERE id = ?', id, callback)
    }
};

module.exports = ORM;