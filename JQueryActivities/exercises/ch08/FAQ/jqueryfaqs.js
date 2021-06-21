
"use strict";
$(document).ready(() => {
// attach event handler for all h2 tags 

$("#faqs h2").click(evt => {
// get clicked h2 tag 
const h2 = evt.currentTarget;
// toggle minus class for h2 tag and show or hide related div 

$(h2).toggleClass("minus"); 
$(h2).next().toggleClass("open"); 
evt.preventDefault();
});
// set focus on first h2 tag's <a> tag 
$("#faqs").find("a:first").focus();
}); 
