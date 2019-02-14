/**
 * file: domFun.js
 * purpose: add html to the DOM
 **/
 let Chaos = function(){

   this.w = window.innerWidth;
   this.h = window.innerHeight;

   for (i=1;i<Math.floor( (Math.random() * 200) + 7 );i++){

     this.myDot = document.createElement("div"); // create a div tag
     this.myDot.style.top = Math.floor( Math.random() * this.h -24)  +  "px";
     this.myDot.style.left = Math.floor( Math.random() * this.w -24)  +  "px";
     this.myDot.id = 'chaos_' + i; // give it an id
     this.myDot.classList.add("dots");
     this.result.appendChild(this.myDot); // append to #vid

     // mozart
     this.mozart  = document.createElement("img");
     this.mozart.src = "images/mozart.png";
     this.mozart.alt = "Mozart.";
     this.mozart.style.top = Math.floor( Math.random() * this.h -24)  +  "px";
     this.mozart.style.left = Math.floor( Math.random() * this.w -24)  +  "px";
     this.result.appendChild(this.mozart); // append to #vid
   }
 }

 // when the DOM is ready run chaos
 window.addEventListener('load', Chaos);
