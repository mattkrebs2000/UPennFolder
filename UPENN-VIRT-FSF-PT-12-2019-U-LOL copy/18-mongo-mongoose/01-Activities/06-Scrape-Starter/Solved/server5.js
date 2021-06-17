var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
    "Grabbing every thread name and link\n" +
    "from reddit's webdev board:" +
    "\n***********************************\n");

// Making a request via axios for reddit's "webdev" board. We are sure to use old.reddit due to changes in HTML structure for the new reddit. The page's Response is passed as our promise argument.
axios.get("https://www.vegasinsider.com/nfl/odds/futures/").then(function (response) {

    // Load the Response into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);

    // An empty array to save the data that we'll scrape
    var teamResults = [];
    var oddsResults = [];

    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("td.font-bold").each(function (j, element) {
        var team = $(element).text();
        teamResults.push({
            team: team
        });
    });
    $("td.last").each(function (i, elements) {
        var odds = $(elements).text();
        oddsResults.push({
            odds: odds
        });
    });


  
    for (k = 0; k < 32; k++) {

        console.log(
        "The current odds for the "+ teamResults[k].team + " to win the superbowl are: " + oddsResults[k].odds+ ".") 
    }
    // Log the results once you've looped through each of the elements found with cheerio
   
    // console.log(oddsResults[0])

});
app.get("/superbowlodds", function(req, res){

d

})