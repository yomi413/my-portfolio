document.querySelector(".nav-link").addEventListener("click", function() {
  document.querySelector("#skills").scrollIntoView();
});

document.querySelector(".nav-link").addEventListener("click", function() {
  document.querySelector("#projects").scrollIntoView();
});

document.querySelector(".nav-link").addEventListener("click", function() {
  document.querySelector("#publications").scrollIntoView();
});

document.querySelector(".nav-link").addEventListener("click", function() {
  document.querySelector("#about-me").scrollIntoView();
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
