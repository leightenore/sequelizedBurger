const db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burger.findAll().then(function (data) {
      let hbsObject = {
        burgers: data
      };
      console.log("here");
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  app.put("/api/burgers/:id", function (req, res) {

    db.Burger.update({
        devoured: true
    },
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbBurger) {
        res.json(dbBurger)
      });
  });
};