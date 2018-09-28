// Toggle Mobile Menu Button
$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $('#mobileMenu').toggleClass("hide");
    $('#photoGallery').toggleClass("gallerySpace")
  })
})

/* =================
   PHOTO MODAL
==================== */

function openModal() {
  document.getElementById('myModal').style.display = "flex";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// Using the Keyboard to Navigate and Close Modal
document.onkeydown = function(evt) {
    evt = evt || window.event;
    //escape key to escape modal
    if (evt.keyCode == 27) {
      document.getElementById('myModal').style.display = "none";
    }
    //left arrow to go left
    if (evt.keyCode == 37) {
      plusSlides(-1);
    }
    //right arrow to go right
    if (evt.keyCode == 39) {
      plusSlides(+1);
    }
};

var slideIndex = 1;

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
