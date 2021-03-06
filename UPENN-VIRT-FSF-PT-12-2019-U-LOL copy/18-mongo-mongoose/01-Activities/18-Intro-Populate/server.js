//where is the HTML route that prompts the index.html page to come up when we go to localhost:3018???

var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3018;

// Require all models
var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder

//This must be my "HTML route for the index.html page" It shows this and not the other one because it is first. 
app.use(express.static("public"));

//Why does this route need to be "absolute"?

//Here is another html route that won't show up at "/" because the one above it comes first. 

app.get('/be', function (req, res) {
  res.sendFile("/Users/matt/Desktop/UPENN-VIRT-FSF-PT-12-2019-U-LOL/18-mongo-mongoose/01-Activities/18-Intro-Populate/public/trythis.html");
});

app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/populate18", { useNewUrlParser: true });

// When the server starts, create and save a new Library document to the db
// The "unique" rule in the Library model's schema will prevent duplicate libraries from being added to the server
db.Library.create({ name: "Campus Library" })
  .then(function(dbLibrary) {
    // If saved successfully, print the new Library document to the console
    console.log("A" + dbLibrary);
  })
  .catch(function(err) {
    // If an error occurs, print it to the console
    console.log(err.message);
  });

// Routes

// POST route for saving a new Book to the db and associating it with a Library
app.post("/submit", function(req, res) {
  // Create a new Book in the database
  db.Book.create(req.body)
    .then(function(dbBook) {
       console.log("B" + dbBook);
      // If a Book was created successfully, find one library (there's only one) and push the new Book's _id to the Library's `books` array
      // { new: true } tells the query that we want it to return the updated Library -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Library.findOneAndUpdate({}, { $push: { books: dbBook._id } }, { new: true });
    })
    .then(function(dbLibrary) {
       console.log("C" + dbLibrary);
      // If the Library was updated successfully, send it back to the client
      res.json(dbLibrary);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for getting all books from the db
app.get("/books", function(req, res) {
  // Using our Book model, "find" every book in our db
   console.log("E" + res);
  db.Book.find({})
    .then(function(dbBook) {
      // If any Books are found, send them to the client
      res.json(dbBook);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for getting all libraries from the db
app.get("/library", function(req, res) {
  // Using our Library model, "find" every library in our db
   console.log("F" + dbLibrary);
  db.Library.find({})
    .then(function(dbLibrary) {
      // If any Libraries are found, send them to the client
      res.json(dbLibrary);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route to see what library looks like WITH populating
app.get("/populated", function(req, res) {
  // Using our Library model, "find" every library in our db and populate them with any associated books
   console.log("G" + res);
  db.Library.find({})

    // Specify that we want to populate the retrieved libraries with any associated books
    .populate("books")
    .then(function(dbLibrary) {
      // If any Libraries are found, send them to the client with any associated Books
      res.json(dbLibrary);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
