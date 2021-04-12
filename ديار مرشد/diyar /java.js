// window.onload = function() {
//  let myIndex = 0;
//  carousel();
//   function carousel() {
//       let x = document.getElementsByClassName("mySlides");
//       for ( let i = 0; i < x.length; i++) {
//           x[i].style.display = "none";  
//       }
      
//       if (myIndex == x.length) { 
//           myIndex = 0;
//       }
//       x[myIndex].style.display = "block"; 
//       myIndex++; 
//       setTimeout(carousel, 2000); 
//   }
// }


function myFunction() {
    let dots = document.getElementById("dots");//...
    let moreText = document.getElementById("more");// words
    let btnText = document.getElementById("myBtn");// more or less 
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } 

    else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


