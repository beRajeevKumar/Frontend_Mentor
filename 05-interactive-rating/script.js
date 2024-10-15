'use strict';

const ratingBtn = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');
const thanks = document.querySelector('.thanks');
const container = document.querySelector('.container');
const ratingValue = document.querySelector('.points');
const overlay = document.querySelector('.overlay');
for (let i = 0; i < ratingBtn.length; i++) {
  ratingBtn[i].addEventListener('click', function () {
    ratingBtn[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
  });
}
submitBtn.addEventListener('click', function () {
  thanks.classList.remove('hidden');
  container.classList.add('hidden');
});
ratingBtn.forEach(rate => {
  rate.addEventListener('click', function () {
    ratingValue.innerHTML = rate.innerHTML;
  });
});
