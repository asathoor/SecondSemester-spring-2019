/**
 * file: js.js
 * purpose: lists and the date object + bonus: write html to an element
 **/
/** HOW TO ADD ANY HTML TO A TAG **/
var myText = document.getElementById('content');
myText.innerHTML += '<h2>The Exorbitant Shop</h2>';

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
  'Sontag : closed',
  'Montag',
  'Dienstag',
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

//var x = 1;
//x = hour;

if (hour >= 9 || hour <= 17){
  var open = 'Open now - today till 16.00';
    // here: write code that will send the open message
    // to the content id ...
    // tip: document.getE...
   var openTxt = document.getElementById('content');
    openTxt.innerHTML += open; 
  console.log(open);

}
if (hour > 17 || hour < 9){
    // we're closed
}
else {
  var open = 'The shop is closed';
  //
}



