const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

function currentSlide1(n) {
  showSlides1((slideIndex1 = n));
}

function showSlides1(n) {
  let i;
  const slides1 = document.getElementsByClassName("blogSlides1");
  const dots = document.getElementsByClassName("blogSlider__dots--dot");

  if (n > slides1.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides1.length;
  }

  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides1[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  let i;
  const slides2 = document.getElementsByClassName("blogSlides2");
  const dots = document.getElementsByClassName("blogSlider__dots--dot");

  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides2[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3((slideIndex3 += n));
}

function currentSlide3(n) {
  showSlides3((slideIndex3 = n));
}

function showSlides3(n) {
  let i;
  const slides3 = document.getElementsByClassName("blogSlides3");
  const dots = document.getElementsByClassName("blogSlider__dots--dot");

  if (n > slides3.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides3.length;
  }

  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides3[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}

function scrollToFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
