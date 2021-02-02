// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navBar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// **********************************************************
window.onload=function(){
  w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
  var targetWidth = 1000;
  if ( w >= targetWidth) {     
    //Add your javascript for screens wider than or equal to 768 here
    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
  }
 
  };
// **********************************************************

let menu_icon = document.getElementById("navBarMobile");
let side_nav = document.getElementById("side_nav");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

side_nav.style.right = "-200px";

menu_icon.onclick = function () {
  if (side_nav.style.right == "-200px") {
    side_nav.style.right = "0";
  } else {
    side_nav.style.right = "-200px";
  }
};

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navTop").style.top = "0";
  } else {
    document.getElementById("navTop").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});