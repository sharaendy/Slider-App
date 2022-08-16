const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;
const viewHeight = container.clientHeight;
let activeSlideInx = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideInx += 1;
    if (activeSlideInx === slidesCount) {
      activeSlideInx = 0;
    }
  } else if (direction === 'down') {
    activeSlideInx -= 1;
    if (activeSlideInx < 0) {
      activeSlideInx = slidesCount - 1;
    }
  }
  mainSlide.style.transform = `translateY(-${activeSlideInx * viewHeight}px)`;
  sidebar.style.transform = `translateY(${activeSlideInx * viewHeight}px)`;
}

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));
