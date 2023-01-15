let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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





function loadThingsdonate() {
  var donates = {

    bio01: {
      product: "Chair",
      photo: "img/chair.png",
      donor: "David Arrivera",
      about: "Chair in good condition but uncomfortable",
    },
  };

  var content = document.getElementById("content");

  for (var bio in donates) {
content.innerHTML += '<div class="card">' + '<img src="' + poems[bio].photo + '"/>' + "<details>" + "<summary>" + donates[bio].product + "</summary>" + "<p>" + donates[bio].donor + "</p>" + "<blockquote><q>" + donates[bio].about + "</q></blockquote>" + "</details></div>";
  }

}

loadThingsdonate();

/*Image Slideshow
var images = ["img/Chair.jpg", "img/Couch.jpg", "img/Table.jpg", "img/TV.jpg", "img/Shelf.jpg"];
var currentImageIndex = 0;
var slide = document.getElementById("slide");
var indicator = document.getElementById("indicator");

slide.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  slide.src = images[currentImageIndex];
  indicator.innerHTML = (currentImageIndex + 1) + "/" + images.length;
});*/

