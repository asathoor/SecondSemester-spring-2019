/**
 * file: js.js
 * purpose: lists and the date object + bonus: write html to an element
 **/
console.log('Stardate 235678.89: JavaScript from js/js.js is up and running.');

// add the days of the week in your language as a list

// @url: https://www.w3schools.com/js/js_date_methods.asp

let now = new Date();
let day = now.getDay();

console.log(day);

// translate this to your language (unfortunately this is Klingon)
let week = [
  'Kracth',
  'Ooomph',
  'Zrooff',
  'Kweenp',
  'Xrpzt',
  'Rizzz',
  'Argeh'
]; // note: the strings in the list are separated by commas.

// what is the result of this in the console, and why?
console.log(week[day]);

/* IS THE SHOP OPEN BY NOW? */

// Tip: here is kind of the logic that you need ...
var x = 1;

if (x == 1){
  var open = 'Open now - today till 16.00';
  console.log(open);
}
else {
  var open = 'The shop is closed';
  console.log(open);
}

/** LOOP **/

// loop out the names of the days of the week

/** write to an html element */
// ( document.getElementById(id).innerHTML = new HTML )
// var text = document.getElementById('content')
// text.innerHTML = open;
