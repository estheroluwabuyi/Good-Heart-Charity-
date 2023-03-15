  "use strict";
  console.log("Hello");
  // Get all the items
const items = document.querySelectorAll('.item');

// Add event listeners to each item
items.forEach(item => {
  item.addEventListener('click', () => {
    // Remove the "selected" class from all items
    items.forEach(item => {
      item.classList.remove('selected');
    });

    // Add the "selected" class to the clicked item
    item.classList.add('selected');
  });
});


const freqBar = document.querySelectorAll('.barr');

freqBar.forEach(barr => {
  barr.addEventListener('click', () => {
    freqBar.forEach(barr => {
      barr.classList.remove('selected');
    });
    barr.classList.add('selected');
  });
});


//For hamburger
const image = document.querySelector(".bars")
const menuBar = document.querySelector(".menu-bar");
const navHamburger = document.querySelector(".navHamburger");
const hide = document.querySelector("body");


navHamburger.addEventListener("click", function () {
menuBar.classList.toggle("hidden");

if (image.getAttribute("src") === "close.png") {
    image.setAttribute("src", "menu.png");
    //since  the src !== close.png, then the next line of gets executed.
  } else {
    image.setAttribute("src", "close.png");
    //this first line of code gets executed after this has been clicked
  }
});

//for the fixed nav bar
const navBar = document.querySelector('.nav-bar');
const scrollPosition = 100;

window.addEventListener('scroll', function() {
  if (window.scrollY >= scrollPosition) {
    navBar.style.position = 'fixed';
    navBar.style.top = 0;
    navBar.style.zIndex = 1;
  } else {
    navBar.style.position = 'relative';
  }
});


//for the slide images and slide texts
const greaterThanSymbol = document.querySelector(".greaterThan");
let slideTextA = document.querySelector(".slideText");
let slideTextB = document.querySelector(".slideTextB");
let slideImg = document.querySelector(".slide-img-img");


greaterThanSymbol.addEventListener("click", () =>{
 if (slideImg.getAttribute("src") === "./images/slide/volunteer-organizing-clothes-donations.jpg") {
  
  slideImg.setAttribute("src", "./images/slide/volunteer-helping-with-donation-box.jpg");
  
  slideTextA.innerHTML = "make a Donation"
  slideTextB.innerHTML = "You can support by making a donation today."
  
 }else if (slideImg.getAttribute("src")=== "./images/slide/volunteer-helping-with-donation-box.jpg") {
  console.log("clicked");
  slideImg.setAttribute("src", "./images/slide/volunteer-1.jpg");
  
  slideTextA.innerHTML = "tell Friends About Us"
  slideTextB.innerHTML = "Tell your friends about us by sharing the link to our website."
  
 }else{
  slideImg.setAttribute("src", "./images/slide/volunteer-organizing-clothes-donations.jpg");
  
  slideTextA.innerHTML = "be a Good Hearts"
  slideTextB.innerHTML = "Support us to grow more."
 }
} );

const lessThanSymbol = document.querySelector(".lessThan");
 slideImg = document.querySelector(".slide-img-img");
 slideTextA = document.querySelector(".slideText");
 slideTextB = document.querySelector(".slideTextB");
 
 
 lessThanSymbol.addEventListener("click", () =>{
  if (slideImg.getAttribute("src") === "./images/slide/volunteer-organizing-clothes-donations.jpg") {
  
  slideImg.setAttribute("src", "./images/slide/volunteer-helping-with-donation-box.jpg");
  
  slideTextA.innerHTML = "make a Donation"
  slideTextB.innerHTML = "You can support by making a donation today."
  
 }else if (slideImg.getAttribute("src") === "./images/slide/volunteer-helping-with-donation-box.jpg") {
  slideImg.setAttribute("src", "./images/slide/volunteer-1.jpg");
  slideTextA.innerHTML = "tell Friends About Us"
  slideTextB.innerHTML = "Tell your friends about us by sharing the link to our website."
  
 }else{
  slideImg.setAttribute("src", "./images/slide/volunteer-organizing-clothes-donations.jpg");
  
  slideTextA.innerHTML = "be a Good Hearts"
  slideTextB.innerHTML = "Support us to grow more."
 }
 });
 
 