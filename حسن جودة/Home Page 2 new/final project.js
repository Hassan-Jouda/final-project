//more
var i = 0;
var txt =
  "We, Team 5, have worked on creating this website together from the start";
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    demo.style.display = "none";
    txt.style.display = "inline";
  }
}
// function myFunction() {
//   var element = txt;
//   element.className = element.className.replace(/\bmystyle\b/g, "");
// }
////////////////////////////
//top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// ///////////////////////////////
// document.getElementById("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// ///////////////////////////////
// document.getElementById("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

///////////////////////////////////////////////////////
// When the user scrolls the page, execute myFunction
