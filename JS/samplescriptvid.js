
//Fill info from form
var name=sessionStorage.getItem("firmname");
var add= sessionStorage.getItem("address");
var num = sessionStorage.getItem("number");
var site = sessionStorage.getItem("site");
var a =document.getElementById("sitestyle");
document.title = name;
a.href = site;
console.log(site);
document.getElementById("firm").innerHTML = "- " + name + " -";
// document.getElementById("sampleadd").innerHTML = add;
document.getElementById("sampleaddblock").innerHTML =name  + "<br>" + add;
document.getElementById("samplenum").innerHTML = num;
document.getElementById("contactus").innerHTML = "Contact " + name;
console.log(name + add);
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("slide");
  var plates = document.getElementsByClassName("plate");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < plates.length; i++) {
      plates[i].className = plates[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  plates[slideIndex-1].className += " active";
}

function menuicon(){
    var x = document.getElementById("minimenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

