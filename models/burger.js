var ORM = require('./../config/orm.js');

var burger = {

    mainpage: function(req, res) {
        ORM.selectAll(function(error, results) {
            if (error) throw error;
            res.render("index", {burgers: results});
        })
    },

    devour: function(req, res, id) {
        ORM.updateOne(id, function(error, results) {
            if (error) throw error;
            res.redirect('/');
        })
    },
    newburger: function(req, res, burgername) {
        ORM.insertOne(burgername, function(error, results) {
            if (error) throw error;
            res.redirect('/');
        })
    }
}

module.exports = burger;