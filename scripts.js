function openModal() {
  document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

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
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
}

/* ajax */

// Load About Page
function loadAbout() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("photoGallery").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/kha-do-photo/about.html", true); //Remove kha-do-photo before launch
  // /kha-do-photo
  xhttp.send();
  // window.history.pushState("object or string", "Title", "/about");
}

// Load Contact Page
function loadContact() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("photoGallery").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/kha-do-photo/contact.html", true);
  // /kha-do-photo
  xhttp.send();
  // window.history.pushState("object or string", "Title", "/contact");
}
