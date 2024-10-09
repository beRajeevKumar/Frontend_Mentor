'use strict';

const ratingBtn = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');
const thanks = document.querySelector('.thanks');
const container = document.querySelector('.container');
const ratingValue = document.querySelector('.points');

let selectedRating = null;

// Function to reset all rating buttons
function resetRatings() {
  ratingBtn.forEach((btn) => {
    btn.style.backgroundColor = 'hsla(216, 12%, 8%, 0.4)';
    btn.style.color = 'hsl(0, 0%, 100%)';
  });
}

// Event listener for rating buttons
ratingBtn.forEach((rate) => {
  rate.addEventListener('click', function () {
    resetRatings(); // Reset all buttons
    // Highlight the selected button
    rate.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rate.style.color = '#fff';

    // Capture the selected rating
    selectedRating = rate.innerHTML;
    ratingValue.innerHTML = selectedRating;
  });
});

// Submit button event listener
submitBtn.addEventListener('click', function () {
  // Check if a rating was selected
  if (selectedRating) {
    thanks.classList.remove('hidden'); // Show the thank you page
    container.classList.add('hidden'); // Hide the rating container
  } else {
    alert('Please select a rating before submitting!');
  }
});
