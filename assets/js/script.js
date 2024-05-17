'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);


function openGoogleForm() {
  // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
  var googleFormUrl = 'https://forms.gle/Sf19aJrWBsdJTYry5';
  window.open(googleFormUrl, '_blank', 'width=600,height=600');
}

function redirectToDetailedPage() {
  // Replace 'detailed-page.html' with the URL of your detailed page
  window.location.href = 'services.html';
}






/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);



/**
 * FAQ'S REVEAL
 */
const img = document.querySelector(".images");
const drop = document.querySelector(".drop");

const img2 = document.querySelector(".images2");
const drop2 = document.querySelector(".drop2");

const img3 = document.querySelector(".images3");
const drop3 = document.querySelector(".drop3");

const img4 = document.querySelector(".images4");
const drop4 = document.querySelector(".drop4");

let toggle = true;


drop.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img.src="assets/images/icon-plus.svg";
    }
    else
    {
        img.src="assets/images/icon-minus.svg"
    }
})

drop2.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img2.src="assets/images/icon-plus.svg";
    }
    else
    {
        img2.src="assets/images/icon-minus.svg"
    }
})

drop3.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img3.src="assets/images/icon-plus.svg";
    }
    else
    {
        img3.src="assets/images/icon-minus.svg"
    }
})

drop4.addEventListener('click', function(){
    toggle= !toggle;
    if(toggle)
    {
        img4.src="assets/images/icon-plus.svg";
    }
    else
    {
        img4.src="assets/images/icon-minus.svg"
    }
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.onload= function () {
 setInterval(function(){ 
     plusSlides(1);
 }, 3000);
 }


 /// 3rd faq trial

 const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )