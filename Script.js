/* Variables */

const body = document.querySelector('.body')
const headerNav = document.getElementById('header-nav');
const mobileNavBlock = document.getElementById('mobile-nav-block');
const mobileNavContent = document.getElementById('mobile-nav-content')
const mobileNavRow = document.getElementById('mobile-nav-row')
const mobileNavRowItems = Array.from(mobileNavRow.children)

/* Functions */

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

