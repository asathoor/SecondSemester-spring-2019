/**
 * file: domTree.js
 * purpose: understand the dom and work in protected mode
 **/
"use strict"; // strict mode: better error messages, but more stict on errors

let a = "I am a global and unprotected variable."; // all scripts may use this: security?

(function() { // autostart function

  let b = "I am a protected variable"; // protected inside the scope of a function

  // test the script
  var now = new Date();
  console.log("domTree.js running: " + now);

  // addressing an element in the DOM
  document.getElementById('result').innerHTML = "<strong>Here I add more HTML to the DOM</strong>";

  // the WINDOW = the browser window
  /*
  window.innerHeight - the inner height of the browser window (in pixels)
  window.innerWidth - the inner width of the browser window (in pixels)
  The browser window (the browser viewport) is NOT including toolbars and scrollbars.

  For Internet Explorer 8, 7, 6, 5:

  document.documentElement.clientHeight
  document.documentElement.clientWidth
  or
  document.body.clientHeight
  document.body.clientWidth
  */

  // EXPERIMENT: write out the size of your window in pixels
  var w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  var h = window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  var w3onWindowLink = "https://www.w3schools.com/js/js_window.asp";

  console.log("This is handy in responsive web solutions. JavaScripts knows your browser. My width = " +
    w + "px and my heigth = " +
    h +
    "px");

  // discuss: JavaScript and mobile vs larger screen design ...

  // THE WINDOW OBJECT (open and close browser windows)
  /*
  let resize = window.addEventListener('click', function(){
    var myWindow;
    myWindow = window.open("openMe.html", "", "width=100, height=100");
    myWindow.resizeTo(333,333);
  });
  */

  // Create your own objects:
  var person = {
    firstName: "Harold",
    lastName: "Bluetooth",
    born: 958,
    dies: 986,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // document.getElementById("demo").innerHTML = person.fullName();

})(); // end the function
