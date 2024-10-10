
use strict';

const ratingBtn = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');
const thanks = document.querySelector('.thanks');
const container = document.querySelector('.container');
const ratingValue = document.querySelector('.points');
let selectedRating = null; // Track selected rating

// Handle rating button click
ratingBtn.forEach(rate => {
  rate.addEventListener('click', function () {
    // Reset the background of all buttons
    ratingBtn.forEach(btn => btn.style.backgroundColor = 'hsl(216, 12%, 8%)');
    
    // Set the background of the selected button
    rate.style.backgroundColor = 'hsl(25, 97%, 53%)';
    
    // Store the selected rating
    selectedRating = rate.innerHTML;
  });
});

// Handle submit button click
submitBtn.addEventListener('click', function () {
  if (selectedRating) {
    ratingValue.innerHTML = selectedRating; // Set the selected rating in the thank you message
    thanks.classList.remove('hidden');
    container.classList.add('hidden');
  } else {
    alert('Please choose a rating before submitting!'); // Show error if no rating is selected
  }
});
