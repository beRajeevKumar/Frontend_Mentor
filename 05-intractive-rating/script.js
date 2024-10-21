document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const submitButton = document.querySelector('.submit');
  const ratingSection = document.querySelector('.container');
  const thankYouSection = document.querySelector('.thanks');
  const userRatingDisplay = document.querySelector('.points');
  const starsContainer = document.querySelector('.stars-container');
  let selectedRating = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove the 'selected' class from all buttons
      buttons.forEach(btn => btn.classList.remove('selected'));
      // Add the 'selected' class to the clicked button
      button.classList.add('selected');
      // Update the selected rating
      selectedRating = button.textContent;

      // Update the stars directly in the container
      updateStars(selectedRating);
    });
  });

  submitButton.addEventListener('click', () => {
    if (selectedRating) {
      userRatingDisplay.textContent = selectedRating;
      ratingSection.classList.add('hidden');
      thankYouSection.classList.remove('hidden');
    }
  });

  function updateStars(rating) {
    // Create a string to hold the stars
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      starsHTML += `<img class ="img" src="${i <= rating ? './images/icon-star.svg' : './images/grey-star.svg'}" />`;
    }
    starsContainer.innerHTML = starsHTML; // Update stars in the container
  }
});
