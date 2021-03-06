var db = require("../models");

module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Author.findAll({


        include: [{
          model: db.post
        }]
      })
        .then(Author => console.log(Author))
        .catch(console.error)




    }).then(function(Author) {
      res.json(dbAuthor);
    });
 

  app.get("/api/authors/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here


    
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
