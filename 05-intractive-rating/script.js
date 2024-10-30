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
      buttons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
      selectedRating = button.textContent;
      updateStars(selectedRating);
    });
  });

  submitButton.addEventListener('click', () => {
    if (selectedRating) {
      userRatingDisplay.textContent = selectedRating;
      ratingSection.classList.add('hidden');
      thankYouSection.classList.remove('hidden');

      // Add confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  });

  function updateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      starsHTML += `<img class="img" src="${i <= rating ? './images/icon-star.svg' : './images/grey-star.svg'}" />`;
    }
    starsContainer.innerHTML = starsHTML;
  }
});