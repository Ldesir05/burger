var app = require('./../server.js');
var burger = require('./../models/burger.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        burger.mainpage(req, res);
    })

    app.post('/delete/:id', function(req, res) {
        var id = req.params.id;
        burger.devour(req, res, id);
    })

    app.post('/', function(req, res) {
        var burgername = req.body.burger;
        burger.newburger(req, res, burgername);
    })
}