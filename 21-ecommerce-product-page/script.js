"use strict";
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.getElementById("main-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('.remove');
const countDisplay = document.querySelector('.count');
const addCartBtn = document.querySelector('.addCartBtn');
const cartList = document.getElementById('cart-list');
const cartDropdown = document.querySelector('.cart-items');
const cartBtn = document.querySelector('.cart-btn');
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

let currentImageIndex = 0;

const updateMainImage = (src) => {
  mainImage.src = src;
  thumbnails.forEach((thumbnail, index) => {
      thumbnail.setAttribute('id', "");
  })
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    const fullImageSrc = thumbnail.getAttribute("data-full-image");
    updateMainImage(fullImageSrc);
    currentImageIndex = index;
    thumbnail.setAttribute('id', "active");    
  });
});

// Navigate left (previous image)
prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
  const fullImageSrc = thumbnails[currentImageIndex].getAttribute("data-full-image");
  updateMainImage(fullImageSrc);
});

// Navigate right (next image)
nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
  const fullImageSrc = thumbnails[currentImageIndex].getAttribute("data-full-image");
  updateMainImage(fullImageSrc);
});


// text-section
let count = 0;
const productName = "Fall Limited Edition Sneakers";
const productPrice = 125;

// Update count display
const updateCountDisplay = () => {
  countDisplay.textContent = count;
};

// Add to cart functionality
const addToCart = () => {
  if (count > 0) {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${count} x ${productName} - $${(count * productPrice).toFixed(2)}`;
    cartList.appendChild(cartItem);
    count = 0; // Reset count after adding to cart
    updateCountDisplay();
  }
};


// Event listeners
addBtn.addEventListener('click', () => {
  count++;
  updateCountDisplay();
});

removeBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCountDisplay();
  }
});

addCartBtn.addEventListener('click', addToCart);


 // Toggle mobile navigation
 hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    if (mobileNav.classList.contains('active')) {
      mobileNav.style.display = 'block'; // Show the menu
    } else {
      mobileNav.style.display = 'none'; // Hide the menu
    }
  });

  // Close mobile nav when clicking outside
  window.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar') && !event.target.matches('#hamburger')) {
      mobileNav.classList.remove('active');
      mobileNav.style.display = 'none'; // Hide the menu
    }
  });

