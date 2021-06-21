"use strict";
document.addEventListener("DOMContentLoaded", () => {
// get the h2 tags 

const h2s = document.querySelectorAll("#faqs h2");
//loop through each h2 tag 
for (let h2 of h2s) {
// attach an event handler for the h2 tag 
h2.addEventListener("click", evt => {
h2.classList.toggle("minus");
h2.nextElementSibling.classList.toggle("open"); evt.preventDefault();
}); }
// set focus on first h2 tag's <a> tag 

h2s[0].firstChild.focus();
});

