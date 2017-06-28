"use strict";

var message = document.getElementById('li-1').style.height;
console.log(message);

document.getElementById('hb-menu').addEventListener('click', function() {
  
  var elmHeight = document.getElementById('navUl').offsetHeight;

  if(elmHeight == 0) {
    document.getElementById('html').style.overflow = "hidden";
    document.getElementById('body').style.overflow = "hidden";
    document.getElementById('navUl').style.height = "100vh";
  }

}, false);