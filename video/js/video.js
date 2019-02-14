'use strict'
/**
 * file: video.js
 * purpose: display and control video via Js
 **/
let MyVideo = function () {
  this.vid.src = 'https://ia800300.us.archive.org/3/items/bb_snow_white/bb_snow_white_512kb.mp4';
  this.vid.style.width = '100%'; // ye olde mobile first trick
  this.vid.style.maxWidth = '800px'; // limit the trick above
  this.vid.style.height = 'auto';
  // this.vid.play(); // ???: some browsers do not allow this without a human click
  this.vid.controls = true;
}

// after the DOM load run the myVideo function
window.addEventListener('load', MyVideo);
