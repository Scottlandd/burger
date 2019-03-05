var orm = require("../config/orm.js");

module.exports = function(app) {

    app.get("/", function(req, res) {
        orm.selectAll(function(data) {
            console.log(data);
            res.render("index", { burgers: data });
        });
        
    });
};