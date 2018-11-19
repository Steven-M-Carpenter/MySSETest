var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Post and admin message
  app.post("/api/message", function(req, res) {
    console.dir(req.body);
    console.log("req.body = " + JSON.stringify(req.body.data));
    // console.dir(res);
    // console.log("res = " + res.body);
    // console.log("res = " + JSON.stringify(res));
    // var msgTxt = res.data;
    // var msgTxt = res.data;
    // res.set({
    //   "Content-Type": "text/event-stream"
    // });
    // res.write(msgTxt + "\n\n");
    });

};
