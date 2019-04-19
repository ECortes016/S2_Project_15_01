"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

    Author: Emmanuel Cortes Castaneda
    Date: 4.18.19
   
   Filename: mpl_links.js

*/

window.onload = function () {
    // Stores the select elements
    var allSelect = document.forms.govLinks;
    // This for loop will allow the browser window to go to a different website, when the user selects a new option from the dropdown
    for (var i = 0; i < allSelect.length; i++) {
        allSelect.onchange = function (e) {
            window.location.href = e.target.value;
        }
    }
}