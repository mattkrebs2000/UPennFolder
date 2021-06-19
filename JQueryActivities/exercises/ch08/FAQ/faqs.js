// "use strict";
// document.addEventListener("DOMContentLoaded", () => {
// // get the h2 tags 

// const h2s = document.querySelectorAll("#faqs h2");
// //loop through each h2 tag 
// for (let h2 of h2s) {
// // attach an event handler for the h2 tag h2.addEventListener
// ("click", evt => {
// h2.classList.toggle("minus");
// h2.nextElementSibling.classList.toggle("open"); evt.preventDefault();
// }); }
// // set focus on first h2 tag's <a> tag 

// h2s[0].firstChild.focus();
// });

"use strict";
$(document).ready( () => {
// attach event handler for all h2 tags 

$("#faqs h2").click( evt => {
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
