'use strict'
/**
 * file: video02.js
 * purpose: display and control video via Js

 This script will create a video tag in the DOM
 somewhat along these lines:

     <video width="320" height="240" controls>
       <source src="movie.mp4" type="yourvideo/mp4">
        Your browser does not support the video tag.
     </video>

 **/
let MyVideo = function() {
  this.newVideo = document.createElement("video"); // create a video tag
  this.newVideo.id = 'water'; // give it an id
  this.newVideo.src = 'video/182-1080.mp4'; // add src
  this.newVideo.style.width = '400px'; // styles
  this.vid.appendChild(this.newVideo); // append to #vid
}

// after the DOM load run the myVideo function
window.addEventListener('load', MyVideo);
