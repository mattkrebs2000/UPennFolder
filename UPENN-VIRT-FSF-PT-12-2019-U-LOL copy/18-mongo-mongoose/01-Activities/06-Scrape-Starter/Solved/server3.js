
var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
    "Grabbing every thread name and link\n" +
    "from reddit's webdev board:" +
    "\n***********************************\n");

// Making a request via axios for reddit's "webdev" board. We are sure to use old.reddit due to changes in HTML structure for the new reddit. The page's Response is passed as our promise argument.
axios.get("https://hackernoon.com/json-of-5-950-usa-cities-and-their-states-29352c40ad21").then(function (response) {

    // Load the Response into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);

    // An empty array to save the data that we'll scrape
    var results = [];

    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("body").each(function (i, element) {

        // Save the text of the element in a "title" variable

        //     get states
        // var title = $(element).children("h2").text();

         var title = $(element).text();
     

        // .text();
        
        // trim().replace(/[\t\n]+/g, ' ');
       
        // var percent = "%";
        // var indexOfPercent = title.indexOf(percent);
        // var indexToCutOFF = indexOfPercent + 1;
        // var newString = title.substring(0, indexToCutOFF);


        

        // In the currently selected element, look at its child elements (i.e., its a-tags),
        // then save the values for any "href" attributes that the child elements may have

      
        results.push({
            title: title

        });
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);

});


