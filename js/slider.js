const slides = document.querySelector(".slides");
const allSlides = document.querySelectorAll(".slide");
const slidesLength = allSlides.length;
const slideWidth = allSlides[0].offsetWidth;
let index = 0;

const firstSlide = allSlides[0];
const lastSlide = allSlides[allSlides.length - 1];

const cloneFirstSlide = firstSlide.cloneNode(true);
const cloneLastSlide = lastSlide.cloneNode(true);

slides.appendChild(cloneFirstSlide);
slides.insertBefore(cloneLastSlide, firstSlide);

slides.addEventListener("transitionend", checkIndex);

function switchSlide(arg) {
  slides.classList.add("transition");
    if (arg == "next") {
      slides.style.left = `${slides.offsetLeft - slideWidth}px`;
      index++;
    } else {
      slides.style.left = `${slides.offsetLeft + slideWidth}px`;
      index--;
    }
}

function checkIndex() {
  slides.classList.remove("transition");
  if (index == -1) {
    slides.style.left = `-${slidesLength * slideWidth}px`;
    index = slidesLength - 1;
  }
  if (index == slidesLength) {
    slides.style.left = `-${1 * slideWidth}px`;
    index = 0;
  }
}
const play = ()=>{
  setInterval(()=> switchSlide("next"),15000)
}
play()