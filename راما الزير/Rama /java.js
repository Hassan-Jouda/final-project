
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