/* Variables */

const body = document.querySelector('.body')
const headerNav = document.getElementById('header-nav');
const mobileNavBlock = document.getElementById('mobile-nav-block');
const mobileNavContent = document.getElementById('mobile-nav-content')
const mobileNavRow = document.getElementById('mobile-nav-row')
const mobileNavRowItems = Array.from(mobileNavRow.children)

const posterSlider = document.getElementById('poster-slider') // poster-slider section
const infoItemLiPText = document.querySelectorAll('.info-item-li__p-text') // info section

/* Services Slider Variables */

const serviceSliderArrowLeft = document.querySelectorAll('.slider-arrow-left')
const serviceSliderArrowRight = document.querySelectorAll('.slider-arrow-right')
const serviceSlider = document.getElementById('services-slider')
const serviceSliderItems = Array.from(serviceSlider.children)

/* Functions */

window.addEventListener('load', function () {
  if (window.innerWidth <= 959) {
    infoItemLiPText.forEach(function (element) {
      element.innerHTML = 'Ежедневно <br> с 9:00 до 23:00';
    });
  } else element.innerHTML = 'Ежедневно с 9:00 до 23:00';
});

window.addEventListener('scroll', function () {
  headerNav.classList.add('active');
  if (window.scrollY === 0) {
    headerNav.classList.remove('active');
  }
})

mobileNavBlock.addEventListener('click', function () {
  mobileNavBlock.classList.toggle('active');
  if (mobileNavBlock.classList.contains('active')) {
    mobileNavContent.classList.add('active');
    body.classList.add('active');
  } else {
    mobileNavContent.classList.remove('active');
    body.classList.remove('active');
  }
})

mobileNavContent.addEventListener('click', function (event) {
  event.stopPropagation()
})

mobileNavRowItems.forEach(function (element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active');
  })
})

/* Services Section functions */

serviceSliderArrowLeft.forEach(function (element) {
  element.addEventListener('click', function () {
    serviceSlider.scrollLeft -= serviceSlider.offsetWidth + 500;
    posterSlider.scrollLeft -= posterSlider.offsetWidth + 500;
    console.log(serviceSlider.scrollLeft)
  });
})

serviceSliderArrowRight.forEach(function (element) {
  element.addEventListener('click', function () {
    serviceSlider.scrollLeft += serviceSlider.offsetWidth + 500;
    posterSlider.scrollLeft += posterSlider.offsetWidth + 500;
  });
})