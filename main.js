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

/**************************/

const prof = document.querySelector('.profile');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `profile 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(prof);

/*****/

const image = document.querySelector('.images');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image);

/**************************/

const image1 = document.querySelector('.images1');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images1 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image1);

/**************************/

const image2 = document.querySelector('.images2');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images2 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image2);

/**************************/

const image3 = document.querySelector('.images3');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images3 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image3);

/**************************/

const image4 = document.querySelector('.images4');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images4 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image4);

/**************************/

const image5 = document.querySelector('.images5');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images5 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image5);

/**************************/

const image6 = document.querySelector('.images6');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images6 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image6);

/**************************/

const image7 = document.querySelector('.images7');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images7 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image7);

/**************************/

const image8 = document.querySelector('.images8');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images8 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image8);

/**************************/

const image9 = document.querySelector('.images9');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images9 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image9);

/**************************/

const image10 = document.querySelector('.images10');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images10 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image10);

/**************************/

const image11 = document.querySelector('.images11');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images11 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image11);

/**************************/

const image12 = document.querySelector('.images12');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images12 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image12);

/**************************/

const image13 = document.querySelector('.images13');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images13 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image13);

/**************************/

const image14 = document.querySelector('.images14');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images14 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image14);

/**************************/

const image15 = document.querySelector('.images15');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images15 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image15);

/**************************/

const image16 = document.querySelector('.images16');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images16 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image16);

/**************************/

const image17 = document.querySelector('.images17');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images17 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image17);

/**************************/

const image18 = document.querySelector('.images18');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images18 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image18);

/**************************/

const image19 = document.querySelector('.images19');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images19 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image19);

/**************************/

const image20 = document.querySelector('.images20');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images20 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image20);

/**************************/

const image21 = document.querySelector('.images21');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images21 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image21);

/**************************/

const image22 = document.querySelector('.images22');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images22 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image22);

/**************************/

const image23 = document.querySelector('.images23');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images23 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image23);

/**************************/

const image24 = document.querySelector('.images24');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images24 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image24);

/**************************/

const image25 = document.querySelector('.images25');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images25 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image25);

/**************************/

const image26 = document.querySelector('.images26');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `images26 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(image26);

/**************************/

// const about = document.querySelector('.aboutPic');

// observor = new IntersectionObserver((entries) => {
//   console.log(entries);

//   if(entries[0].intersectionRatio > 0) {
//     entries[0].target.style.animation = `aboutPic 1s forwards ease-out`;

//   }else{
//     entries[0].target.style.animation = 'none';
//   }
// })

// observor.observe(about1);