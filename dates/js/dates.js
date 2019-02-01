/**
 * file: js.js
 * purpose: lists and the date object + bonus: write html to an element
 **/
console.log('Stardate 235678.89: JavaScript from js/dates.js is up and running.');

// add the days of the week in your language as a list

// @url: https://www.w3schools.com/js/js_date_methods.asp

/** HOW TO ADD ANY HTML TO A TAG **/
var myText = document.getElementById('content');
myText.innerHTML += '<h2>The Exorbitant Shop</h2>';
// What is the difference between += and + ?
// Try this: add an image

/** THE DATE OPBJECT **/
let now = new Date();
let day = now.getDay();
let hour = now.getHours();
console.log('The day is: ' + day);
console.log('The hour is: ' + hour);
// after a similar method you can get the month, time etc.
// see: https://www.w3schools.com/js/js_date_methods.asp

// translate this to your language (unfortunately this is the Klingon 7-day week)
let week = [
  'Kract',
  'Ooomp',
  'Zroof',
  'Kween',
  'Aargh',
  'Rizzz',
  'Boomm'
]; // note: the strings in the list are separated by commas.

// what is the result of this in the console, and why?
console.log(week[day]);

/*
 IS THE SHOP OPEN BY NOW?

 The following code is similar to the code you needd.
*/

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
