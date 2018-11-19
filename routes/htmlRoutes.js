var db = require("../models");

module.exports = function (app) {

  app.get("/events", function (req, res) {
    res.render("messages", {
      msg: "SSE Test"
    });
    // res.sendFile(path.join(__dirname, "public/index.html"));
    // res.set({
    //   "Content-Type": "text/x-handlebars-template"
    // });
    // res.render("messages");
    // res.sendFile("./public/index.html");
    
    
  //   res.set({
  //     "Content-Type": "text/event-stream"
  //   });

  //   interval1 = setInterval(function () {
  //     var count = 0;
  //     count++;
  //     res.write("data: This is test message from interval 1 " + "\n\n");
  //   }, 3000);

  //   interval2 = setInterval(function () {
  //     var count = 0;
  //     count++;
  //     res.write("event: dummy\n" + "data: This is test message from interval 2 " + "\n\n");
  //   }, 5000);
  
  //   req.connection.on("close", function () {
  //     clearInterval(interval1);
  //     clearInterval(interval2);
  //   }, false);
  });
  
  app.get("/admin", function (req, res) {
    res.render("admin", {
      msg: "Admin Consoul"
    });
  });

    // Load index page
    app.get("/", function (req, res) {
      db.Example.findAll({}).then(function (dbExamples) {
        res.render("index", {
          msg: "Welcome!",
          examples: dbExamples
        });
      });
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function (req, res) {
      db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
        res.render("example", {
          example: dbExample
        });
      });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
  // });
};
