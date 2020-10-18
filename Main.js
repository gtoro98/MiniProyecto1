var slideIndex = [1, 1];
var slideId = ["mySlides","myProyects"]
AutoshowSlides();
showSlides(slideIndex, 1);





// Next/previous controls
function plusSlides(n, num) {
  showSlides(slideIndex[num] += n, num);
}

// Thumbnail image controls
function currentSlide(n, num) {
  showSlides(slideIndex[num] = n, num);
}

function showSlides(n, num) {
    console.log("maricooooo")
  var i;
  var slides = document.getElementsByClassName(slideId[num]);
  console.log(slides)
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex[num] = 1}
  if (n < 1) {slideIndex[num] = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if(num == 0){
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }  
}
  
  console.log(slides[slideIndex[num - 1]])
  slides[slideIndex[num]-1].style.display = "block";
  dots[slideIndex[0]-1].className += " active";
}

function AutoshowSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex[0]++;
    if (slideIndex[0] > slides.length) {slideIndex[0] = 1}
    slides[slideIndex[0]-1].style.display = "block";
    setTimeout(AutoshowSlides, 5000); // Change image every 2 seconds
  }
  